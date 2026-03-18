'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

type Props = LinkProps & {
  children: React.ReactNode
  className?: string
}

function splitHref(href: string): { pathname: string | null; hash: string | null } {
  const idx = href.indexOf('#')
  if (idx === -1) return { pathname: href || null, hash: null }

  const pathname = href.slice(0, idx) || null
  const rawHash = href.slice(idx + 1)
  const hash = rawHash ? decodeURIComponent(rawHash) : null

  return { pathname, hash }
}

export function HashLink({ href, onClick, ...props }: Props) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented) return
        if (e.button !== 0) return
        if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return

        if (typeof href !== 'string') return
        const { pathname: hrefPathname, hash } = splitHref(href)
        if (!hash) return

        const targetPathname = hrefPathname ?? pathname
        if (!targetPathname) return

        if (targetPathname !== pathname) return

        // Same-page hash navigation doesn't re-trigger when the hash is unchanged,
        // so we manually scroll every time.
        e.preventDefault()

        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }

        // Update URL even if the hash is already the same.
        const url = `${window.location.pathname}${window.location.search}#${encodeURIComponent(hash)}`
        window.history.replaceState(null, '', url)
      }}
    />
  )
}

