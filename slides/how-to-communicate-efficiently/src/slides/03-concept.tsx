import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, slideFromLeft, slideFromRight } from '../lib/animations'

export function Slide03Concept() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.default,
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
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

      {/* Header */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          paddingTop: 56,
          paddingLeft: 80,
          paddingRight: 80,
          marginBottom: 40,
        }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Concept
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.heading,
            fontWeight: 800,
            color: theme.colors.text,
          }}
        >
          Async vs Sync - Choose the Right Channel
        </motion.h2>
      </motion.div>

      {/* Two columns */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          paddingLeft: 80,
          paddingRight: 80,
          paddingBottom: 60,
          gap: 0,
        }}
      >
        {/* ASYNC column */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          style={{
            flex: 1,
            paddingRight: 48,
          }}
        >
          <div
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
              fontWeight: 800,
              color: theme.colors.accent,
              letterSpacing: '0.12em',
              marginBottom: 20,
            }}
          >
            ASYNC
          </div>
          <div
            style={{
              fontSize: theme.sizes.body,
              color: theme.colors.textMuted,
              marginBottom: 28,
              lineHeight: 1.6,
            }}
          >
            No immediate response expected. You send - they reply when ready.
          </div>
          {['Slack messages', 'Email', 'Comments on docs or PRs', 'Loom recordings', 'Task tickets'].map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: theme.colors.accent,
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: theme.sizes.body, color: theme.colors.text }}>{item}</span>
            </div>
          ))}
          <div
            style={{
              marginTop: 24,
              paddingTop: 20,
              borderTop: `1px solid ${theme.colors.border}`,
              fontSize: theme.sizes.small,
              color: theme.colors.textMuted,
              fontStyle: 'italic',
            }}
          >
            Default mode. Use this 80% of the time.
          </div>
        </motion.div>

        {/* Vertical divider */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            width: 1,
            background: theme.colors.border,
            flexShrink: 0,
            transformOrigin: 'top',
          }}
        />

        {/* SYNC column */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.35 }}
          style={{
            flex: 1,
            paddingLeft: 48,
          }}
        >
          <div
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
              fontWeight: 800,
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.12em',
              marginBottom: 20,
            }}
          >
            SYNC
          </div>
          <div
            style={{
              fontSize: theme.sizes.body,
              color: theme.colors.textMuted,
              marginBottom: 28,
              lineHeight: 1.6,
            }}
          >
            Real-time. Both people are present at the same moment.
          </div>
          {['Phone or video calls', 'In-person meetings', 'Huddles', 'Pair programming', 'Stand-ups'].map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.35)',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: theme.sizes.body, color: theme.colors.textMuted }}>{item}</span>
            </div>
          ))}
          <div
            style={{
              marginTop: 24,
              paddingTop: 20,
              borderTop: `1px solid ${theme.colors.border}`,
              fontSize: theme.sizes.small,
              color: theme.colors.textMuted,
              fontStyle: 'italic',
            }}
          >
            Use for blockers, conflicts, or emotional topics.
          </div>
        </motion.div>
      </div>
    </div>
  )
}
