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
        K\u1ebft lu\u1eadn
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
        Th\xedch nghi,
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
        \u0111\u1eebng{' '}
        <span style={{ color: theme.colors.negative }}>bi\u1ebfn m\u1ea5t.</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        style={{
          marginTop: 40,
          fontSize: theme.sizes.body,
          color: theme.colors.textMuted,
          maxWidth: 620,
          lineHeight: 1.7,
        }}
      >
        Vai tr\xf2 dev thu\u1ea7n t\xfay s\u1ebd d\u1ea7n bi\u1ebfn m\u1ea5t. Ai kh\xf4ng n\u1eafm t\u01b0 duy s\u1ea3n ph\u1ea9m,
        context engineering, v\xe0 giao ti\u1ebfp s\u1ebd b\u1ecb thay th\u1ebf -{' '}
        <strong style={{ color: theme.colors.text }}>
          kh\xf4ng ph\u1ea3i b\u1edfi AI, m\xe0 b\u1edfi developer kh\xe1c
        </strong>{' '}
        l\xe0m vi\u1ec7c t\u1ed1t h\u01a1n v\u1edbi AI.
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          marginTop: 40,
          display: 'flex',
          gap: 14,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {[
          'Context engineering',
          'T\u01b0 duy s\u1ea3n ph\u1ea9m',
          'AI orchestration',
          'Giao ti\u1ebfp',
        ].map((tag, i) => (
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
