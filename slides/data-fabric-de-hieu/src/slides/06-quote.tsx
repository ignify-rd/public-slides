import { motion } from 'framer-motion'
import { theme } from '../lib/theme'

export function Slide06Quote() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, ${theme.colors.accent} 0%, #1E40AF 40%, ${theme.colors.accentAlt} 100%)`,
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 90px',
      }}
    >
      {/* Dot pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.7,
        }}
      />

      {/* Large quote mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          top: 30,
          left: 80,
          fontSize: '12rem',
          color: 'rgba(255,255,255,0.08)',
          fontFamily: 'Georgia, serif',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        "
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: 900,
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            width: 48,
            height: 4,
            background: 'rgba(255,255,255,0.6)',
            borderRadius: 2,
            margin: '0 auto 32px',
          }}
        />

        <p
          style={{
            fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
            color: 'white',
            lineHeight: 1.65,
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          Trong ky nguyen AI, mot nguon du lieu tin cay duy nhat{' '}
          <span
            style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '2px 10px',
              borderRadius: 4,
              fontStyle: 'italic',
            }}
          >
            (Single Source of Truth)
          </span>{' '}
          chinh la{' '}
          <span style={{ color: '#FDE68A', fontWeight: 800 }}>
            'xuong song'
          </span>{' '}
          giup doanh nghiep van hanh chinh xac va hieu qua.
        </p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            width: 48,
            height: 4,
            background: 'rgba(255,255,255,0.6)',
            borderRadius: 2,
            margin: '32px auto 0',
          }}
        />
      </motion.div>

      {/* AI icon bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 36,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: 'rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em' }}>
          Nen tang cho AI era
        </span>
      </motion.div>
    </div>
  )
}
