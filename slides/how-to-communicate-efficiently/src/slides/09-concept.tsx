import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const parts = [
  {
    label: 'Context',
    num: '1',
    desc: 'One sentence explaining the background. What are you working on? Why does this matter?',
    example: '"I am refactoring the auth module to fix the session bug from last week."',
  },
  {
    label: 'Ask',
    num: '2',
    desc: 'The specific action you need. One clear verb: review, approve, decide, unblock.',
    example: '"Could you review PR #52 and flag any concerns?"',
  },
  {
    label: 'Deadline',
    num: '3',
    desc: 'When you need it by. Not "ASAP" - give an actual date or time.',
    example: '"We are targeting a Friday deploy, so Thursday EOD works."',
  },
]

export function Slide09Concept() {
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
        style={{ paddingTop: 52, paddingLeft: 80, paddingRight: 88, marginBottom: 36 }}
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
          Context, Ask, Deadline - The 3-Part Message
        </motion.h2>
      </motion.div>

      {/* Three sections */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          paddingLeft: 80,
          paddingRight: 88,
          paddingBottom: 56,
          gap: 0,
        }}
      >
        {parts.map((part, i) => (
          <motion.div
            key={part.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.13, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              flex: 1,
              paddingRight: i < 2 ? 36 : 0,
              borderRight: i < 2 ? `1px solid ${theme.colors.border}` : 'none',
              paddingLeft: i > 0 ? 36 : 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 12,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 800,
                  color: 'rgba(67, 97, 238, 0.25)',
                  lineHeight: 1,
                }}
              >
                {part.num}
              </span>
              <span
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                  fontWeight: 800,
                  color: theme.colors.accent,
                }}
              >
                {part.label}
              </span>
            </div>

            <p
              style={{
                fontSize: theme.sizes.body,
                color: theme.colors.textMuted,
                lineHeight: 1.65,
                marginBottom: 20,
              }}
            >
              {part.desc}
            </p>

            <div
              style={{
                marginTop: 'auto',
                paddingTop: 16,
                borderTop: `1px solid ${theme.colors.border}`,
                fontSize: theme.sizes.small,
                color: theme.colors.textDim,
                fontStyle: 'italic',
                lineHeight: 1.6,
              }}
            >
              {part.example}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
