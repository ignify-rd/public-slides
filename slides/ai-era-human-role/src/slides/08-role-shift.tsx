import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide08RoleShift() {
  const roles = [
    {
      from: 'Author',
      to: 'Reviewer',
      desc: 'Kiem tra AI output, phan tich loi va edge case',
    },
    {
      from: 'Coder',
      to: 'Architect',
      desc: 'Thiet ke he thong, quyet dinh phan chia module',
    },
    {
      from: 'Implementer',
      to: 'Prompt engineer',
      desc: 'Dien dat yeu cau chinh xac de AI sinh ra dung code',
    },
  ]

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
        paddingLeft: 96,
        paddingRight: 96,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
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

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
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
          Vai tro thay doi
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: theme.colors.text,
            marginBottom: 40,
          }}
        >
          Tu <span style={{ color: theme.colors.textMuted }}>nguoi viet</span>{' '}
          sang{' '}
          <span style={{ color: theme.colors.accent }}>nguoi kien tao</span>
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {roles.map((role, i) => (
            <motion.div
              key={role.from}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 10,
                padding: '18px 24px',
              }}
            >
              <span
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 700,
                  color: theme.colors.textMuted,
                  minWidth: 120,
                  textDecoration: 'line-through',
                  textDecorationColor: 'rgba(255,255,255,0.2)',
                }}
              >
                {role.from}
              </span>
              <span
                style={{
                  fontSize: theme.sizes.body,
                  color: theme.colors.textDim,
                }}
              >
                →
              </span>
              <span
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 700,
                  color: theme.colors.accent,
                  minWidth: 160,
                }}
              >
                {role.to}
              </span>
              <span
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.textMuted,
                  lineHeight: 1.4,
                }}
              >
                {role.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
