import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const sections = [
  {
    label: 'What',
    q: 'What did I work on this week?',
    desc: '2-3 bullet points. Tasks, PRs, tickets. Be specific - "Finished auth PR #48" not "Worked on auth".',
  },
  {
    label: 'Progress',
    q: 'What is the current status?',
    desc: 'Are you on track, behind, or ahead? One sentence. No sugarcoating.',
  },
  {
    label: 'Blockers',
    q: 'What is slowing me down?',
    desc: 'If something is blocked, say so explicitly. This is how you get help early.',
  },
  {
    label: 'Next',
    q: 'What is my plan for next week?',
    desc: '1-2 main goals. Shows initiative and lets your manager spot misalignment before it is too late.',
  },
]

export function Slide18Concept() {
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
          Proactive Status Updates - The Weekly Habit
        </motion.h2>
      </motion.div>

      {/* Sections */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          paddingLeft: 80,
          paddingRight: 88,
          paddingBottom: 56,
          gap: 24,
        }}
      >
        {sections.map((sec, i) => (
          <motion.div
            key={sec.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: 'flex', gap: 16 }}
          >
            <div
              style={{
                fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)',
                fontWeight: 800,
                color: theme.colors.accent,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                minWidth: 60,
                paddingTop: 2,
                flexShrink: 0,
              }}
            >
              {sec.label}
            </div>
            <div>
              <div
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 700,
                  color: theme.colors.text,
                  marginBottom: 6,
                  fontStyle: 'italic',
                }}
              >
                {sec.q}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.textMuted,
                  lineHeight: 1.6,
                }}
              >
                {sec.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
