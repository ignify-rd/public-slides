import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const requirements = [
  { name: 'Claude Code', desc: 'Anthropic CLI' },
  { name: 'Git', desc: 'Version control' },
  { name: 'Bun', desc: 'JS runtime & package manager' },
]

export function Slide04Install() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.alt,
        fontFamily: theme.fonts.family,
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
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

      {/* Left panel */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '0 0 50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 80,
          paddingRight: 48,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          Install in 30 Seconds
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: theme.colors.text,
            marginBottom: 32,
          }}
        >
          One clone,{' '}
          <span style={{ color: theme.colors.accent }}>ready to go</span>
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          style={{ marginBottom: 28 }}
        >
          <div
            style={{
              fontSize: theme.sizes.small,
              color: theme.colors.textDim,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Requirements
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {requirements.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: theme.colors.accent,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: theme.sizes.body, color: theme.colors.text, fontWeight: 600 }}>
                  {r.name}
                </span>
                <span style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>
                  {r.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right panel - command */}
      <div
        style={{
          flex: '0 0 50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 48,
          paddingRight: 80,
          position: 'relative',
          zIndex: 1,
          gap: 20,
        }}
      >
        {/* Vertical divider */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            position: 'absolute',
            left: 0,
            top: '15%',
            bottom: '15%',
            width: 1,
            background: 'rgba(67, 97, 238, 0.3)',
            transformOrigin: 'top',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            background: '#111',
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 12,
            padding: '24px 28px',
          }}
        >
          <div
            style={{
              fontSize: theme.sizes.label,
              color: theme.colors.textDim,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            Terminal
          </div>
          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
              color: theme.colors.positive,
              lineHeight: 1.7,
            }}
          >
            <span style={{ color: theme.colors.textDim }}>$ </span>
            git clone https://github.com/garrytan/gstack
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          style={{
            padding: '18px 24px',
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 12,
          }}
        >
          <div
            style={{
              fontSize: theme.sizes.body,
              color: theme.colors.accent,
              fontWeight: 700,
              marginBottom: 6,
            }}
          >
            That's it.
          </div>
          <div
            style={{
              fontSize: theme.sizes.small,
              color: theme.colors.textMuted,
              lineHeight: 1.6,
            }}
          >
            No global packages to install. No PATH changes. Specialists load
            on demand inside your Claude Code session.
          </div>
        </motion.div>
      </div>
    </div>
  )
}
