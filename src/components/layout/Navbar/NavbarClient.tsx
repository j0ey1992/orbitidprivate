'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type CSSProperties, type FC, useRef, useState } from 'react'
import { ExternalLink } from 'react-external-link'
import { useScrollAttr } from '~/hooks/useScrollAttr'
import { getLangPrefix } from '~/i18n/langPrefix'
import { fallbackLng, type Language } from '~/i18n/settings'
import ui from '~/styles/ui.module.css'
import styles from './Navbar.module.css'

type Links = {
  blog: string
  roadmap: string
  developers: string
  ecosystem: string
  governance: string
  launch: string
  ensv2: string
}

export const NavbarClient: FC<{ lang: Language; links: Links }> = ({
  links,
  lang = fallbackLng,
}) => {
  const navRef = useRef<HTMLDivElement>(null)
  useScrollAttr(navRef, 'data-opaque', 10)

  const langPrefix = getLangPrefix((lang as Language) || fallbackLng)
  const [isOpen, setOpen] = useState(false)
  const pathname = usePathname()

  // Check if we're on the homepage
  const isHomePage = pathname === '/' || pathname === `/${lang}` || pathname === `/${lang}/`

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault()
      setOpen(false)
      
      // Map navigation items to section IDs
      const sectionMap: { [key: string]: string } = {
        developers: 'features',
        ecosystem: 'identity',
        governance: 'brand',
        blog: 'app',
      }
      
      const targetId = sectionMap[sectionId] || sectionId
      const element = document.getElementById(targetId)
      
      if (element) {
        const offset = 100 // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - offset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const items = Object.entries(links).filter(
    ([k]) => !['roadmap', 'launch', 'ensv2'].includes(k),
  )

  return (
    <nav
      id="nav"
      data-open={isOpen}
      className={clsx(ui.flex, styles.nav)}
      ref={navRef}
    >
      <div className={clsx(ui.flex, ui['flex-row'], styles.mobileMenu)}>
        <Link href={langPrefix || '/'} onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="OrbitID"
            className={styles.desktopOnly}
          />
        </Link>
        <div
          className={clsx(
            ui.flex,
            ui['flex-row'],
            ui['space-x-8'],
            ui['flex-center'],
          )}
        >
          <ExternalLink
            href="https://app.orbitid.domains"
            className={clsx(styles.launch, ui.button, styles.launchCta)}
          >
            {links.launch}
          </ExternalLink>
          <button
            type="button"
            onClick={() => setOpen(!isOpen)}
            className={styles.menuButton}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
            >
              <g id="menu">
                <rect
                  id="Rectangle 2736"
                  y="-0.000488281"
                  width="4"
                  height="4"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  id="Rectangle 2736_2"
                  y="7.99951"
                  width="4"
                  height="4"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  id="Rectangle 2736_3"
                  x="8"
                  y="-0.000488281"
                  width="4"
                  height="4"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  id="Rectangle 2736_4"
                  x="8"
                  y="7.99951"
                  width="4"
                  height="4"
                  rx="1"
                  fill="currentColor"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.navContent}>
        <div className={clsx(ui.flex, styles.links)}>
          {items.map(([item, link]) => {
            const url = isHomePage ? `#${item}` : `${langPrefix}/${item}`

            const color = {
              developers: '--ens-magenta',
              ecosystem: '--ens-blue',
              governance: '--ens-green',
              blog: '--ens-orange',
            }[item] || '--ens-hover-blue'

            return (
              <Link
                onClick={(e) => handleNavClick(e, item)}
                key={item}
                href={url}
                className={styles.link}
                style={
                  {
                    '--current-link':
                      pathname.includes(item) ? `var(${color})` : undefined,
                    '--link-hover': `var(${color})`,
                  } as CSSProperties
                }
              >
                {link}
              </Link>
            )
          })}
          <ExternalLink
            href="https://docs.orbitid.domains/roadmap"
            className={styles.link}
          >
            {links.roadmap}
          </ExternalLink>
        </div>
        <div className={styles.langWithApp}>
          <ExternalLink
            href="https://app.orbitid.domains"
            className={clsx(styles.launch, ui.button)}
          >
            {links.launch}
          </ExternalLink>
        </div>
      </div>
    </nav>
  )
}