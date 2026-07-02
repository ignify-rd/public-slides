import { motion } from 'framer-motion'
import { container, item, EASE, REDUCED } from '../lib/animations'
import { T, clamp } from '../lib/theme'

/* Signature Electric Studio divider: dark panel + solid accent panel split. */
export function SectionDivider({
  no,
  title,
  sub,
  items = [],
}: {
  no: string
  title: React.ReactNode
  sub?: string
  items?: string[]
}) {
  return (
    <div
      className="slide-bg slide-grid"
      style={{ width: 1280, height: 720, display: 'flex', overflow: 'hidden' }}
    >
      {/* left: content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '1 1 58%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 64px 0 84px',
        }}
      >
        <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
          <div style={{ width: 44, height: 4, background: T.accent }} />
          <span
            style={{
              fontFamily: T.mono,
              fontSize: clamp('0.7rem', '1.1vw', '0.85rem'),
              fontWeight: 700,
              letterSpacing: '0.24em',
              color: T.accentBright,
            }}
          >
            PHẦN {no}
          </span>
        </motion.div>
        <motion.h1
          variants={item}
          style={{
            margin: 0,
            fontSize: clamp('2.2rem', '4.6vw', '3.6rem'),
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            maxWidth: 620,
          }}
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            variants={item}
            style={{
              margin: '20px 0 0',
              fontSize: clamp('0.9rem', '1.5vw', '1.15rem'),
              color: T.muted,
              lineHeight: 1.55,
              maxWidth: 540,
            }}
          >
            {sub}
          </motion.p>
        )}
        {items.length > 0 && (
          <motion.div variants={item} style={{ marginTop: 38, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {items.map((it, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span
                  style={{
                    fontFamily: T.mono,
                    fontSize: 12,
                    fontWeight: 700,
                    color: T.accentBright,
                    width: 26,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: clamp('0.82rem', '1.3vw', '1rem'), color: 'rgba(242,245,250,0.85)' }}>
                  {it}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* right: solid accent panel with oversized number */}
      <motion.div
        initial={REDUCED ? { opacity: 0 } : { x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        style={{
          flex: '1 1 42%',
          background: `linear-gradient(160deg, ${T.accent} 0%, #2b3fb8 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <span
          style={{
            fontSize: 'clamp(10rem, 24vw, 17rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1,
            letterSpacing: '-0.05em',
            textShadow: '0 24px 80px rgba(0,0,0,0.35)',
            position: 'relative',
          }}
        >
          {no}
        </span>
      </motion.div>
    </div>
  )
}
