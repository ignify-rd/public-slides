import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const keyTakeaways = [
  'Lang nghe de hieu, khong chi de tra loi',
  'Bao som khi co van de - dung doi den khi "qua muon"',
  'Viet ro rang: BLUF, context, action needed',
  'Xac nhan lai de tranh hieu lam - dac biet sau meeting',
  'Code review la ve code, khong phai ve con nguoi',
]

const actions = [
  'Chuan bi kip thoi cho standup ngay mai',
  'Reply tat ca comment PR con boc trong hom nay',
  'Dat cau hoi dung cach cho blocker hien tai',
]

export function Slide20TongKet() {
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
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: theme.backgrounds.grid,
          backgroundSize: '60px 60px',
          opacity: 0.8,
        }}
      />

      {/* Left accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: theme.colors.accent,
          transformOrigin: 'top',
          zIndex: 2,
        }}
      />

      {/* Left panel */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '0 0 55%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 40px 60px 80px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Slide 20 - Tong ket
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 10,
            lineHeight: 1.15,
          }}
        >
          5 dieu can <span style={{ color: theme.colors.accent }}>nho mai</span>
        </motion.h2>

        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 24 }} />

        <motion.div
          variants={containerFast}
          style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
        >
          {keyTakeaways.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              style={{
                display: 'flex',
                gap: 14,
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontSize: theme.sizes.small,
                  fontWeight: 800,
                  color: 'white',
                  background: theme.colors.accent,
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                {i + 1}
              </span>
              <span style={{ fontSize: theme.sizes.body, color: theme.colors.text, lineHeight: 1.5 }}>
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right panel */}
      <div
        style={{
          flex: '0 0 45%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 60px 60px 32px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            top: '10%',
            bottom: '10%',
            width: 1,
            background: 'rgba(37,99,235,0.2)',
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 12,
            padding: '24px',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: theme.sizes.small,
              fontWeight: 800,
              color: theme.colors.accent,
              marginBottom: 14,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Hanh dong ngay hom nay
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {actions.map((action, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ color: theme.colors.accent, fontWeight: 700, flexShrink: 0 }}>-</span>
                <span style={{ fontSize: theme.sizes.small, color: theme.colors.text, lineHeight: 1.5 }}>
                  {action}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            background: 'white',
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 12,
            padding: '20px 24px',
            boxShadow: '0 2px 10px rgba(17,24,39,0.06)',
          }}
        >
          <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.7, fontStyle: 'italic' }}>
            "Giao tiep tot khong phai la noi nhieu. Do la kha nang khien nguoi khac hieu minh va minh hieu nguoi khac - mot each ro rang, nhanh chong, hieu qua."
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            position: 'absolute',
            right: 48,
            bottom: 40,
            fontSize: 'clamp(5rem, 10vw, 9rem)',
            fontWeight: 800,
            color: 'rgba(37, 99, 235, 0.06)',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          20
        </motion.div>
      </div>
    </div>
  )
}
