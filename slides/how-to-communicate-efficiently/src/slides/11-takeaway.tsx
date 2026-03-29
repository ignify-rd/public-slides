import { motion } from 'framer-motion'
import { theme } from '../lib/theme'

export function Slide11Takeaway() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background:
          'radial-gradient(ellipse at 50% 50%, rgba(67, 97, 238, 0.2) 0%, transparent 65%), #0a0a0a',
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 96,
        paddingRight: 96,
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        style={{
          fontSize: theme.sizes.label,
          fontWeight: 800,
          letterSpacing: '0.2em',
          color: theme.colors.accent,
          textTransform: 'uppercase',
          marginBottom: 40,
        }}
      >
        Takeaway
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          color: theme.colors.text,
          marginBottom: 48,
        }}
      >
        Make it easy
        <br />
        to say{' '}
        <span style={{ color: theme.colors.accent }}>yes.</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        {['Remove friction.', 'Provide context.', 'Give a deadline.'].map((line, i) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
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
            <span style={{ fontSize: theme.sizes.body, color: theme.colors.textMuted }}>
              {line}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative large text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{
          position: 'absolute',
          right: 48,
          bottom: 40,
          fontSize: 'clamp(6rem, 12vw, 11rem)',
          fontWeight: 800,
          color: 'rgba(67, 97, 238, 0.06)',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        YES
      </motion.div>
    </div>
  )
}
