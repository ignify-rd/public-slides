import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide07Bottleneck() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.default,
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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
          background: `linear-gradient(90deg, transparent, ${theme.colors.warning}, transparent)`,
          transformOrigin: 'center',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ maxWidth: 800 }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: theme.colors.warning,
            textTransform: 'uppercase',
            marginBottom: 40,
          }}
        >
          Bottleneck moi
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: theme.colors.text,
            marginBottom: 24,
          }}
        >
          Doc va kiem tra AI code
          <br />
          <span style={{ color: theme.colors.warning }}>mat thoi gian hon la viet.</span>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            lineHeight: 1.7,
            maxWidth: 620,
            margin: '0 auto 40px',
          }}
        >
          Khi AI tao ra 10x nhieu code hon, khong phai la "review nhanh hon" -
          ma la review nhieu hon, sau hon. Developer khong chet vi viet code,
          ma chet vi khong du thoi gian kiem tra.
        </motion.div>

        {/* Before / After */}
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
          {[
            { label: 'Truoc AI', value: 'Viet > Review', color: theme.colors.textMuted },
            { label: 'Sau AI', value: 'Review > Viet', color: theme.colors.warning },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid rgba(255,255,255,0.1)`,
                borderRadius: 12,
                padding: '20px 32px',
                minWidth: 200,
              }}
            >
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.textDim,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: 8,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 700,
                  color: item.color,
                }}
              >
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
