import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { fadeInUp } from '../lib/animations'

export function Slide23SectionRoadmap() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.section,
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 6,
          background: `linear-gradient(180deg, ${theme.colors.accent} 0%, ${theme.colors.accentAlt} 100%)`,
          transformOrigin: 'top',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '14rem',
          fontWeight: 800,
          color: 'rgba(29, 78, 216, 0.06)',
          position: 'absolute',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        07
      </motion.div>

      <motion.div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          Phan 7
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
            fontWeight: 800,
            color: theme.colors.text,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Lộ trình{' '}
          <span style={{ color: theme.colors.accent }}>triển khai (Roadmap)</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            width: 64,
            height: 4,
            background: `linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.accentAlt})`,
            borderRadius: 2,
            margin: '24px auto 0',
            transformOrigin: 'left',
          }}
        />
      </motion.div>
    </div>
  )
}
