import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const groups = [
  {
    theme: 'Plan',
    color: '#818cf8',
    skills: ['Architect', 'PRD Writer', 'Task Planner', 'Sprint Conductor'],
  },
  {
    theme: 'Design',
    color: '#34d399',
    skills: ['UI Designer', 'UX Researcher', 'DB Schema Designer'],
  },
  {
    theme: 'Review',
    color: '#f59e0b',
    skills: ['Code Reviewer', 'PR Summarizer', 'Security Auditor'],
  },
  {
    theme: 'QA',
    color: '#f87171',
    skills: ['QA Engineer', 'Integration Tester', 'Performance Analyst'],
  },
  {
    theme: 'Ship',
    color: '#60a5fa',
    skills: ['Release Manager', 'DevOps Engineer', 'Docs Writer'],
  },
  {
    theme: 'Reflect',
    color: '#c084fc',
    skills: ['Retrospective', 'Tech Debt Tracker', 'Changelog Author'],
  },
]

export function Slide05KeySkills() {
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
        padding: '44px 80px',
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: theme.backgrounds.grid,
          backgroundSize: '60px 60px',
          opacity: 0.4,
        }}
      />

      {/* Left accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: theme.colors.accent,
          transformOrigin: 'top',
          zIndex: 2,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <motion.div variants={fadeInUp} style={{ marginBottom: 6 }}>
          <div
            style={{
              fontSize: theme.sizes.label,
              fontWeight: 800,
              letterSpacing: '0.2em',
              color: theme.colors.accent,
              textTransform: 'uppercase',
              marginBottom: 6,
            }}
          >
            Key Skills
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
              fontWeight: 800,
              color: theme.colors.text,
              marginBottom: 4,
            }}
          >
            23 Specialists,{' '}
            <span style={{ color: theme.colors.accent }}>6 Themes</span>
          </h2>
          <p
            style={{
              fontSize: theme.sizes.small,
              color: theme.colors.textMuted,
              marginBottom: 20,
            }}
          >
            Every specialist is a focused AI agent. Pick what you need, skip what you don't.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
            flex: 1,
          }}
        >
          {groups.map((g, gi) => (
            <motion.div
              key={g.theme}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + gi * 0.07 }}
              style={{
                padding: '14px 16px',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid rgba(255,255,255,0.08)`,
                borderTop: `2px solid ${g.color}`,
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div
                style={{
                  fontSize: theme.sizes.label,
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: g.color,
                }}
              >
                {g.theme}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {g.skills.map((s) => (
                  <div
                    key={s}
                    style={{
                      fontSize: theme.sizes.small,
                      color: theme.colors.textMuted,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: g.color,
                        opacity: 0.7,
                        flexShrink: 0,
                      }}
                    />
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: 14,
            padding: '10px 16px',
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 8,
            fontSize: theme.sizes.small,
            color: theme.colors.textMuted,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ color: theme.colors.accent, fontWeight: 700 }}>+</span>
          8 shared power tools used across all specialists
        </motion.div>
      </motion.div>
    </div>
  )
}
