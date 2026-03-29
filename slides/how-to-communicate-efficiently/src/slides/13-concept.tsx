import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const questions = [
  {
    q: 'Can this be a doc?',
    yes: 'Write the doc. Share it async.',
    no: 'Proceed to next question.',
  },
  {
    q: 'Can this be a Slack thread?',
    yes: 'Start the thread.',
    no: 'Proceed to next question.',
  },
  {
    q: 'Does this need real-time input from multiple people?',
    yes: 'Schedule a focused meeting with a clear agenda.',
    no: 'Send a Slack message, wait for replies.',
  },
]

export function Slide13Concept() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.alt,
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
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

      {/* Header */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ paddingTop: 52, paddingLeft: 80, paddingRight: 88, marginBottom: 40 }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 14,
          }}
        >
          Concept
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          style={{ fontSize: theme.sizes.heading, fontWeight: 800, color: theme.colors.text }}
        >
          Meetings as a Last Resort
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          style={{
            marginTop: 10,
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
          }}
        >
          Before scheduling, ask these three questions in order:
        </motion.p>
      </motion.div>

      {/* Decision flow */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 80,
          paddingRight: 88,
          paddingBottom: 56,
          gap: 20,
          justifyContent: 'center',
        }}
      >
        {questions.map((item, i) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.14, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 24,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                border: `1px solid ${theme.colors.borderAccent}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: theme.sizes.small,
                fontWeight: 800,
                color: theme.colors.accent,
              }}
            >
              {i + 1}
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 700,
                  color: theme.colors.text,
                  marginBottom: 8,
                }}
              >
                {item.q}
              </div>
              <div style={{ display: 'flex', gap: 24 }}>
                <span style={{ fontSize: theme.sizes.small, color: 'rgba(52, 211, 153, 0.8)' }}>
                  Yes: {item.yes}
                </span>
                <span style={{ fontSize: theme.sizes.small, color: theme.colors.textDim }}>
                  No: {item.no}
                </span>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 8,
            paddingTop: 20,
            borderTop: `1px solid ${theme.colors.border}`,
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            fontStyle: 'italic',
          }}
        >
          If you reach a meeting, it is justified. Keep it focused and short.
        </motion.div>
      </div>
    </div>
  )
}
