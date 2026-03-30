import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide02Adoption() {
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
      {/* Top accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${theme.colors.accent}, transparent)`,
          transformOrigin: 'left',
        }}
      />

      {/* Left content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '0 0 55%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 96,
          paddingRight: 48,
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
            marginBottom: 32,
          }}
        >
          AI Adoption
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: theme.colors.text,
            marginBottom: 32,
          }}
        >
          46% code tren GitHub
          <br />
          <span style={{ color: theme.colors.accent }}>duoc viet boi AI</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            lineHeight: 1.7,
            maxWidth: 420,
            marginBottom: 24,
          }}
        >
          GitHub Octoverse 2023: trong so code duoc accept qua Copilot,
          gan mot nua la do AI sinh ra. Ty le nay dang tang nhanh.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.small,
            color: theme.colors.textDim,
            fontStyle: 'italic',
          }}
        >
          Nguon: GitHub Octoverse 2023 Report
        </motion.div>
      </motion.div>

      {/* Right - big stat */}
      <div
        style={{
          flex: '0 0 45%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 'clamp(5rem, 10vw, 9rem)',
              fontWeight: 800,
              color: theme.colors.accent,
              lineHeight: 1,
            }}
          >
            46%
          </div>
          <div
            style={{
              fontSize: theme.sizes.body,
              color: theme.colors.textMuted,
              textAlign: 'center',
              maxWidth: 200,
            }}
          >
            code duoc sinh boi AI (GitHub Copilot)
          </div>
        </motion.div>
      </div>
    </div>
  )
}
