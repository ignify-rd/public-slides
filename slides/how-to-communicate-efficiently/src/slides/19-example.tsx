import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide19Example() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.default,
        fontFamily: theme.fonts.family,
        display: 'flex',
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

      {/* Left panel - header + annotations */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '0 0 38%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 80,
          paddingRight: 32,
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
          Example
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.heading,
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 32,
            lineHeight: 1.2,
          }}
        >
          Sample Weekly
          <br />
          Update
        </motion.h2>

        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {[
            { label: 'Send every Friday', desc: 'End of day. Before you close your laptop.' },
            { label: 'Keep it under 5 min', desc: 'Short is always better. No walls of text.' },
            { label: 'Post in your team channel', desc: 'Public updates build trust and visibility.' },
          ].map((tip) => (
            <div key={tip.label}>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  fontWeight: 700,
                  color: theme.colors.accent,
                  marginBottom: 4,
                }}
              >
                {tip.label}
              </div>
              <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>
                {tip.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Vertical divider */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          width: 1,
          background: theme.colors.border,
          flexShrink: 0,
          alignSelf: 'stretch',
          transformOrigin: 'top',
          margin: '40px 0',
        }}
      />

      {/* Right panel - message */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 40,
          paddingRight: 80,
        }}
      >
        <div
          style={{
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 10,
            padding: '24px 28px',
          }}
        >
          <div
            style={{
              fontSize: theme.sizes.small,
              fontWeight: 700,
              color: theme.colors.accent,
              marginBottom: 16,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            #team-backend - Friday 17:30
          </div>

          <div style={{ fontSize: theme.sizes.body, color: theme.colors.text, lineHeight: 1.75 }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ fontWeight: 700, color: theme.colors.accent }}>This week:</span>
              <br />
              - Shipped auth refactor (PR #48, merged Wed) <br />
              - Fixed session timeout bug flagged in last sprint <br />
              - Started work on password reset flow (in progress)
            </div>

            <div style={{ marginBottom: 12 }}>
              <span style={{ fontWeight: 700, color: theme.colors.accent }}>Status:</span>
              <br />
              On track. Password reset should be ready for review by Tuesday.
            </div>

            <div style={{ marginBottom: 12 }}>
              <span style={{ fontWeight: 700, color: theme.colors.accent }}>Blockers:</span>
              <br />
              Waiting on design spec for the email template - pinged @maya.
            </div>

            <div>
              <span style={{ fontWeight: 700, color: theme.colors.accent }}>Next week:</span>
              <br />
              Finish password reset. Start on OAuth integration if spec arrives.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
