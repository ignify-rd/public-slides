import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, slideFromLeft } from '../lib/animations'

const stats = [
  { value: '600K+', label: 'lines of code', sub: 'in 60 days' },
  { value: '10-20K', label: 'lines/day', sub: 'part-time' },
  { value: '60', label: 'days', sub: 'to build gstack' },
]

export function Slide02WhoWhy() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.alt,
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

      {/* Left panel */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '0 0 52%',
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
          Who & Why
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: theme.colors.text,
            marginBottom: 24,
          }}
        >
          Built by{' '}
          <span style={{ color: theme.colors.accent }}>Garry Tan</span>
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          CEO of Y Combinator. Garry built gstack to explore how far AI-assisted
          development can take a solo builder -- and published the results openly.
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 16px',
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 8,
            width: 'fit-content',
          }}
        >
          <span
            style={{
              fontSize: theme.sizes.small,
              color: theme.colors.accent,
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            github.com/garrytan/gstack
          </span>
        </motion.div>
      </motion.div>

      {/* Right panel - stats */}
      <div
        style={{
          flex: '0 0 48%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: 48,
          paddingRight: 80,
          position: 'relative',
          zIndex: 1,
          gap: 20,
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

        {stats.map((stat, i) => (
          <motion.div
            key={stat.value}
            variants={slideFromLeft}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 + i * 0.12 }}
            style={{
              padding: '20px 24px',
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 12,
              width: '100%',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: theme.colors.accent,
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: theme.sizes.body,
                color: theme.colors.text,
                fontWeight: 600,
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontSize: theme.sizes.small,
                color: theme.colors.textMuted,
                marginTop: 2,
              }}
            >
              {stat.sub}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
