import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, slideFromLeft, slideFromRight } from '../lib/animations'

export function Slide10Example() {
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
        style={{ paddingTop: 48, paddingLeft: 80, paddingRight: 80, marginBottom: 32 }}
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
          Rewriting a Vague Request
        </motion.h2>
      </motion.div>

      {/* Two columns */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          paddingLeft: 80,
          paddingRight: 80,
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
              marginBottom: 20,
            }}
          >
            <div
              style={{
                fontSize: theme.sizes.body,
                color: theme.colors.text,
                lineHeight: 1.7,
              }}
            >
              Hey can you review my PR? I need it ASAP
            </div>
          </div>

          <div
            style={{
              fontSize: theme.sizes.small,
              color: theme.colors.textMuted,
              lineHeight: 1.6,
            }}
          >
            The reviewer has no idea:
          </div>
          <div style={{ marginTop: 10 }}>
            {['Which PR?', 'What does it do?', 'How long will it take?', 'Why is it urgent?'].map((q) => (
              <div key={q} style={{ fontSize: theme.sizes.small, color: theme.colors.textDim, marginTop: 6 }}>
                - {q}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            flexShrink: 0,
            alignSelf: 'center',
            color: theme.colors.accent,
            fontSize: '1.5rem',
          }}
        >
          -&gt;
        </motion.div>

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
              marginBottom: 20,
            }}
          >
            <div
              style={{
                fontSize: theme.sizes.body,
                color: theme.colors.text,
                lineHeight: 1.7,
              }}
            >
              Hey - could you review PR #123 (auth refactor)?
              <br /><br />
              Context: fixes the session timeout bug from last sprint. About 200 lines, mostly in auth/middleware.
              <br /><br />
              We are targeting a Thursday deploy. No rush today, but Thursday EOD would help a lot.
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { label: 'Context', val: 'session timeout bug' },
              { label: 'Ask', val: 'review PR #123' },
              { label: 'Deadline', val: 'Thursday EOD' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: theme.sizes.small,
                    fontWeight: 700,
                    color: theme.colors.accent,
                    minWidth: 60,
                  }}
                >
                  {item.label}
                </span>
                <span style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
