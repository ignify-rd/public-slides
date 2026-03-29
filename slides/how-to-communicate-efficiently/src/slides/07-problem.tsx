import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide07Problem() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.alt,
        fontFamily: theme.fonts.family,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Right accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: theme.colors.accent,
          transformOrigin: 'top',
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          paddingLeft: 96,
          paddingRight: 96,
          display: 'flex',
          alignItems: 'center',
          gap: 80,
          width: '100%',
        }}
      >
        {/* Large number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(5rem, 11vw, 10rem)',
              fontWeight: 800,
              color: theme.colors.accent,
              lineHeight: 1,
            }}
          >
            3
          </div>
          <div
            style={{
              fontSize: 'clamp(0.9rem, 1.6vw, 1.3rem)',
              fontWeight: 700,
              color: theme.colors.textMuted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginTop: 4,
            }}
          >
            days
          </div>
        </motion.div>

        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            width: 1,
            height: 160,
            background: theme.colors.border,
            flexShrink: 0,
            transformOrigin: 'center',
          }}
        />

        {/* Text */}
        <div>
          <motion.div
            variants={fadeInUp}
            style={{
              fontSize: theme.sizes.label,
              fontWeight: 800,
              letterSpacing: '0.18em',
              color: theme.colors.accent,
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Problem
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: theme.colors.text,
              marginBottom: 20,
            }}
          >
            Your PR has been open
            <br />
            for 3 days.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            style={{
              fontSize: theme.sizes.subheading,
              color: theme.colors.textMuted,
              lineHeight: 1.5,
            }}
          >
            Still no review.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            style={{
              marginTop: 24,
              fontSize: theme.sizes.body,
              color: theme.colors.textDim,
              fontStyle: 'italic',
            }}
          >
            Is the reviewer ignoring you? Or did you not ask right?
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}
