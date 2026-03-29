import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide17Problem() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.default,
        fontFamily: theme.fonts.family,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: theme.colors.accent,
          transformOrigin: 'top',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ paddingLeft: 96, paddingRight: 96, maxWidth: 860 }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 36,
          }}
        >
          Problem
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            color: theme.colors.text,
            marginBottom: 32,
          }}
        >
          Your manager has no idea
          <br />
          what you are working on.
        </motion.h2>

        <motion.div variants={fadeInUp}>
          <div
            style={{
              fontSize: theme.sizes.body,
              color: theme.colors.textMuted,
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            You have been heads-down all week. Big focus. Real progress.
            <br />
            But your manager sees only silence.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'They assume you are stuck.',
              'They give your project less priority.',
              'Promotion review comes - they have no evidence of your work.',
            ].map((line) => (
              <div key={line} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: 'rgba(248, 113, 113, 0.7)',
                    flexShrink: 0,
                    marginTop: 9,
                  }}
                />
                <span style={{ fontSize: theme.sizes.body, color: theme.colors.textMuted }}>{line}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          position: 'absolute',
          right: 64,
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(7rem, 14vw, 13rem)',
          fontWeight: 800,
          color: 'rgba(67, 97, 238, 0.06)',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        ...
      </motion.div>
    </div>
  )
}
