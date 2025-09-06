import { type FC } from 'react'
import { type Language } from '~/i18n/settings'
import { NavbarClient } from './NavbarClient'

type Links = {
  blog: string
  roadmap: string
  developers: string
  ecosystem: string
  governance: string
  launch: string
  ensv2: string
}

export const Navbar: FC<{ lang: Language; links: Links }> = ({
  links,
  lang,
}) => {
  return <NavbarClient lang={lang} links={links} />
}
