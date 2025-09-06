import '~/styles/global.css'

import { clsx } from 'clsx'
import {
  ABCMarist,
  ABCMonumentGrotesk,
  ABCMonumentGroteskMono,
  ABCMonumentGroteskSemiMono,
  ebGaramond,
  inter,
  spaceGrotesk,
} from 'fonts'
import { dir } from 'i18next'
import type { Metadata } from 'next'
import ogImage from 'public/og-image.png'
import type { ReactNode } from 'react'
import { Footer } from '~/components/layout/Footer/Footer'
import { Navbar } from '~/components/layout/Navbar/Navbar'
import type { Language } from '~/i18n/settings'
import { useTranslation } from '~/i18n/useTranslation'
import { BASE_URL, createMetadata } from '~/utils/metadata'
import type { PageProps } from '~/utils/types'

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const params = await props.params
  const { t } = await useTranslation(params.lang, 'translation')

  return createMetadata(
    {
      title: {
        template: '%s | OrbitID',
        default: 'OrbitID',
      },
      description: t('seo.description'),
      path: '/',
    },
    undefined,
    {
      openGraph: {
        images: [
          {
            url: new URL(ogImage.src, BASE_URL).toString(),
            width: ogImage.width,
            height: ogImage.height,
          },
        ],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
      },
    },
  )
}

export const viewport = {
  themeColor: '#1e3a8a',
}

export default async function RootLayout(props: {
  children: ReactNode
  params: Promise<{ lang?: Language }>
}) {
  const params = await props.params

  const { lang = 'en' } = params

  const { children } = props

  const { t } = await useTranslation(lang, 'translation')

  const footerItems = [
    {
      title: t('footer.community'),
      entries: [
        {
          title: t('footer.feedback'),
          link: 'https://discord.gg/cronos',
        },
        {
          title: t('footer.discord'),
          link: 'https://discord.gg/cronos',
        },
        {
          title: t('footer.twitter'),
          link: 'https://x.com/cronos_chain',
        },
        {
          title: t('footer.github'),
          link: 'https://github.com/orbitid',
        },
        {
          title: t('footer.youtube'),
          link: 'https://youtube.com/@CronosChain',
        },
        {
          title: t('footer.forums'),
          link: 'https://discord.gg/cronos',
        },
      ],
    },
    {
      title: t('footer.help'),
      entries: [
        {
          title: t('footer.support'),
          link: 'https://discord.gg/cronos',
        },
        { title: t('footer.contact'), link: 'mailto:support@orbitid.domains' },
      ],
    },
    {
      title: t('footer.ens'),
      entries: [
        {
          title: t('footer.privacy-policy'),
          link: 'https://app.orbitid.domains/legal/privacy-policy',
        },
        {
          title: t('footer.tou'),
          link: 'https://app.orbitid.domains/legal/terms-of-use',
        },
        {
          title: t('footer.bugs'),
          link: 'https://discord.gg/cronos',
        },
        {
          title: t('footer.brand'),
          link: '/brand',
        },
      ],
    },
  ]

  return (
    <html
      lang={lang}
      dir={dir(lang)}
      className={clsx(
        inter.variable,
        spaceGrotesk.variable,
        ebGaramond.variable,
        ABCMonumentGrotesk.variable,
        ABCMonumentGroteskMono.variable,
        ABCMonumentGroteskSemiMono.variable,
        ABCMarist.variable,
      )}
    >
      <head>
        <script
          defer
          data-domain="orbitid.domains"
          src="https://plausible.io/js/script.js"
        ></script>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <main>
          <Navbar
            links={{
              developers: t('nav.developers'),
              ecosystem: t('nav.ecosystem'),
              governance: t('nav.governance'),
              blog: t('nav.blog'),
              roadmap: t('nav.roadmap'),
              ensv2: t('nav.ensv2'),
              launch: t('nav.launch'),
            }}
            lang={lang}
          />
          {children}
          <Footer footerItems={footerItems} copyrightNotice={t('footer.ltd')} />
        </main>
      </body>
    </html>
  )
}
