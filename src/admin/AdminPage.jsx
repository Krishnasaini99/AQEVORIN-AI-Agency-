import { useMemo, useState } from 'react'
import { ADMIN_SECTIONS } from './schema.js'
import { useContent } from '../context/ContentContext.jsx'
import {
  ADMIN_EMAIL,
  clearSession,
  getFreshIdToken,
  loadSession,
  saveDoc,
  saveSession,
  signIn,
  uploadFile,
} from '../lib/fbrest.js'

/* ---------- path helpers ---------- */

function getPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj)
}

function setPath(obj, path, value) {
  const keys = path.split('.')
  const clone = Array.isArray(obj) ? [...obj] : { ...obj }
  let node = clone
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i]
    const nextIsIndex = /^\d+$/.test(keys[i + 1])
    const cur = node[k]
    node[k] = Array.isArray(cur) ? [...cur] : (cur && typeof cur === 'object' ? { ...cur } : (nextIsIndex ? [] : {}))
    node = node[k]
  }
  node[keys[keys.length - 1]] = value
  return clone
}

/* ---------- field editors ---------- */

function TextInput({ value, onChange, type = 'text', hint, multiline }) {
  if (multiline) {
    return (
      <>
        <textarea value={value ?? ''} onChange={e => onChange(e.target.value)} rows={3} />
        {hint && <small>{hint}</small>}
      </>
    )
  }
  return (
    <>
      <input
        type={type}
        value={value ?? ''}
        onChange={e => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
      />
      {hint && <small>{hint}</small>}
    </>
  )
}

function MediaInput({ value, onChange, kind, accept }) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setBusy(true)
    setError('')
    try {
      const safe = file.name.replace(/[^a-zA-Z0-9._-]+/g, '_')
      const url = await uploadFile(file, `content/${Date.now()}-${safe}`)
      onChange(url)
    } catch (err) {
      setError(err.message || 'Upload failed')
    } finally {
      setBusy(false)
      e.target.value = ''
    }
  }

  return (
    <>
      <input value={value ?? ''} onChange={e => onChange(e.target.value)} placeholder="https://… or /assets/…" />
      <div className="admin-media-row">
        <label className="admin-upload-btn">
          {busy ? 'Uploading…' : kind === 'video' ? 'Upload video' : 'Upload image'}
          <input type="file" accept={accept} hidden onChange={handleFile} disabled={busy} />
        </label>
        {value && kind === 'image' && <img src={value} alt="" className="admin-media-preview" />}
        {value && kind === 'video' && (
          <video src={value} className="admin-media-preview" muted playsInline preload="metadata" />
        )}
      </div>
      {error && <small className="admin-error-text">{error}</small>}
    </>
  )
}

function ListEditor({ value, spec, onChange }) {
  const rows = Array.isArray(value) ? value : []

  const blankRow = () => {
    if (spec.itemFields) {
      const o = {}
      for (const f of spec.itemFields) o[f.key] = f.type === 'number' ? 0 : f.type === 'list' ? [] : ''
      return o
    }
    return ''
  }

  function setRow(i, v) {
    const next = [...rows]
    next[i] = v
    onChange(next)
  }
  function removeRow(i) {
    onChange(rows.filter((_, j) => j !== i))
  }
  function moveRow(i, dir) {
    const j = i + dir
    if (j < 0 || j >= rows.length) return
    const next = [...rows]
    ;[next[i], next[j]] = [next[j], next[i]]
    onChange(next)
  }

  return (
    <div className="admin-list">
      {rows.map((row, i) => (
        <div className="admin-list-item" key={i}>
          <div className="admin-list-head">
            <span className="admin-list-title">
              #{i + 1}
              {spec.itemLabel && typeof row === 'object' && row
                ? ` — ${String(row[spec.itemLabel] ?? '').slice(0, 60)}`
                : typeof row === 'string'
                  ? ` — ${row.slice(0, 60)}`
                  : ''}
            </span>
            <div className="admin-list-actions">
              <button type="button" onClick={() => moveRow(i, -1)} disabled={i === 0} title="Move up">↑</button>
              <button type="button" onClick={() => moveRow(i, 1)} disabled={i === rows.length - 1} title="Move down">↓</button>
              <button type="button" className="admin-danger" onClick={() => removeRow(i)} title="Remove">✕</button>
            </div>
          </div>
          {spec.itemFields ? (
            <div className="admin-list-body">
              {spec.itemFields.map(f => (
                <FieldEditor
                  key={f.key}
                  spec={f}
                  value={typeof row === 'object' && row ? row[f.key.split('.').pop()] : undefined}
                  onChange={v => {
                    const next = (typeof row === 'object' && row ? { ...row } : {})
                    next[f.key.split('.').pop()] = v
                    setRow(i, next)
                  }}
                />
              ))}
            </div>
          ) : (
            <TextInput value={row} onChange={v => setRow(i, v)} multiline={String(row ?? '').length > 80} />
          )}
        </div>
      ))}
      <button type="button" className="admin-add-btn" onClick={() => onChange([...rows, blankRow()])}>
        + Add {spec.label?.replace(/s$/, '') || 'item'}
      </button>
    </div>
  )
}

function FieldEditor({ spec, value, onChange, depth = 0 }) {
  let control = null
  if (spec.type === 'list') {
    control = <ListEditor value={value} spec={spec} onChange={onChange} />
  } else if (spec.type === 'image') {
    control = <MediaInput value={value} onChange={onChange} kind="image" accept="image/*" />
  } else if (spec.type === 'file') {
    control = <MediaInput value={value} onChange={onChange} kind="video" accept={spec.accept || '*/*'} />
  } else if (spec.type === 'textarea') {
    control = <TextInput value={value} onChange={onChange} multiline hint={spec.hint} />
  } else if (spec.type === 'number') {
    control = <TextInput value={value} onChange={onChange} type="number" hint={spec.hint} />
  } else {
    control = <TextInput value={value} onChange={onChange} hint={spec.hint} />
  }
  return (
    <label className={`admin-field admin-depth-${Math.min(depth, 3)}`}>
      <span className="admin-label">{spec.label || spec.key}</span>
      {control}
    </label>
  )
}

