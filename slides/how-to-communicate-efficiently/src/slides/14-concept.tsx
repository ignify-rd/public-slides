import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const agendaItems = [
  {
    label: 'Goal',
    desc: 'One sentence. What decision or outcome do we need?',
    example: '"Decide on the API versioning strategy for v2."',
  },
  {
    label: 'Time limit',
    desc: 'Set an end time. 30 minutes max for most technical discussions.',
    example: '"Thu 14:00 - 14:30"',
  },
  {
    label: 'Discussion items',
    desc: '2-3 specific topics, not vague themes. Each with an owner.',
    example: '"1. Options overview (Anya, 5 min). 2. Tradeoffs (all, 10 min)."',
  },
  {
    label: 'Pre-read',
    desc: 'Link any docs or context people need to review before joining.',
    example: '"Please read the RFC linked below before the call."',
  },
]

export function Slide14Concept() {
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
        style={{ paddingTop: 52, paddingLeft: 80, paddingRight: 80, marginBottom: 36 }}
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
          How to Write an Agenda That Works
        </motion.h2>
      </motion.div>

      {/* Agenda items */}
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
        {agendaItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            <div
              style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
                fontWeight: 800,
                color: theme.colors.accent,
                paddingBottom: 8,
                borderBottom: `1px solid ${theme.colors.border}`,
              }}
            >
              {item.label}
            </div>
            <p
              style={{
                fontSize: theme.sizes.body,
                color: theme.colors.textMuted,
                lineHeight: 1.6,
              }}
            >
              {item.desc}
            </p>
            <div
              style={{
                fontSize: theme.sizes.small,
                color: theme.colors.textDim,
                fontStyle: 'italic',
                lineHeight: 1.5,
              }}
            >
              {item.example}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
