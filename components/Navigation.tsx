"use client"

import { useCallback, useEffect, useId, useState } from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Content from "@/public/json/Nav.json"

const Navigation = () => {
  const pathname = usePathname()
  const menuId = useId()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = useCallback(() => setIsOpen(false), [])
  const toggleMenu = useCallback(() => setIsOpen((open) => !open), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Zamknij menu po zmianie trasy (Next.js Link)
  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  // Escape + blokada scrolla body gdy menu otwarte (iOS Safari)
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }

    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollY)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, closeMenu])

  const navClass = [
    'navbar',
    'navbar-expand-lg',
    'navbar-dark',
    'ftco-navbar-light',
    scrolled ? 'scrolled' : '',
    isOpen ? 'menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const isItemActive = (link: string) => {
    if (link === '/') return pathname === '/'
    const base = link.replace(/\/$/, '')
    return pathname === link || pathname === base || pathname.startsWith(`${base}/`)
  }

  return (
    <nav className={navClass} id="ftco-navbar">
      <div className="container d-flex flex-wrap align-items-center">
        <button
          type="button"
          className="navbar-toggler"
          aria-controls={menuId}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X aria-hidden size={22} strokeWidth={2.25} />
          ) : (
            <Menu aria-hidden size={22} strokeWidth={2.25} />
          )}
          <span className="navbar-toggler-label">{Content.menu}</span>
        </button>

        <div
          id={menuId}
          className={`navbar-collapse mobile-nav-collapse ${isOpen ? 'is-open' : ''}`}
        >
          <ul className="navbar-nav m-auto">
            {Content.items.map((item) => {
              const isActive = isItemActive(item.link)

              return (
                <li key={item.name} className={`nav-item${isActive ? ' active' : ''}`}>
                  <Link
                    href={item.link}
                    className="nav-link"
                    title={item.text}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
