import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, slideFromLeft, slideFromRight } from '../lib/animations'

export function Slide05Example() {
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

      {/* Header */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ paddingTop: 48, paddingLeft: 80, paddingRight: 80, marginBottom: 36 }}
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
          Good vs Bad Slack Message
        </motion.h2>
      </motion.div>

      {/* Two columns */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          paddingLeft: 80,
          paddingRight: 80,
          paddingBottom: 56,
          gap: 40,
        }}
      >
        {/* BAD */}
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
              marginBottom: 18,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(248, 113, 113, 0.9)' }} />
            Bad
          </div>

          <div
            style={{
              border: '1px solid rgba(248, 113, 113, 0.2)',
              borderRadius: 8,
              padding: '20px 24px',
              background: 'rgba(248, 113, 113, 0.04)',
            }}
          >
            <div style={{ fontSize: theme.sizes.small, color: 'rgba(248, 113, 113, 0.7)', marginBottom: 10 }}>
              @sarah
            </div>
            <div
              style={{
                fontSize: theme.sizes.body,
                color: theme.colors.text,
                lineHeight: 1.6,
              }}
            >
              hey can you check something
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            {[
              'No context - check what?',
              'No clear ask or action',
              'No urgency or timeline',
              'Sarah has to ask 3 follow-up questions',
            ].map((issue) => (
              <div
                key={issue}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: 'rgba(248, 113, 113, 0.7)',
                    flexShrink: 0,
                    marginTop: 8,
                  }}
                />
                <span style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>{issue}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Vertical divider */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ width: 1, background: theme.colors.border, flexShrink: 0, transformOrigin: 'top' }}
        />

        {/* GOOD */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.35 }}
          style={{ flex: 1 }}
        >
          <div
            style={{
              fontSize: theme.sizes.small,
              fontWeight: 800,
              color: 'rgba(52, 211, 153, 0.9)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: 18,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(52, 211, 153, 0.9)' }} />
            Good
          </div>

          <div
            style={{
              border: '1px solid rgba(52, 211, 153, 0.2)',
              borderRadius: 8,
              padding: '20px 24px',
              background: 'rgba(52, 211, 153, 0.04)',
            }}
          >
            <div style={{ fontSize: theme.sizes.small, color: 'rgba(52, 211, 153, 0.7)', marginBottom: 10 }}>
              @sarah
            </div>
            <div
              style={{
                fontSize: theme.sizes.body,
                color: theme.colors.text,
                lineHeight: 1.6,
              }}
            >
              Hey Sarah - could you take a quick look at PR #47 (auth bug fix)? It's blocking our release on Friday.
              Should be under 30 min to review. Let me know if anything is unclear.
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            {[
              'Clear subject - PR #47 auth bug fix',
              'Explicit ask - review the PR',
              'Stakes clear - blocking release',
              'Effort estimate - 30 minutes',
            ].map((point) => (
              <div
                key={point}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: 'rgba(52, 211, 153, 0.7)',
                    flexShrink: 0,
                    marginTop: 8,
                  }}
                />
                <span style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
