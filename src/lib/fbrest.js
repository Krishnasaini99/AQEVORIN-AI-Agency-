// Firebase REST helpers — pure fetch, no SDK. Used by the public content loader
// and by the #/admin panel (auth + Firestore writes + Storage uploads).

export const PROJECT_ID = 'aqevorin-ai-agency-website'
export const API_KEY = 'AIzaSyBtQXCcJGoNga_qwvFKtNb-sHUvqF2vdJs'
export const STORAGE_BUCKET = 'aqevorin-ai-agency-website.firebasestorage.app'
export const ADMIN_EMAIL = 'admin@aqevorin.ai'

const DOC_BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/content`

/* ---------- Firestore REST field codec ---------- */

export function encodeValue(v) {
  if (v === null || v === undefined) return { nullValue: null }
  if (typeof v === 'string') return { stringValue: v }
  if (typeof v === 'boolean') return { booleanValue: v }
  if (typeof v === 'number') {
    return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v }
  }
  if (Array.isArray(v)) return { arrayValue: { values: v.map(encodeValue) } }
  if (typeof v === 'object') return { mapValue: { fields: encodeFields(v) } }
  return { stringValue: String(v) }
}

export function encodeFields(obj) {
  const fields = {}
  for (const [k, val] of Object.entries(obj)) fields[k] = encodeValue(val)
  return fields
}

export function decodeValue(val) {
  if (!val) return null
  if ('stringValue' in val) return val.stringValue
  if ('integerValue' in val) return Number(val.integerValue)
  if ('doubleValue' in val) return Number(val.doubleValue)
  if ('booleanValue' in val) return val.booleanValue
  if ('nullValue' in val) return null
  if ('timestampValue' in val) return val.timestampValue
  if ('arrayValue' in val) return (val.arrayValue.values || []).map(decodeValue)
  if ('mapValue' in val) return decodeFields(val.mapValue.fields || {})
  return null
}

export function decodeFields(fields) {
  const out = {}
  for (const [k, v] of Object.entries(fields || {})) out[k] = decodeValue(v)
  return out
}

/* ---------- Firestore documents (public read / admin write) ---------- */

export async function fetchDoc(id) {
  try {
    const r = await fetch(`${DOC_BASE}/${id}?key=${API_KEY}`)
    if (r.status === 404) return null
    if (!r.ok) return null
    const j = await r.json()
    return decodeFields(j.fields)
  } catch {
    return null
  }
}

export async function fetchAllDocs(ids) {
  const results = await Promise.all(ids.map(id => fetchDoc(id)))
  const out = {}
  ids.forEach((id, i) => { if (results[i]) out[id] = results[i] })
  return out
}

/** Full replace of the given document with `data` (admin session required). */
export async function saveDoc(id, data, idToken) {
  const r = await fetch(`${DOC_BASE}/${id}?key=${API_KEY}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${idToken}` },
    body: JSON.stringify({ fields: encodeFields(data) }),
  })
  if (!r.ok) {
    let detail = ''
    try { detail = (await r.json()).error?.message || '' } catch {}
    throw new Error(`Save failed (${r.status}) ${detail}`)
  }
  return true
}

/* ---------- Auth (email / password) ---------- */

export async function signIn(email, password) {
  const r = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  })
  const j = await r.json().catch(() => ({}))
  if (!r.ok || !j.idToken) {
    const map = {
      EMAIL_NOT_FOUND: 'Email not found.',
      INVALID_PASSWORD: 'Wrong password.',
      INVALID_LOGIN_CREDENTIALS: 'Wrong email or password.',
      OPERATION_NOT_ALLOWED: 'Email/password login is not enabled yet.',
      CONFIGURATION_NOT_FOUND: 'Auth is not initialised for this project yet.',
    }
    throw new Error(map[j.error?.message] || j.error?.message || `Login failed (${r.status})`)
  }
  return {
    idToken: j.idToken,
    refreshToken: j.refreshToken,
    email: j.email,
    localId: j.localId,
    expiresAt: Date.now() + Number(j.expiresIn) * 1000,
  }
}

export async function refreshSession(sess) {
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: sess.refreshToken,
    key: API_KEY,
  })
  const r = await fetch('https://securetoken.googleapis.com/v1/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  const j = await r.json().catch(() => ({}))
  if (!r.ok || !j.access_token) throw new Error('Session refresh failed — please log in again.')
  return {
    ...sess,
    idToken: j.id_token || j.access_token,
    // Google may rotate the refresh token
    refreshToken: j.refresh_token || sess.refreshToken,
    expiresAt: Date.now() + Number(j.expires_in) * 1000,
  }
}

/* ---------- Admin session persistence ---------- */

const SESSION_KEY = 'aqevorin-admin-session'

export function loadSession() {
  try {
    const s = JSON.parse(localStorage.getItem(SESSION_KEY))
    if (s && s.refreshToken && s.email === ADMIN_EMAIL) return s
  } catch {}
  return null
}

export function saveSession(s) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(s))
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY)
}

/** Returns a valid idToken (auto-refreshing if near expiry) or null. */
export async function getFreshIdToken() {
  let s = loadSession()
  if (!s) return null
  if (Date.now() > s.expiresAt - 60000) {
    try {
      s = await refreshSession(s)
      saveSession(s)
    } catch {
      clearSession()
      return null
    }
  }
  return s.idToken
}

/* ---------- Storage uploads (admin) ---------- */

/** Uploads a File/Blob to Storage and returns a public download URL. */
export async function uploadFile(file, path) {
  const token = await getFreshIdToken()
  if (!token) throw new Error('Not logged in.')
  const encPath = encodeURIComponent(path)
  const r = await fetch(
    `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o?name=${encPath}&uploadType=media`,
    {
      method: 'POST',
      headers: { 'Content-Type': file.type || 'application/octet-stream', Authorization: `Bearer ${token}` },
      body: file,
    }
  )
  const j = await r.json().catch(() => ({}))
  if (!r.ok) throw new Error(`Upload failed (${r.status}): ${j.error?.message || ''}`)
  const tokenParam = (j.downloadTokens && j.downloadTokens[0]) || ''
  return `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o/${encPath}?alt=media&token=${tokenParam}`
}
