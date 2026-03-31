import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const features = [
  { icon: '🧠', title: '23 Specialists', desc: 'AI agents covering every phase of the software lifecycle' },
  { icon: '⚡', title: '8 Power Tools', desc: 'Reusable utilities shared across all specialists' },
  { icon: '🔒', title: 'Zero PATH pollution', desc: 'Nothing touches your global environment' },
  { icon: '📦', title: 'Claude Code skill pack', desc: 'Drop-in augmentation for Claude Code workflows' },
]

export function Slide03WhatIsGstack() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.default,
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
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          What is gstack
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: theme.colors.text,
            marginBottom: 12,
          }}
        >
          A Claude Code{' '}
          <span style={{ color: theme.colors.accent }}>skill pack</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            marginBottom: 40,
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          Plug-in specialists and tools that extend Claude Code -- no global installs,
          no lock-in. Every specialist is a focused AI agent with a single job.
        </motion.p>

        <motion.div
          variants={containerFast}
          initial="hidden"
          animate="show"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
          }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeInUp}
              style={{
                padding: '20px 24px',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 12,
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{f.icon}</span>
              <div>
                <div
                  style={{
                    fontSize: theme.sizes.body,
                    fontWeight: 700,
                    color: theme.colors.text,
                    marginBottom: 4,
                  }}
                >
                  {f.title}
                </div>
                <div
                  style={{
                    fontSize: theme.sizes.small,
                    color: theme.colors.textMuted,
                    lineHeight: 1.5,
                  }}
                >
                  {f.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
