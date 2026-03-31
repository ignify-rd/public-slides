import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide12Agents() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.default,
        fontFamily: theme.fonts.family,
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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

      {/* Left content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '0 0 58%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 96,
          paddingRight: 48,
        }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 28,
          }}
        >
          AI Agents: th\u1ef1c t\u1ebf
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.6rem, 3.2vw, 2.8rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: theme.colors.text,
            marginBottom: 24,
          }}
        >
          V\u1edbi \u0111\u1ee7 context, AI agent c\xf3 th\u1ec3 x\u1eed l\xfd{' '}
          <span style={{ color: theme.colors.accent }}>b\u1ea5t k\u1ef3 t\xe1c v\u1ee5 k\u1ef9 thu\u1eadt n\xe0o</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            lineHeight: 1.7,
            maxWidth: 430,
            marginBottom: 24,
          }}
        >
          SWE-bench Verified \u0111\xe1nh gi\xe1 kh\u1ea3 n\u0103ng AI gi\u1ea3i quy\u1ebft GitHub issues th\u1ef1c t\u1ebf.
          N\u0103m 2024, AI agents \u0111\xe3 v\u01b0\u1ee3t ng\u01b0\u1ee1ng 49% - t\u1ef7 l\u1ec7 ti\u1ebfp t\u1ee5c t\u0103ng nhanh m\u1ed7i qu\xfd.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{
            background: 'rgba(248, 113, 113, 0.07)',
            border: '1px solid rgba(248, 113, 113, 0.25)',
            borderRadius: 10,
            padding: '14px 20px',
            fontSize: theme.sizes.body,
            color: theme.colors.text,
            lineHeight: 1.6,
            maxWidth: 430,
            marginBottom: 20,
          }}
        >
          Ngay c\u1ea3{' '}
          <strong style={{ color: theme.colors.negative }}>
            system architecture v\xe0 solution design
          </strong>{' '}
          s\u1ebd kh\xf4ng c\xf2n l\xe0 r\xe0o c\u1ea3n l\xe2u d\xe0i cho AI.
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.small,
            color: theme.colors.textDim,
            fontStyle: 'italic',
          }}
        >
          Ngu\u1ed3n: SWE-bench Verified (Anthropic, 2024); GitHub Universe 2024
        </motion.div>
      </motion.div>

      {/* Right - big stat */}
      <div
        style={{
          flex: '0 0 42%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'absolute',
            left: 0,
            top: '15%',
            bottom: '15%',
            width: 1,
            background: 'rgba(67, 97, 238, 0.3)',
            transformOrigin: 'top',
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            paddingLeft: 40,
          }}
        >
          <div
            style={{
              fontSize: 'clamp(4.5rem, 9vw, 8rem)',
              fontWeight: 800,
              color: theme.colors.accent,
              lineHeight: 1,
            }}
          >
            49%
          </div>
          <div
            style={{
              fontSize: theme.sizes.small,
              color: theme.colors.textMuted,
              textAlign: 'center',
              maxWidth: 200,
              lineHeight: 1.5,
            }}
          >
            t\xe1c v\u1ee5 k\u1ef9 thu\u1eadt th\u1ef1c t\u1ebf AI agent t\u1ef1 gi\u1ea3i quy\u1ebft
            <br />
            <span style={{ color: theme.colors.textDim, fontStyle: 'italic' }}>
              (SWE-bench Verified, 2024)
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{
              marginTop: 24,
              background: 'rgba(67, 97, 238, 0.08)',
              border: '1px solid rgba(67, 97, 238, 0.2)',
              borderRadius: 8,
              padding: '10px 16px',
              fontSize: theme.sizes.small,
              color: theme.colors.textMuted,
              textAlign: 'center',
              maxWidth: 200,
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: theme.colors.text, fontWeight: 700 }}>0%</span> n\u0103m 2021{' '}
            -{' '}
            <span style={{ color: theme.colors.accent, fontWeight: 700 }}>49%</span> n\u0103m 2024
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
