import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import DetailPage from './pages/DetailPage.jsx'
import ShivastrasPage from './pages/ShivastrasPage.jsx'
import { detailPages } from './data/siteContent.jsx'
import { routePath } from './routing.js'
import './styles/site.css'

const routes = {
  '/': () => <HomePage />,
  '/truthbubble-ai': () => <DetailPage page={detailPages.truthbubble} />,
  '/research': () => <DetailPage page={detailPages.research} />,
  '/shivastras': () => <ShivastrasPage />,
}

export default function App() {
  const [path, setPath] = useState(() => routePath(window.location.pathname))

  useEffect(() => {
    const navigate = (event) => {
      const link = event.target.closest('a[href]')
      const hasModifierKey = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey

      if (!link || event.defaultPrevented || event.button !== 0 || hasModifierKey) return

      const url = new URL(link.href, window.location.href)
      const targetPath = routePath(url.pathname)
      const isExternal = url.origin !== window.location.origin
      const opensNewTab = link.target === '_blank'
      const isSamePageAnchor = url.hash && targetPath === routePath(window.location.pathname)

      if (isExternal || opensNewTab || !routes[targetPath] || isSamePageAnchor) return

      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.hash}`)
      setPath(targetPath)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    const popState = () => setPath(routePath(window.location.pathname))

    document.addEventListener('click', navigate)
    window.addEventListener('popstate', popState)
    return () => {
      document.removeEventListener('click', navigate)
      window.removeEventListener('popstate', popState)
    }
  }, [])

  useEffect(() => {
    const titles = {
      '/truthbubble-ai': 'TruthBubble AI',
      '/research': 'Research',
      '/shivastras': 'Shivastras',
    }
    const title = titles[path] ?? ''
    document.title = title ? `${title} · Tabutech labs` : 'Tabutech labs'
  }, [path])

  const renderPage = routes[path] ?? routes['/']
  return renderPage()
}
