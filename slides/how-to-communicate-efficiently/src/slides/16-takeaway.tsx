import { motion } from 'framer-motion'
import { theme } from '../lib/theme'

export function Slide16Takeaway() {
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
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Horizontal accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          position: 'absolute',
          top: 0,
          left: '15%',
          right: '15%',
          height: 2,
          background: `linear-gradient(90deg, transparent, ${theme.colors.accent}, transparent)`,
          transformOrigin: 'center',
        }}
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '15%',
          right: '15%',
          height: 2,
          background: `linear-gradient(90deg, transparent, ${theme.colors.accent}, transparent)`,
          transformOrigin: 'center',
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
          marginBottom: 48,
        }}
      >
        Takeaway
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontSize: 'clamp(3rem, 6vw, 5.5rem)',
          fontWeight: 800,
          color: theme.colors.text,
          lineHeight: 1.1,
          marginBottom: 8,
        }}
      >
        No agenda.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontSize: 'clamp(3rem, 6vw, 5.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: 48,
        }}
      >
        <span style={{ color: theme.colors.accent }}>No meeting.</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        style={{
          fontSize: theme.sizes.body,
          color: theme.colors.textMuted,
          maxWidth: 520,
          lineHeight: 1.65,
        }}
      >
        Declining a meeting with no agenda is a professional move, not rudeness.
        It signals that you respect everyone's time - including theirs.
      </motion.div>
    </div>
  )
}
