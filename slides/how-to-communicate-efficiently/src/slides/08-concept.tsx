import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const principles = [
  {
    num: '01',
    title: 'Be specific',
    desc: 'Name the exact thing you need. "Review PR #47 - auth refactor" beats "check my code".',
  },
  {
    num: '02',
    title: 'Give context upfront',
    desc: 'Assume they know nothing about your task. One sentence of background saves 5 back-and-forth messages.',
  },
  {
    num: '03',
    title: 'Make the ask explicit',
    desc: 'End with a clear question or action. "Could you approve by Thursday?" removes all ambiguity.',
  },
  {
    num: '04',
    title: 'Reduce the effort to help',
    desc: 'Link the PR, attach the doc, include the error. Never make them hunt for context.',
  },
]

export function Slide08Concept() {
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
        style={{ paddingTop: 52, paddingLeft: 80, paddingRight: 80, marginBottom: 40 }}
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
          Writing Requests That Get a Response
        </motion.h2>
      </motion.div>

      {/* Principles */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          paddingLeft: 80,
          paddingRight: 80,
          paddingBottom: 56,
          gap: 28,
        }}
      >
        {principles.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: 'flex', gap: 20 }}
          >
            <div
              style={{
                fontSize: 'clamp(0.7rem, 1.1vw, 0.85rem)',
                fontWeight: 800,
                color: theme.colors.accent,
                letterSpacing: '0.06em',
                flexShrink: 0,
                paddingTop: 3,
              }}
            >
              {p.num}
            </div>
            <div>
              <div
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 800,
                  color: theme.colors.text,
                  marginBottom: 8,
                }}
              >
                {p.title}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.textMuted,
                  lineHeight: 1.6,
                }}
              >
                {p.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
