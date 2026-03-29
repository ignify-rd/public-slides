import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide12Problem() {
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
      {/* Top accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
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
          You are in a meeting.
          <br />
          Nobody knows why.
        </motion.h2>

        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            'No agenda was sent.',
            'Half the attendees should not be there.',
            '45 minutes later, nothing was decided.',
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
        </motion.div>

        <motion.p
          variants={fadeInUp}
          style={{
            marginTop: 36,
            fontSize: theme.sizes.body,
            color: theme.colors.textDim,
            fontStyle: 'italic',
          }}
        >
          A common waste. And completely avoidable.
        </motion.p>
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
          fontSize: 'clamp(8rem, 16vw, 14rem)',
          fontWeight: 800,
          color: 'rgba(67, 97, 238, 0.06)',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        ?!
      </motion.div>
    </div>
  )
}
