import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const facts = [
  {
    icon: '🔕',
    title: 'Telemetry off by default',
    desc: 'No data is collected or sent anywhere unless you opt in.',
    color: '#34d399',
  },
  {
    icon: '📄',
    title: 'MIT License',
    desc: 'Use it, fork it, build on it -- no restrictions.',
    color: '#60a5fa',
  },
  {
    icon: '∞',
    title: 'Free forever',
    desc: 'Open source. No paywalls, no tiers, no enterprise upsells.',
    color: '#c084fc',
  },
]

export function Slide08PrivacyLicense() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.default,
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 80px',
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: theme.backgrounds.grid,
          backgroundSize: '60px 60px',
          opacity: 0.4,
        }}
      />

      {/* Left accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: theme.colors.accent,
          transformOrigin: 'top',
          zIndex: 2,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div variants={fadeInUp}>
          <div
            style={{
              fontSize: theme.sizes.label,
              fontWeight: 800,
              letterSpacing: '0.2em',
              color: theme.colors.accent,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Privacy and License
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800,
              color: theme.colors.text,
              marginBottom: 8,
              lineHeight: 1.1,
            }}
          >
            Open,{' '}
            <span style={{ color: theme.colors.accent }}>private</span>
            {', '}
            and free
          </h2>
          <p
            style={{
              fontSize: theme.sizes.body,
              color: theme.colors.textMuted,
              marginBottom: 44,
              lineHeight: 1.6,
            }}
          >
            gstack was built to stay open. The commitments below come straight from the README.
          </p>
        </motion.div>

        <motion.div
          variants={containerFast}
          initial="hidden"
          animate="show"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {facts.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeInUp}
              style={{
                padding: '28px 28px',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid rgba(255,255,255,0.08)`,
                borderTop: `3px solid ${f.color}`,
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <span style={{ fontSize: '2rem' }}>{f.icon}</span>
              <div
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 700,
                  color: f.color,
                  lineHeight: 1.3,
                }}
              >
                {f.title}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.textMuted,
                  lineHeight: 1.6,
                }}
              >
                {f.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '14px 20px',
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 10,
            width: 'fit-content',
          }}
        >
          <span
            style={{
              fontSize: theme.sizes.body,
              color: theme.colors.accent,
              fontWeight: 700,
            }}
          >
            github.com/garrytan/gstack
          </span>
          <span style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>
            -- star it, fork it, build on it
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
