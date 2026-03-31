import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide08RoleShift() {
  const roles = [
    {
      from: 'Author',
      to: 'Reviewer',
      desc: 'Ki\u1ec3m tra AI output, ph\u00e2n t\u00edch l\u1ed7i v\u00e0 edge case',
    },
    {
      from: 'Coder',
      to: 'Architect',
      desc: 'Thi\u1ebft k\u1ebf h\u1ec7 th\u1ed1ng AI orchestration, quy\u1ebft \u0111\u1ecbnh workflow',
    },
    {
      from: 'Implementer',
      to: 'Context engineer',
      desc: 'X\u00e2y d\u1ef1ng context: business rules, constraints, intent cho AI',
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
            marginBottom: 24,
          }}
        >
          Vai tr\u00f2 thay \u0111\u1ed5i
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: theme.colors.text,
            marginBottom: 12,
          }}
        >
          T\u1eeb{' '}
          <span style={{ color: theme.colors.textMuted }}>ng\u01b0\u1eddi vi\u1ebft code</span>{' '}
          sang{' '}
          <span style={{ color: theme.colors.accent }}>ng\u01b0\u1eddi ki\u1ebfn t\u1ea1o h\u1ec7 th\u1ed1ng AI</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.small,
            color: theme.colors.textDim,
            marginBottom: 28,
            fontStyle: 'italic',
          }}
        >
          WEF Future of Jobs 2025: 170 tri\u1ec7u vi\u1ec7c l\u00e0m m\u1edbi s\u1ebd xu\u1ea5t hi\u1ec7n, chuy\u1ec3n d\u1ecbch m\u1ea1nh v\u1ec1 AI orchestration v\u00e0 product roles
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
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
                padding: '16px 24px',
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
              <span style={{ fontSize: theme.sizes.body, color: theme.colors.textDim }}>
                -&gt;
              </span>
              <span
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 700,
                  color: theme.colors.accent,
                  minWidth: 180,
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
