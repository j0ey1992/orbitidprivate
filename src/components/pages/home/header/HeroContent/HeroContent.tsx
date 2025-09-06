import type { CSSProperties } from 'react'
import { ExternalLink } from 'react-external-link'
import type { Color } from '~/utils/types'
import styles from './HeroContent.module.css'

const OrbitDomain = ({
  name,
  bgColor,
  color,
  style,
  size = 'normal',
}: {
  name: `${string}.${'fox' | 'vvs' | 'cronos'}`
  bgColor: Color
  color: Color
  style?: CSSProperties
  size?: 'small' | 'normal' | 'large'
}) => (
  <ExternalLink
    href={`https://app.orbitid.domains/name/${name}`}
    className={`${styles.orbitDomain} ${styles[size]}`}
    style={
      {
        '--bg-color': `var(--${bgColor})`,
        '--color': `var(--${color})`,
        ...(style || {}),
      } as CSSProperties
    }
  >
    <div className={styles.domainOrb}></div>
    <span className={styles.domainText}>{name}</span>
    <div className={styles.domainGlow}></div>
  </ExternalLink>
)

const OrbitPlanet = ({ 
  className, 
  size, 
  color 
}: { 
  className: string
  size: number
  color: string
}) => (
  <div 
    className={`${styles.orbitPlanet} ${className}`}
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`
    }}
  >
    <div className={styles.planetGlow}></div>
  </div>
)

export const HeroContent = () => (
  <div className={styles.heroWrapper}>
    <div className={styles.orbitSystem}>
      {/* Central Core */}
      <div className={styles.orbitCore}>
        <div className={styles.coreGlow}></div>
      </div>
      
      {/* Orbit Rings */}
      <div className={styles.orbitRing}></div>
      <div className={styles.orbitRingSecondary}></div>
      <div className={styles.orbitRingTertiary}></div>
      
      {/* Floating Planets */}
      <OrbitPlanet 
        className={styles.planet1} 
        size={8} 
        color="rgba(96, 165, 250, 0.8)" 
      />
      <OrbitPlanet 
        className={styles.planet2} 
        size={6} 
        color="rgba(167, 139, 250, 0.7)" 
      />
      <OrbitPlanet 
        className={styles.planet3} 
        size={10} 
        color="rgba(52, 211, 153, 0.6)" 
      />
      
      {/* Domain Examples - Mobile Optimized Positioning */}
      <OrbitDomain
        name="swap.fox"
        color="ens-white"
        bgColor="ens-blue"
        size="large"
        style={{ 
          animation: 'orbitFloat 12s ease-in-out infinite',
          top: 'clamp(5%, 15%, 20%)',
          left: 'clamp(2%, 8%, 12%)',
          zIndex: 1
        }}
      />
      <OrbitDomain
        name="defi.vvs"
        color="ens-white"
        bgColor="ens-magenta"
        size="normal"
        style={{ 
          animation: 'orbitFloat 10s ease-in-out infinite 2s',
          top: 'clamp(0%, 8%, 15%)',
          right: 'clamp(5%, 12%, 18%)',
          zIndex: 1
        }}
      />
      <OrbitDomain 
        name="dao.cronos" 
        color="ens-white" 
        bgColor="ens-green"
        size="normal"
        style={{ 
          animation: 'orbitFloat 14s ease-in-out infinite 4s',
          bottom: 'clamp(15%, 25%, 35%)',
          right: 'clamp(0%, 5%, 10%)',
          zIndex: 1
        }}
      />
      <OrbitDomain 
        name="nft.fox" 
        color="ens-white" 
        bgColor="ens-blue"
        size="small"
        style={{ 
          animation: 'orbitFloat 11s ease-in-out infinite 1s',
          top: 'clamp(25%, 35%, 45%)',
          left: 'clamp(0%, 3%, 8%)',
          zIndex: 1
        }}
      />
      <OrbitDomain
        name="stake.vvs"
        color="ens-white"
        bgColor="ens-green"
        size="normal"
        style={{ 
          animation: 'orbitFloat 13s ease-in-out infinite 3s',
          bottom: 'clamp(5%, 15%, 25%)',
          left: 'clamp(10%, 18%, 25%)',
          zIndex: 1
        }}
      />
      <OrbitDomain
        name="bridge.cronos"
        bgColor="ens-magenta"
        color="ens-white"
        size="large"
        style={{ 
          animation: 'orbitFloat 9s ease-in-out infinite 5s',
          top: 'clamp(45%, 55%, 65%)',
          right: 'clamp(12%, 20%, 28%)',
          zIndex: 1
        }}
      />
      
      {/* Starfield Background */}
      <div className={styles.starfield}></div>
    </div>
  </div>
)