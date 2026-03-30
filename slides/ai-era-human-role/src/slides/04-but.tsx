import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide04But() {
  const issues = [
    {
      title: 'Hallucination',
      desc: 'AI bịa API không ton tai. Stanford: 52% Copilot suggestions co loi bao mat tiềm ẩn.',
    },
    {
      title: 'Wrong context',
      desc: 'AI không biet business logic, lich su thay doi, hay constraint cua he thong.',
    },
    {
      title: 'Cascading bugs',
      desc: 'Bug do AI tao ra kho debug hon - dev khong hieu code minh merge.',
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
          background: `linear-gradient(90deg, ${theme.colors.negative}, transparent)`,
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
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            fontWeight: 800,
            color: theme.colors.negative,
            lineHeight: 1,
            marginBottom: 16,
          }}
        >
          Nhung...
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
            fontWeight: 700,
            color: theme.colors.textMuted,
            marginBottom: 40,
          }}
        >
          Nang suat cao hon khong co nghia la it loi hon.
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {issues.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
                background: 'rgba(248, 113, 113, 0.05)',
                border: '1px solid rgba(248, 113, 113, 0.2)',
                borderRadius: 10,
                padding: '16px 20px',
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: theme.colors.negative,
                  flexShrink: 0,
                  marginTop: 6,
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: theme.sizes.body,
                    fontWeight: 700,
                    color: theme.colors.negative,
                    marginBottom: 4,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: theme.sizes.small,
                    color: theme.colors.textMuted,
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: 96,
          fontSize: theme.sizes.small,
          color: theme.colors.textDim,
          fontStyle: 'italic',
        }}
      >
        Nguon: Stanford HAI (2023) - "Do GitHub Copilot introduce bugs?"
      </motion.div>
    </div>
  )
}
