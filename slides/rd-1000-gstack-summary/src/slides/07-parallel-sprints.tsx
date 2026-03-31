import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, slideFromLeft } from '../lib/animations'

const sprints = [
  { id: 'S-01', task: 'Auth refactor', phase: 'Review', color: '#f59e0b' },
  { id: 'S-02', task: 'Payment API', phase: 'Build', color: '#34d399' },
  { id: 'S-03', task: 'Dashboard UI', phase: 'Test', color: '#f87171' },
  { id: 'S-04', task: 'DB migrations', phase: 'Plan', color: '#60a5fa' },
  { id: 'S-05', task: 'Docs update', phase: 'Ship', color: '#4361ee' },
]

export function Slide07ParallelSprints() {
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

      {/* Left panel */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '0 0 50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 80,
          paddingRight: 48,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          Parallel Sprints
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: theme.colors.text,
            marginBottom: 24,
          }}
        >
          Run 10-15 sprints{' '}
          <span style={{ color: theme.colors.accent }}>at once</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            lineHeight: 1.7,
            marginBottom: 28,
          }}
        >
          The Conductor specialist manages multiple concurrent sprints.
          A solo builder operates like a coordinated team -- every sprint
          progressing independently in parallel.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{
            padding: '16px 20px',
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 10,
          }}
        >
          <div
            style={{
              fontSize: theme.sizes.body,
              fontWeight: 700,
              color: theme.colors.accent,
              marginBottom: 4,
            }}
          >
            Solo builder -&gt; team of 20
          </div>
          <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.5 }}>
            Conductor keeps all sprints in sync, unblocks dependencies,
            and routes work to the right specialist automatically.
          </div>
        </motion.div>
      </motion.div>

      {/* Right panel - sprint visualization */}
      <div
        style={{
          flex: '0 0 50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 48,
          paddingRight: 80,
          position: 'relative',
          zIndex: 1,
          gap: 12,
        }}
      >
        {/* Vertical divider */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            position: 'absolute',
            left: 0,
            top: '15%',
            bottom: '15%',
            width: 1,
            background: 'rgba(67, 97, 238, 0.3)',
            transformOrigin: 'top',
          }}
        />

        <div
          style={{
            fontSize: theme.sizes.small,
            color: theme.colors.textDim,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 4,
          }}
        >
          Active sprints
        </div>

        {sprints.map((sprint, i) => (
          <motion.div
            key={sprint.id}
            variants={slideFromLeft}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 + i * 0.1 }}
            style={{
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid rgba(255,255,255,0.08)`,
              borderLeft: `3px solid ${sprint.color}`,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  fontSize: theme.sizes.label,
                  color: sprint.color,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  minWidth: 36,
                }}
              >
                {sprint.id}
              </span>
              <span style={{ fontSize: theme.sizes.small, color: theme.colors.text, fontWeight: 600 }}>
                {sprint.task}
              </span>
            </div>
            <span
              style={{
                fontSize: theme.sizes.label,
                color: sprint.color,
                background: `${sprint.color}18`,
                border: `1px solid ${sprint.color}40`,
                borderRadius: 4,
                padding: '3px 8px',
                fontWeight: 700,
                letterSpacing: '0.08em',
              }}
            >
              {sprint.phase}
            </span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            fontSize: theme.sizes.small,
            color: theme.colors.textDim,
            textAlign: 'center',
            marginTop: 4,
          }}
        >
          ...and 5-10 more running concurrently
        </motion.div>
      </div>
    </div>
  )
}
