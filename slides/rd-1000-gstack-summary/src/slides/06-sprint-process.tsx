import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const steps = [
  { label: 'Think', desc: 'Define the problem and scope', color: '#818cf8' },
  { label: 'Plan', desc: 'Break work into tasks', color: '#60a5fa' },
  { label: 'Build', desc: 'Implement with specialists', color: '#34d399' },
  { label: 'Review', desc: 'Code review + security audit', color: '#f59e0b' },
  { label: 'Test', desc: 'QA and integration tests', color: '#f87171' },
  { label: 'Ship', desc: 'Release and deploy', color: '#4361ee' },
  { label: 'Reflect', desc: 'Retro and tech debt review', color: '#c084fc' },
]

export function Slide06SprintProcess() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.alt,
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 80px',
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

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div variants={fadeInUp}>
          <div
            style={{
              fontSize: theme.sizes.label,
              fontWeight: 800,
              letterSpacing: '0.2em',
              color: theme.colors.accent,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            The Sprint Process
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              color: theme.colors.text,
              marginBottom: 8,
            }}
          >
            Seven phases,{' '}
            <span style={{ color: theme.colors.accent }}>one loop</span>
          </h2>
          <p
            style={{
              fontSize: theme.sizes.body,
              color: theme.colors.textMuted,
              marginBottom: 40,
              maxWidth: 520,
              lineHeight: 1.6,
            }}
          >
            Each sprint follows a consistent rhythm. Specialists are available
            at every phase -- call them as needed.
          </p>
        </motion.div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  position: 'relative',
                }}
              >
                {/* Step circle */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: `${step.color}22`,
                    border: `2px solid ${step.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: 'clamp(0.55rem, 0.85vw, 0.7rem)',
                    color: step.color,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    zIndex: 1,
                    position: 'relative',
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: 'clamp(0.75rem, 1.1vw, 0.875rem)',
                      fontWeight: 700,
                      color: step.color,
                      marginBottom: 2,
                    }}
                  >
                    {step.label}
                  </div>
                  <div
                    style={{
                      fontSize: 'clamp(0.6rem, 0.85vw, 0.7rem)',
                      color: theme.colors.textMuted,
                      lineHeight: 1.4,
                      maxWidth: 90,
                    }}
                  >
                    {step.desc}
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    color: theme.colors.textDim,
                    fontSize: '1rem',
                    paddingBottom: 24,
                    flexShrink: 0,
                  }}
                >
                  -&gt;
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
