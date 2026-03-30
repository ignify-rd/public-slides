import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide10MoreWork() {
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
          background: `linear-gradient(90deg, ${theme.colors.warning}, transparent)`,
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
            color: theme.colors.warning,
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          Hieu lam pho bien
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
          AI tang output -{' '}
          <span style={{ color: theme.colors.warning }}>trach nhiem khong giam</span>
        </motion.h2>

        <div style={{ display: 'flex', gap: 32 }}>
          <motion.div
            variants={fadeInUp}
            style={{ flex: 1 }}
          >
            <div
              style={{
                fontSize: theme.sizes.small,
                fontWeight: 700,
                color: theme.colors.textMuted,
                marginBottom: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Tang
            </div>
            {[
              'So dong code duoc tao ra',
              'So feature duoc deliver',
              'So PR duoc mo',
              'So edge case tiềm an',
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'rgba(52, 211, 153, 0.15)',
                    border: '1px solid rgba(52, 211, 153, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: theme.colors.positive,
                    flexShrink: 0,
                  }}
                >
                  ↑
                </div>
                <span style={{ fontSize: theme.sizes.body, color: theme.colors.textMuted }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              width: 1,
              background: 'rgba(255,255,255,0.08)',
              transformOrigin: 'top',
            }}
          />

          <motion.div
            variants={fadeInUp}
            style={{ flex: 1 }}
          >
            <div
              style={{
                fontSize: theme.sizes.small,
                fontWeight: 700,
                color: theme.colors.textMuted,
                marginBottom: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Khong thay doi
            </div>
            {[
              'Trach nhiem voi bug production',
              'Yeu cau khi on-call',
              'Security va compliance',
              'Kỳ vong tu stakeholder',
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'rgba(251, 191, 36, 0.12)',
                    border: '1px solid rgba(251, 191, 36, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: theme.colors.warning,
                    flexShrink: 0,
                  }}
                >
                  =
                </div>
                <span style={{ fontSize: theme.sizes.body, color: theme.colors.textMuted }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
