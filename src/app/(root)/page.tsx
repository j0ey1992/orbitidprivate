import { clsx } from 'clsx'
import Link from 'next/link'
import { Header } from '~/components/layout/Header/Header'
import { HeroContent } from '~/components/pages/home/header/HeroContent/HeroContent'
import { SearchInput } from '~/components/ui/forms/SearchInput/SearchInput'
import { RevenueShareIcon, UnlimitedPotentialIcon, CustomPricingIcon } from '~/components/shared/icons'
import { getLangPrefix } from '~/i18n/langPrefix'
import { fallbackLng, type Language } from '~/i18n/settings'
import { useTranslation } from '~/i18n/useTranslation'
import ui from '~/styles/ui.module.css'
import styles from './page.module.css'

// Modern Feature Components
const FeatureCard = ({
  title,
  description,
  icon,
  accent,
  size = 'regular'
}: {
  title: string
  description: string
  icon: React.ReactNode
  accent?: string
  size?: 'regular' | 'large' | 'wide'
}) => (
  <div className={clsx(styles.featureCard, styles[`featureCard--${size}`])} data-accent={accent}>
    <div className={styles.featureIcon}>{icon}</div>
    <div className={styles.featureContent}>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  </div>
)

const IdentitySection = () => (
  <section id="identity" className={styles.identitySection}>
    <div className={styles.container}>
      <div className={styles.splitLayout}>
        <div className={styles.splitContent}>
          <span className={styles.badge}>Identity Protocol</span>
          <h2 className={styles.sectionTitle}>Your Name,<br/>Your Identity</h2>
          <p className={styles.sectionText}>
            Your Web3 name is anchored on Cronos, but it works seamlessly across the chain.
            It's simple, memorable, unmistakably yours.
          </p>
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statValue}>10K+</span>
              <span className={styles.statLabel}>Active Names</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>99.9%</span>
              <span className={styles.statLabel}>Uptime</span>
            </div>
          </div>
        </div>
        <div className={styles.splitVisual}>
          <div className={styles.identityDemo}>
            <div className={styles.addressTransform}>
              <div className={styles.addressBefore}>0x742d35Cc6634C053...</div>
              <div className={styles.transformArrow}>→</div>
              <div className={styles.addressAfter}>john.orbit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const IntegrationSection = () => (
  <section id="integration" className={styles.integrationSection}>
    <div className={styles.container}>
      <div className={styles.centeredHeader}>
        <span className={styles.badge}>Developer Tools</span>
        <h2 className={styles.sectionTitle}>Plug & Play Integration</h2>
        <p className={styles.sectionText}>
          Lightweight SDKs that work with your stack. Need help? We'll integrate it for free.
        </p>
      </div>
      <div className={styles.integrationGrid}>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.codeFile}>install.sh</span>
            <button className={styles.copyButton}>Copy</button>
          </div>
          <pre className={styles.codeContent}>
            <code>{`npm install @orbitid/sdk
# or
yarn add @orbitid/sdk`}</code>
          </pre>
        </div>
        <div className={styles.integrationsBox}>
          <h4 className={styles.integrationsTitle}>Works with</h4>
          <div className={styles.integrationsList}>
            <div className={styles.integrationItem}>
              <div className={styles.integrationIcon}>🔷</div>
              <span>Reown Wallet</span>
            </div>
            <div className={styles.integrationItem}>
              <div className={styles.integrationIcon}>🔑</div>
              <span>Privy</span>
            </div>
            <div className={styles.integrationItem}>
              <div className={styles.integrationIcon}>⛓️</div>
              <span>On-Chain</span>
            </div>
            <div className={styles.integrationItem}>
              <div className={styles.integrationIcon}>🔍</div>
              <span>Scout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const BrandSection = () => (
  <section id="brand" className={styles.brandSection}>
    <div className={styles.container}>
      <div className={styles.splitLayoutReverse}>
        <div className={styles.splitVisual}>
          <div className={styles.explorerMockup}>
            <div className={styles.explorerHeader}>
              <div className={styles.browserDots}>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.addressBar}>cronosexplorer.com</div>
            </div>
            <div className={styles.explorerContent}>
              <div className={styles.txItem}>
                <span className={styles.txFrom}>alice.orbit</span>
                <span className={styles.txArrow}>→</span>
                <span className={styles.txTo}>bob.orbit</span>
              </div>
              <div className={styles.txItem}>
                <span className={styles.txFrom}>dao.orbit</span>
                <span className={styles.txArrow}>→</span>
                <span className={styles.txTo}>treasury.orbit</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.splitContent}>
          <span className={styles.badge}>Brand Visibility</span>
          <h2 className={styles.sectionTitle}>Your Brand<br/>Everywhere</h2>
          <p className={styles.sectionText}>
            Replace cryptic addresses with memorable names. Let your community's identity shine across every explorer and wallet.
          </p>
          <ul className={styles.featureList}>
            <li>Visible on all major explorers</li>
            <li>Integrated with popular wallets</li>
            <li>Custom TLDs for your brand</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

