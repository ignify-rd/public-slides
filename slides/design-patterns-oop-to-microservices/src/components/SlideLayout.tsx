import React from 'react'
import { motion } from 'framer-motion'
import { container, item } from '../lib/animations'
import { T, clamp } from '../lib/theme'

/* Standard content slide: accent-bar kicker, headline, free-form body. */
export function SlideLayout({
  kicker,
  title,
  children,
  padding = '56px 72px 48px',
}: {
  kicker?: string
  title?: React.ReactNode
  children?: React.ReactNode
  padding?: string
}) {
  return (
    <div
      className="slide-bg slide-grid"
      style={{
        width: 1280,
        height: 720,
        display: 'flex',
        flexDirection: 'column',
        padding,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}
      >
        {kicker && (
          <motion.div
            variants={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 10,
            }}
          >
            <div style={{ width: 34, height: 4, background: T.accent }} />
            <span
              style={{
                fontFamily: T.mono,
                fontSize: clamp('0.65rem', '1vw', '0.8rem'),
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: T.accentBright,
                textTransform: 'uppercase',
              }}
            >
              {kicker}
            </span>
          </motion.div>
        )}
        {title && (
          <motion.h2
            variants={item}
            style={{
              margin: 0,
              fontSize: clamp('1.6rem', '3.4vw', '2.6rem'),
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              maxWidth: 1080,
            }}
          >
            {title}
          </motion.h2>
        )}
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

/* Accent-colored word inside a headline. */
export function Em({ children }: { children: React.ReactNode }) {
  return <span style={{ color: T.accentBright }}>{children}</span>
}

/* Two-column body: narrative left, diagram right. */
export function Split({
  left,
  right,
  leftW = 430,
  gap = 40,
  align = 'center',
}: {
  left: React.ReactNode
  right: React.ReactNode
  leftW?: number
  gap?: number
  align?: 'center' | 'flex-start'
}) {
  return (
    <div style={{ display: 'flex', gap, marginTop: 18, flex: 1, minHeight: 0, alignItems: align }}>
      <div style={{ width: leftW, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>{left}</div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 0 }}>
        {right}
      </div>
    </div>
  )
}

/* Bullet list with muted lead-marker, left aligned. */
export function Bullets({
  items,
  gap = 18,
  size = clamp('0.85rem', '1.35vw', '1.05rem'),
  width,
}: {
  items: { t: React.ReactNode; d?: React.ReactNode }[]
  gap?: number
  size?: string
  width?: number
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap, width }}>
      {items.map((b, i) => (
        <motion.div key={i} variants={item} style={{ display: 'flex', gap: 14 }}>
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: T.accent,
              marginTop: 8,
              flexShrink: 0,
            }}
          />
          <div style={{ fontSize: size, lineHeight: 1.5 }}>
            <span style={{ fontWeight: 700 }}>{b.t}</span>
            {b.d && <span style={{ color: T.muted }}> — {b.d}</span>}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
