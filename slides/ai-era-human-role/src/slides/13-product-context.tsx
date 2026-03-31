import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide13ProductContext() {
  const skills = [
    {
      icon: '\ud83d\udd0d',
      title: 'Hi\u1ec3u nhu c\u1ea7u business',
      desc: 'Thu th\u1eadp y\xeau c\u1ea7u kh\xf4ng r\xf5 r\xe0ng, chuy\u1ec3n h\xf3a th\xe0nh context c\xf3 th\u1ec3 th\u1ef1c thi cho AI agents.',
    },
    {
      icon: '\ud83c\udfd7',
      title: 'Thi\u1ebft k\u1ebf AI workflow',
      desc: 'X\xe2y d\u1ef1ng pipeline AI agents, \u0111\u1ecbnh ngh\u0129a input/output v\xe0 constraint cho t\u1eebng b\u01b0\u1edbc.',
    },
    {
      icon: '\ud83d\udcac',
      title: 'Giao ti\u1ebfp ng\u01b0\u1eddi - ng\u01b0\u1eddi',
      desc: '\u0110\xe2m ph\xe1n, thuy\u1ebft ph\u1ee5c, x\xe2y d\u1ef1ng ni\u1ec1m tin - \u0111i\u1ec1u AI kh\xf4ng th\u1ec3 thay th\u1ebf trong t\u1ed5 ch\u1ee9c.',
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
          Context Engineering
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
          Human role ={' '}
          <span style={{ color: theme.colors.accent }}>
            c\u1ea7u n\u1ed1i gi\u1eefa nhu c\u1ea7u th\u1ef1c v\xe0 AI
          </span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            lineHeight: 1.7,
            maxWidth: 680,
            marginBottom: 32,
          }}
        >
          Con ng\u01b0\u1eddi kh\xf4ng c\xf2n vi\u1ebft code - m\xe0 thi\u1ebft k\u1ebf{' '}
          <em>h\u1ec7 th\u1ed1ng AI orchestration</em> ph\xf9 h\u1ee3p v\u1edbi nhu c\u1ea7u th\u1ef1c t\u1ebf.
          Ch\u1ea5t l\u01b0\u1ee3ng context quy\u1ebft \u0111\u1ecbnh ch\u1ea5t l\u01b0\u1ee3ng output c\u1ee7a AI.
        </motion.p>

        <div style={{ display: 'flex', gap: 20 }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                flex: 1,
                background: theme.colors.accentDim,
                border: `1px solid ${theme.colors.borderAccent}`,
                borderRadius: 12,
                padding: '22px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <div style={{ fontSize: '1.6rem' }}>{skill.icon}</div>
              <div
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 700,
                  color: theme.colors.text,
                  lineHeight: 1.3,
                }}
              >
                {skill.title}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.textMuted,
                  lineHeight: 1.55,
                }}
              >
                {skill.desc}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{
            marginTop: 28,
            textAlign: 'center',
            fontSize: theme.sizes.body,
            color: theme.colors.textDim,
            fontStyle: 'italic',
          }}
        >
          "Context is the new code"
        </motion.div>
      </motion.div>
    </div>
  )
}