const AppSection = () => (
  <section id="app" className={styles.appSection}>
    <div className={styles.container}>
      <div className={styles.appGrid}>
        <div className={styles.appMainCard}>
          <span className={styles.badge}>OrbitID App</span>
          <h2 className={styles.appTitle}>More Than<br/>Just Names</h2>
          <p className={styles.appSubtitle}>
            Transform your Web3 identity into a complete digital profile.
          </p>
          <button className={styles.ctaButton}>
            Launch App
            <svg className={styles.ctaIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className={styles.appFeatures}>
          <div className={styles.appFeatureCard}>
            <div className={styles.appFeatureIcon}>👤</div>
            <h4>Rich Profiles</h4>
            <p>Add social links, bio, and avatar to your Web3 identity</p>
          </div>
          <div className={styles.appFeatureCard}>
            <div className={styles.appFeatureIcon}>💬</div>
            <h4>Direct Messaging</h4>
            <p>Chat directly through your domain name</p>
          </div>
          <div className={styles.appFeatureCard}>
            <div className={styles.appFeatureIcon}>🔗</div>
            <h4>Multi-Chain</h4>
            <p>Works across all major blockchains</p>
          </div>
          <div className={styles.appFeatureCard}>
            <div className={styles.appFeatureIcon}>📊</div>
            <h4>Analytics</h4>
            <p>Track your domain's performance and reach</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)


export default async function Home(props: {
  params: Promise<{ lang?: Language }>
}) {
  const params = await props.params
  const { lang = fallbackLng } = params
  const { t } = await useTranslation(lang, 'translation')

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <Header
        className={styles.header}
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        description={t('home.hero.text')}
      >
        {/* Background animation overlayed behind title/description */}
        <div className={styles.heroOverlay}>
          <HeroContent />
        </div>

        <div className={styles.heroContainer}>
          {/* Search sits below the hero visual */}
          <SearchInput
            placeholder={t('home.hero.input.placeholder')}
            viewText={t('home.hero.input.view')}
            registerText={t('home.hero.input.register')}
            invalidText={t('home.hero.input.invalid')}
            caption="Start your Web3 journey"
          />
        </div>
      </Header>

      {/* Main Content - Full Width Sections */}
      <div className={styles.mainSection}>
        
        {/* Revolutionary Protocol Section - Bento Grid */}
        <section id="features" className={styles.featuresSection}>
          <div className={styles.container}>
            <div className={styles.centeredHeader}>
              <span className={styles.badge}>Revolutionary Protocol</span>
              <h2 className={styles.heroTitle}>Build domains<br/>for your project</h2>
              <p className={styles.heroSubtitle}>OrbitID transforms how projects create and monetize naming services.</p>
            </div>
            
            <div className={styles.bentoGrid}>
              <FeatureCard
                title="50% Revenue Share"
                description="Earn from every domain registration with transparent splits"
                icon="💰"
                size="large"
                accent="blue"
              />
              <FeatureCard
                title="Unlimited TLDs"
                description="Launch custom TLDs with zero restrictions"
                icon="♾️"
                size="regular"
                accent="purple"
              />
              <FeatureCard
                title="Your Pricing"
                description="Set your own domain prices"
                icon="🏷️"
                size="regular"
                accent="green"
              />
              <FeatureCard
                title="ENS Compatible"
                description="Full compatibility with existing standards"
                icon="🔗"
                size="wide"
                accent="orange"
              />
            </div>
          </div>
        </section>

        {/* Identity Section */}
        <IdentitySection />

        {/* Integration Section */}
        <IntegrationSection />

        {/* Brand Section */}
        <BrandSection />

        {/* App Section */}
        <AppSection />
      </div>
    </div>
  )
}