/* ---------- login ---------- */

function LoginForm({ onDone }) {
  const [email, setEmail] = useState(ADMIN_EMAIL)
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function submit(e) {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      const sess = await signIn(email.trim(), password)
      if (sess.email !== ADMIN_EMAIL) {
        setError('This account is not the site admin.')
        setBusy(false)
        return
      }
      saveSession(sess)
      onDone(sess)
    } catch (err) {
      setError(err.message || 'Login failed')
      setBusy(false)
    }
  }

  return (
    <div className="admin-login-wrap">
      <form className="admin-login" onSubmit={submit}>
        <div className="admin-login-brand">AQEVORIN <span>Admin</span></div>
        <p className="admin-login-sub">Only the site owner can change website content.</p>
        <label>
          <span>Email</span>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="username" />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="••••••••"
          />
        </label>
        {error && <div className="admin-error-box">{error}</div>}
        <button className="admin-primary-btn" disabled={busy}>
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}

/* ---------- main page ---------- */

export default function AdminPage() {
  const { content, status, refresh } = useContent()
  const [session, setSession] = useState(() => loadSession())
  const [tab, setTab] = useState('home')
  const [draft, setDraft] = useState(null)
  const [dirty, setDirty] = useState(false)
  const [saving, setSaving] = useState(false)
  const [savedAt, setSavedAt] = useState(null)
  const [saveError, setSaveError] = useState('')
  const [advanced, setAdvanced] = useState(false)
  const [jsonText, setJsonText] = useState('')

  const section = useMemo(() => ADMIN_SECTIONS.find(s => s.id === tab), [tab])
  const live = content?.[tab]

  // (Re)initialise the draft whenever the live content or tab changes and the form is clean
  useMemo(() => {
    if (!dirty && live !== undefined) {
      setDraft(JSON.parse(JSON.stringify(live)))
      setAdvanced(false)
      setSavedAt(null)
      setSaveError('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, live])

  function update(path, value) {
    setDraft(d => setPath(d || {}, path, value))
    setDirty(true)
    setSavedAt(null)
  }

  async function save() {
    setSaving(true)
    setSaveError('')
    try {
      let data = draft
      if (advanced) {
        try {
          data = JSON.parse(jsonText)
        } catch {
          throw new Error('Advanced JSON is not valid JSON.')
        }
      }
      const token = await getFreshIdToken()
      if (!token) {
        clearSession()
        setSession(null)
        throw new Error('Session expired — please sign in again.')
      }
      await saveDoc(tab, data, token)
      setSavedAt(new Date().toLocaleTimeString())
      setDirty(false)
      await refresh()
    } catch (err) {
      setSaveError(err.message || 'Save failed')
    } finally {
      setSaving(false)
    }
  }

  function signOut() {
    clearSession()
    setSession(null)
    setDraft(null)
    setDirty(false)
  }

  if (!session) {
    return (
      <main className="admin-page">
        <LoginForm onDone={setSession} />
      </main>
    )
  }

  return (
    <main className="admin-page">
      <header className="admin-topbar">
        <div className="admin-topbar-left">
          <a href="#home" className="admin-brand">AQEVORIN <span>Admin</span></a>
          <span className={`admin-live-dot ${status === 'live' ? 'live' : 'offline'}`} title={status}>
            {status === 'live' ? 'Live data' : 'Local defaults'}
          </span>
        </div>
        <div className="admin-topbar-right">
          <span className="admin-user">{session.email}</span>
          <a className="admin-ghost-btn" href="#home">View site</a>
          <button className="admin-ghost-btn" onClick={signOut}>Sign out</button>
        </div>
      </header>

      <div className="admin-body">
        <nav className="admin-tabs">
          {ADMIN_SECTIONS.map(s => (
            <button
              key={s.id}
              className={s.id === tab ? 'admin-tab active' : 'admin-tab'}
              onClick={() => { setTab(s.id); setDirty(false) }}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <section className="admin-editor">
          <div className="admin-editor-head">
            <div>
              <h1>{section.label}</h1>
              <p>{section.desc}</p>
            </div>
            <div className="admin-editor-actions">
              <button
                className="admin-ghost-btn"
                onClick={() => {
                  if (advanced) {
                    setAdvanced(false)
                  } else {
                    setJsonText(JSON.stringify(draft, null, 2))
                    setAdvanced(true)
                  }
                }}
              >
                {advanced ? 'Form view' : 'Advanced JSON'}
              </button>
              <button className="admin-primary-btn" onClick={save} disabled={saving || (!dirty && !advanced)}>
                {saving ? 'Saving…' : 'Save changes'}
              </button>
            </div>
          </div>

          {saveError && <div className="admin-error-box">{saveError}</div>}
          {savedAt && <div className="admin-success-box">Saved at {savedAt} — live on the site.</div>}
          {dirty && !savedAt && <div className="admin-dirty-box">Unsaved changes.</div>}

          {draft == null ? (
            <p className="admin-empty">Loading content…</p>
          ) : advanced ? (
            <textarea
              className="admin-json"
              value={jsonText}
              onChange={e => { setJsonText(e.target.value); setDirty(true) }}
              spellCheck={false}
            />
          ) : (
            <div className="admin-form">
              {section.fields.map(f => (
                <FieldEditor key={f.key} spec={f} value={getPath(draft, f.key)} onChange={v => update(f.key, v)} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
