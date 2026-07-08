import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { item } from '../lib/animations'

/** small uppercase mono tag with a leading ">" prompt marker */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={item} className="tag-mono flex items-center gap-2">
      <span style={{ color: 'var(--green-dim)' }}>{'>'}</span>
      {children}
    </motion.div>
  )
}

/** big section heading */
export function Heading({
  children,
  glow = false,
  size = 'var(--h2-size)',
}: {
  children: ReactNode
  glow?: boolean
  size?: string
}) {
  return (
    <motion.h2
      variants={item}
      className={glow ? 'glow-text' : ''}
      style={{
        fontSize: size,
        fontWeight: 800,
        lineHeight: 1.04,
        letterSpacing: '-0.02em',
        color: '#fff',
      }}
    >
      {children}
    </motion.h2>
  )
}

/** dim body line */
export function Body({
  children,
  className = '',
  style,
}: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <motion.p
      variants={item}
      className={className}
      style={{
        fontSize: 'var(--body-size)',
        lineHeight: 1.65,
        color: 'var(--text-dim)',
        maxWidth: '64ch',
        ...style,
      }}
    >
      {children}
    </motion.p>
  )
}

/** thin accent divider */
export function Rule({ w = 56 }: { w?: number }) {
  return (
    <motion.div
      variants={item}
      style={{ width: w, height: 2, background: 'var(--green)', opacity: 0.8 }}
    />
  )
}

/** highlight a fragment of text in green */
export function Hi({ children }: { children: ReactNode }) {
  return <span style={{ color: 'var(--green)' }}>{children}</span>
}

/** panel with subtle border + inner padding (use for cards/chips) */
export function Panel({
  children,
  className = '',
  style,
  accent = false,
}: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  accent?: boolean
}) {
  return (
    <div
      className={className}
      style={{
        background: accent ? 'rgba(57,211,83,0.05)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${accent ? 'rgba(57,211,83,0.28)' : 'rgba(255,255,255,0.07)'}`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export { item }
