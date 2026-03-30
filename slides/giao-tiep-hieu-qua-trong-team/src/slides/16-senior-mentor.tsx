import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const dos = [
  'Hoi sau khi tu tim hieu - cho thay ban da no luc truoc',
  'Neu ro context va nhung gi da thu khi hoi',
  'Ghi chep lai cau tra loi - tranh hoi cung mot cau nhieu lan',
  'Cap nhat tien do cho mentor khong can doi ho hoi',
  'Cam on cu the: "Cam on, nhung dieu do giup minh hieu..."',
]

const donts = [
  'Hoi cau hoi qua mo khong co context: "Em khong hieu gi het"',
  'Im lang khi bi ket, ngai hoi vi so phien',
  'Nhan hang het ma khong phan hoi hay dat cau hoi lai',
  'Quen mat nhung gi da duoc chi dao, phai hoi lai',
]

export function Slide16SeniorMentor() {
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
        padding: '50px 80px',
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

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          Slide 16
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.heading,
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 28,
          }}
        >
          Giao tiep voi <span style={{ color: theme.colors.accent }}>senior / mentor</span>
        </motion.h2>

        <motion.div
          variants={containerFast}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
        >
          <motion.div variants={fadeInUp}>
            <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.positive, marginBottom: 12 }}>
              Nen lam
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {dos.map((tip, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    background: 'white',
                    border: `1px solid ${theme.colors.border}`,
                    borderLeft: `3px solid ${theme.colors.positive}`,
                    borderRadius: 8,
                    padding: '10px 14px',
                  }}
                >
                  <span style={{ fontSize: theme.sizes.small, color: theme.colors.text, lineHeight: 1.5 }}>
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.negative, marginBottom: 12 }}>
              Tranh lam
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {donts.map((tip, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    background: 'white',
                    border: `1px solid ${theme.colors.border}`,
                    borderLeft: `3px solid ${theme.colors.negative}`,
                    borderRadius: 8,
                    padding: '10px 14px',
                  }}
                >
                  <span style={{ fontSize: theme.sizes.small, color: theme.colors.text, lineHeight: 1.5 }}>
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
