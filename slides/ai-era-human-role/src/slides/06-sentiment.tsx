import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide06Sentiment() {
  const quotes = [
    {
      text: '"I spend more time reviewing AI suggestions than I used to spend writing the code."',
      source: 'r/ExperiencedDevs, 2024',
    },
    {
      text: '"AI increased my output but also my bug count. Review time doubled."',
      source: 'Stack Overflow Developer Survey 2024',
    },
  ]

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
          Tin hieu tu cong dong
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            color: theme.colors.text,
            marginBottom: 40,
          }}
        >
          Dev danh nhieu thoi gian hon
          <br />
          <span style={{ color: theme.colors.accent }}>review AI output</span>
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}
              style={{
                borderLeft: `3px solid ${theme.colors.accent}`,
                paddingLeft: 24,
                paddingTop: 8,
                paddingBottom: 8,
              }}
            >
              <div
                style={{
                  fontSize: theme.sizes.body,
                  color: theme.colors.textMuted,
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: 8,
                }}
              >
                {q.text}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.textDim,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                - {q.source}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: 96,
          fontSize: theme.sizes.small,
          color: theme.colors.textDim,
          fontStyle: 'italic',
        }}
      >
        Nguon: Stack Overflow Dev Survey 2024, Reddit r/ExperiencedDevs
      </motion.div>
    </div>
  )
}
