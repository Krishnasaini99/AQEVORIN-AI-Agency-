// Per-route SEO for the hash-router SPA: sets <title>, meta description and
// canonical URL whenever a page mounts. Every route sets its own values,
// so no cleanup is needed on unmount.
import { useEffect } from 'react'

const SITE = 'https://aqevorin.ai'

export function usePageSeo({ title, description, path }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      const m = document.querySelector('meta[name="description"]')
      if (m) m.setAttribute('content', description)
      const og = document.querySelector('meta[property="og:description"]')
      if (og) og.setAttribute('content', description)
      const tw = document.querySelector('meta[name="twitter:description"]')
      if (tw) tw.setAttribute('content', description)
    }
    if (title) {
      const ogt = document.querySelector('meta[property="og:title"]')
      if (ogt) ogt.setAttribute('content', title)
      const twt = document.querySelector('meta[name="twitter:title"]')
      if (twt) twt.setAttribute('content', title)
    }
    if (path) {
      const url = SITE + path
      const c = document.querySelector('link[rel="canonical"]')
      if (c) c.setAttribute('href', url)
      const ogu = document.querySelector('meta[property="og:url"]')
      if (ogu) ogu.setAttribute('content', url)
    }
  }, [title, description, path])
}

export default usePageSeo
