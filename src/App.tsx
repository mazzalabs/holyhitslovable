import { useEffect } from 'react'
import { brand } from '@/config/brand'
import { HomePage } from '@/pages/HomePage'

/**
 * Root application component.
 *
 * Responsibilities:
 * - Sets <title> and meta tags via document.head (no SSR)
 * - Renders the single-page layout
 */
export default function App() {
  useEffect(() => {
    // Update document title
    document.title = brand.seo.title

    // Update / create meta tags
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', brand.seo.description)
    setMeta('author', brand.seo.author)
    setMeta('og:title', brand.seo.ogTitle, true)
    setMeta('og:description', brand.seo.ogDescription, true)
    setMeta('og:type', 'website', true)
    setMeta('og:image', brand.seo.ogImage, true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', brand.seo.ogTitle)
    setMeta('twitter:description', brand.seo.ogDescription)
    setMeta('twitter:image', brand.seo.ogImage)
  }, [])

  return <HomePage />
}
