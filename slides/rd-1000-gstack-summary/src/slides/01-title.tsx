import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide01Title() {
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
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: theme.backgrounds.grid,
          backgroundSize: '60px 60px',
          opacity: 0.6,
        }}
      />

      {/* Left accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 80,
          paddingRight: 80,
          position: 'relative',
          zIndex: 1,
          maxWidth: 860,
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
            marginBottom: 28,
          }}
        >
          Open Source Tooling
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            color: theme.colors.text,
            marginBottom: 36,
          }}
        >
          gstack
          <br />
          <span style={{ color: theme.colors.accent }}>Ship Like a Team</span>
          <br />
          of Twenty
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          style={{
            width: 48,
            height: 2,
            background: theme.colors.accent,
            marginBottom: 32,
          }}
        />

        <motion.blockquote
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            lineHeight: 1.7,
            maxWidth: 560,
            borderLeft: `2px solid ${theme.colors.borderAccent}`,
            paddingLeft: 20,
            fontStyle: 'italic',
          }}
        >
          "The hottest new programming language is English."
          <br />
          <span
            style={{
              fontStyle: 'normal',
              fontSize: theme.sizes.small,
              color: theme.colors.textDim,
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            -- Andrej Karpathy
          </span>
        </motion.blockquote>
      </motion.div>

      {/* Large faded background text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          position: 'absolute',
          right: 60,
          bottom: 40,
          fontSize: 'clamp(7rem, 14vw, 13rem)',
          fontWeight: 800,
          color: 'rgba(67, 97, 238, 0.06)',
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        gstack
      </motion.div>
    </div>
  )
}
