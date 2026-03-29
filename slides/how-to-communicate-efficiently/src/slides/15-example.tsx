import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, slideFromLeft, slideFromRight } from '../lib/animations'

export function Slide15Example() {
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
        style={{ paddingTop: 48, paddingLeft: 80, paddingRight: 88, marginBottom: 32 }}
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
          Example
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          style={{ fontSize: theme.sizes.heading, fontWeight: 800, color: theme.colors.text }}
        >
          A Meeting That Became a Doc
        </motion.h2>
      </motion.div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          paddingLeft: 80,
          paddingRight: 88,
          paddingBottom: 52,
          gap: 40,
          alignItems: 'flex-start',
        }}
      >
        {/* Before */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          style={{ flex: 1 }}
        >
          <div
            style={{
              fontSize: theme.sizes.small,
              fontWeight: 800,
              color: 'rgba(248, 113, 113, 0.9)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Before
          </div>

          <div
            style={{
              border: '1px solid rgba(248, 113, 113, 0.2)',
              borderRadius: 8,
              padding: '20px 24px',
              background: 'rgba(248, 113, 113, 0.04)',
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontSize: theme.sizes.small,
                fontWeight: 700,
                color: 'rgba(248, 113, 113, 0.7)',
                marginBottom: 12,
              }}
            >
              Calendar invite
            </div>
            <div style={{ fontSize: theme.sizes.body, fontWeight: 700, color: theme.colors.text, marginBottom: 8 }}>
              API design discussion
            </div>
            <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>
              Thu 10:00 - 11:00
            </div>
            <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, marginTop: 4 }}>
              Attendees: 6 people
            </div>
            <div
              style={{
                marginTop: 12,
                fontSize: theme.sizes.small,
                color: theme.colors.textDim,
                fontStyle: 'italic',
              }}
            >
              (No description. No agenda. No pre-read.)
            </div>
          </div>

          <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>
            Result: 60 minutes of confusion. No decision made. Follow-up meeting scheduled.
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            width: 1,
            alignSelf: 'stretch',
            background: theme.colors.border,
            flexShrink: 0,
            transformOrigin: 'top',
          }}
        />

        {/* After */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          style={{ flex: 1 }}
        >
          <div
            style={{
              fontSize: theme.sizes.small,
              fontWeight: 800,
              color: 'rgba(52, 211, 153, 0.9)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            After
          </div>

          <div
            style={{
              border: '1px solid rgba(52, 211, 153, 0.2)',
              borderRadius: 8,
              padding: '20px 24px',
              background: 'rgba(52, 211, 153, 0.04)',
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontSize: theme.sizes.small,
                fontWeight: 700,
                color: 'rgba(52, 211, 153, 0.7)',
                marginBottom: 12,
              }}
            >
              Notion doc (shared in Slack)
            </div>
            <div style={{ fontSize: theme.sizes.body, fontWeight: 700, color: theme.colors.text, marginBottom: 12 }}>
              API v2 Design - Options + Decision
            </div>
            {[
              'Three API versioning options listed with tradeoffs',
              'Each team member added async comments',
              'Option B chosen by team lead with rationale',
              'No meeting needed',
            ].map((point) => (
              <div key={point} style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: 'rgba(52, 211, 153, 0.7)',
                    flexShrink: 0,
                    marginTop: 7,
                  }}
                />
                <span style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>{point}</span>
              </div>
            ))}
          </div>

          <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>
            Result: Decision made in 24 hours. Everyone's time protected.
          </div>
        </motion.div>
      </div>
    </div>
  )
}
