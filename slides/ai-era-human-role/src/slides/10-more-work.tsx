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
            marginBottom: 24,
          }}
        >
          Hi\u1ec3u l\u1ea7m ph\u1ed5 bi\u1ebfn
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
          AI t\u0103ng output -{' '}
          <span style={{ color: theme.colors.warning }}>tr\xe1ch nhi\u1ec7m kh\xf4ng gi\u1ea3m</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.small,
            color: theme.colors.textDim,
            marginBottom: 24,
            fontStyle: 'italic',
          }}
        >
          McKinsey Global Institute (2023): AI c\xf3 th\u1ec3 t\u1ef1 \u0111\u1ed9ng h\xf3a 60-70% th\u1eddi gian l\xe0m vi\u1ec7c c\u1ee7a knowledge workers - nh\u01b0ng \u0111i\u1ec1u n\xe0y t\u1ea1o ra nhi\u1ec1u s\u1ea3n ph\u1ea9m h\u01a1n, kh\xf4ng \xedt vi\u1ec7c l\xe0m h\u01a1n
        </motion.p>

        <div style={{ display: 'flex', gap: 28 }}>
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
              T\u0103ng
            </div>
            {[
              's\u1ed1 d\xf2ng code \u0111\u01b0\u1ee3c t\u1ea1o ra',
              's\u1ed1 feature \u0111\u01b0\u1ee3c deliver',
              's\u1ed1 PR \u0111\u01b0\u1ee3c m\u1edf',
              'k\u1ef3 v\u1ecdng v\u1ec1 t\u01b0 duy s\u1ea3n ph\u1ea9m',
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
                  &#8593;
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
              Kh\xf4ng thay \u0111\u1ed5i
            </div>
            {[
              'Tr\xe1ch nhi\u1ec7m v\u1edbi bug production',
              'Y\xeau c\u1ea7u khi on-call',
              'Security v\xe0 compliance',
              'Tr\xe1ch nhi\u1ec7m v\u1edbi product outcome',
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{
            marginTop: 24,
            background: 'rgba(251, 191, 36, 0.08)',
            border: '1px solid rgba(251, 191, 36, 0.25)',
            borderRadius: 10,
            padding: '14px 20px',
            fontSize: theme.sizes.body,
            color: theme.colors.text,
            lineHeight: 1.6,
          }}
        >
          N\u0103ng su\u1ea5t t\u0103ng c\xf3 ngh\u0129a l\xe0 nhi\u1ec1u s\u1ea3n ph\u1ea9m h\u01a1n - m\u1ed7i developer ph\u1ea3i tr\u1edf th\xe0nh{' '}
          <strong style={{ color: theme.colors.warning }}>full-time product owner</strong>.
        </motion.div>
      </motion.div>
    </div>
  )
}
