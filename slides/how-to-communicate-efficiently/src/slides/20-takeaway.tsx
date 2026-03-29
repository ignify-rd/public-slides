import { motion } from 'framer-motion'
import { theme } from '../lib/theme'

export function Slide20Takeaway() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background:
          'radial-gradient(ellipse at 40% 50%, rgba(67, 97, 238, 0.25) 0%, transparent 60%), #0a0a0a',
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
        transition={{ duration: 0.6 }}
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

      <div
        style={{
          paddingLeft: 96,
          paddingRight: 96,
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          gap: 80,
        }}
      >
        {/* Left content */}
        <div style={{ flex: 1 }}>
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
              marginBottom: 36,
            }}
          >
            Final Takeaway
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: theme.colors.text,
              marginBottom: 40,
            }}
          >
            Visibility is a{' '}
            <span style={{ color: theme.colors.accent }}>career skill.</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              fontSize: theme.sizes.body,
              color: theme.colors.textMuted,
              lineHeight: 1.7,
              maxWidth: 440,
            }}
          >
            Good work that nobody knows about does not advance your career.
            Communicate your progress clearly, and your impact compounds.
          </motion.p>
        </div>

        {/* Right - summary card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{
            flexShrink: 0,
            width: 320,
          }}
        >
          <div
            style={{
              fontSize: theme.sizes.small,
              fontWeight: 700,
              color: theme.colors.textDim,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            The 4 habits
          </div>

          {[
            { num: '01', label: 'Default to async' },
            { num: '02', label: 'Give context + ask + deadline' },
            { num: '03', label: 'No agenda, no meeting' },
            { num: '04', label: 'Weekly status updates' },
          ].map((habit, i) => (
            <motion.div
              key={habit.num}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.09, duration: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 16,
                paddingBottom: 16,
                borderBottom: i < 3 ? `1px solid ${theme.colors.border}` : 'none',
              }}
            >
              <span
                style={{
                  fontSize: theme.sizes.small,
                  fontWeight: 800,
                  color: theme.colors.accent,
                  minWidth: 24,
                }}
              >
                {habit.num}
              </span>
              <span style={{ fontSize: theme.sizes.body, color: theme.colors.text }}>
                {habit.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
