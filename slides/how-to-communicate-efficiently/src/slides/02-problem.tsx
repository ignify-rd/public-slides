import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide02Problem() {
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
      }}
    >
      {/* Top accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${theme.colors.accent}, transparent)`,
          transformOrigin: 'left',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          paddingLeft: 96,
          paddingRight: 96,
          maxWidth: 900,
        }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            display: 'inline-block',
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 40,
          }}
        >
          Problem
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: theme.colors.text,
            marginBottom: 40,
          }}
        >
          You sent a message.
          <br />
          Nobody replied.
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.subheading,
            fontWeight: 400,
            color: theme.colors.textMuted,
            lineHeight: 1.5,
          }}
        >
          What went wrong?
        </motion.p>
      </motion.div>

      {/* Decorative large question mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute',
          right: 80,
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(10rem, 18vw, 16rem)',
          fontWeight: 800,
          color: 'rgba(67, 97, 238, 0.07)',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        ?
      </motion.div>

      {/* Bottom hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: 96,
          fontSize: theme.sizes.small,
          color: theme.colors.textDim,
          fontStyle: 'italic',
        }}
      >
        Sound familiar?
      </motion.div>
    </div>
  )
}
