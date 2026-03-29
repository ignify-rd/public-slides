import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const channels = [
  {
    name: 'Slack',
    color: theme.colors.accent,
    when: ['Quick questions', 'Updates that need a reply soon', 'Team-wide announcements', 'Brief status pings'],
    notFor: 'Long discussions or complex decisions',
  },
  {
    name: 'Email',
    color: 'rgba(255, 255, 255, 0.7)',
    when: ['External stakeholders', 'Formal decisions to document', 'Long explanations with context', 'Async with people outside Slack'],
    notFor: 'Internal team chat or urgent issues',
  },
  {
    name: 'Meeting',
    color: 'rgba(255, 255, 255, 0.35)',
    when: ['Complex decisions needing group input', 'Unblocking a team conflict', 'Onboarding or mentoring', 'When async keeps going in circles'],
    notFor: 'Status updates or info sharing',
  },
]

export function Slide04Concept() {
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
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
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
        style={{
          paddingTop: 52,
          paddingLeft: 80,
          paddingRight: 80,
          marginBottom: 44,
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
            marginBottom: 14,
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
          Slack, Email, Meeting - When to Use Each
        </motion.h2>
      </motion.div>

      {/* Three columns */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          paddingLeft: 80,
          paddingRight: 88,
          paddingBottom: 60,
          gap: 32,
        }}
      >
        {channels.map((ch, i) => (
          <motion.div
            key={ch.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                fontWeight: 800,
                color: ch.color,
                marginBottom: 20,
                paddingBottom: 16,
                borderBottom: `1px solid ${theme.colors.border}`,
              }}
            >
              {ch.name}
            </div>

            <div
              style={{
                fontSize: theme.sizes.small,
                fontWeight: 700,
                color: theme.colors.textDim,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Use when
            </div>

            {ch.when.map((item) => (
              <div
                key={item}
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
                    background: ch.color,
                    flexShrink: 0,
                    marginTop: 8,
                  }}
                />
                <span style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.5 }}>
                  {item}
                </span>
              </div>
            ))}

            <div
              style={{
                marginTop: 'auto',
                paddingTop: 16,
                borderTop: `1px solid ${theme.colors.border}`,
              }}
            >
              <div
                style={{
                  fontSize: theme.sizes.small,
                  fontWeight: 700,
                  color: theme.colors.textDim,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                Not for
              </div>
              <div style={{ fontSize: theme.sizes.small, color: theme.colors.textDim, fontStyle: 'italic' }}>
                {ch.notFor}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
