import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { fetchAllDocs } from '../lib/fbrest.js'
import { home as defHome } from '../data/home.js'
import { contact as defContact } from '../data/contact.js'
import { services as defServices } from '../data/services.js'
import { posts as defPosts } from '../data/blog.js'
import { projects as defProjects } from '../data/portfolio.js'
import { about as defAbout } from '../data/about.js'
import { socialLinks as defSocial } from '../data/social.js'

const DOC_IDS = ['home', 'contact', 'services', 'blog', 'portfolio', 'about', 'social']
const CACHE_KEY = 'aqevorin-content-cache-v1'

function defaults() {
  return {
    home: defHome,
    contact: defContact,
    services: { services: defServices },
    blog: { posts: defPosts },
    portfolio: { projects: defProjects },
    about: defAbout,
    social: { socialLinks: defSocial },
  }
}

/** Merge server docs over local defaults (shallow per-section). */
function merge(base, override) {
  const out = { ...base }
  for (const [k, v] of Object.entries(override)) {
    out[k] = { ...(base[k] || {}), ...v }
  }
  return out
}

function readCache() {
  try {
    const c = JSON.parse(localStorage.getItem(CACHE_KEY))
    if (c && c.ts && Date.now() - c.ts < 1000 * 60 * 60 * 24 * 7) return c.data
  } catch {}
  return null
}

function writeCache(data) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data })) } catch {}
}

const ContentContext = createContext(null)

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => merge(defaults(), readCache() || {}))
  const [status, setStatus] = useState('loading') // loading | live | offline
  const started = useRef(false)

  const load = useCallback(async () => {
    setStatus(s => (s === 'live' ? s : 'loading'))
    try {
      const docs = await fetchAllDocs(DOC_IDS)
      if (Object.keys(docs).length === 0) {
        // No CMS data yet (or network blocked) — local defaults are already in state
        setStatus('offline')
        return null
      }
      const merged = merge(defaults(), docs)
      setContent(merged)
      writeCache(docs)
      setStatus('live')
      return merged
    } catch {
      setStatus('offline')
      return null
    }
  }, [])

  useEffect(() => {
    if (started.current) return
    started.current = true
    load()
  }, [load])

  return (
    <ContentContext.Provider value={{ content, status, refresh: load }}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) return { content: null, status: 'offline', refresh: async () => null }
  return ctx
}

/** Convenience: merged section with local fallback if provider is missing. */
export function useSection(name) {
  const { content } = useContent()
  const map = {
    home: defHome,
    contact: defContact,
    services: { services: defServices },
    blog: { posts: defPosts },
    portfolio: { projects: defProjects },
    about: defAbout,
    social: { socialLinks: defSocial },
  }
  if (!content || !content[name]) return map[name]
  return content[name]
}
