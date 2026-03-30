import { motion } from 'framer-motion'
import { theme } from '../lib/theme'

export function Slide11Conclusion() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background:
          'radial-gradient(ellipse at 50% 50%, rgba(67, 97, 238, 0.22) 0%, transparent 65%), #0a0a0a',
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Top + bottom accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: 2,
          background: `linear-gradient(90deg, transparent, ${theme.colors.accent}, transparent)`,
          transformOrigin: 'center',
        }}
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          right: '10%',
          height: 2,
          background: `linear-gradient(90deg, transparent, ${theme.colors.accent}, transparent)`,
          transformOrigin: 'center',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        style={{
          fontSize: theme.sizes.label,
          fontWeight: 800,
          letterSpacing: '0.2em',
          color: theme.colors.accent,
          textTransform: 'uppercase',
          marginBottom: 40,
        }}
      >
        Ket luan
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          color: theme.colors.text,
          marginBottom: 16,
        }}
      >
        Thich nghi,
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: 8,
        }}
      >
        dung{' '}
        <span style={{ color: theme.colors.negative }}>bien mat.</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        style={{
          marginTop: 48,
          fontSize: theme.sizes.body,
          color: theme.colors.textMuted,
          maxWidth: 580,
          lineHeight: 1.7,
        }}
      >
        AI thay doi cach chung ta lam viec - khong thay chung ta.
        <br />
        Nguoi nam vung review, kien truc, va giao tiep
        se tro nen <strong style={{ color: theme.colors.text }}>gia tri hon</strong>, khong phai it hon.
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          marginTop: 48,
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {['Hieu AI', 'Kien tao he thong', 'Giao tiep tot', 'Chiu trach nhiem'].map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 + i * 0.08 }}
            style={{
              fontSize: theme.sizes.small,
              fontWeight: 700,
              color: theme.colors.accent,
              background: theme.colors.accentDim,
              border: `1px solid ${theme.colors.borderAccent}`,
              borderRadius: 999,
              padding: '6px 16px',
              letterSpacing: '0.04em',
            }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
