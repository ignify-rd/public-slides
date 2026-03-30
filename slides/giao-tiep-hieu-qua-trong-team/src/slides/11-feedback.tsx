import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const giving = [
  'Noi ve hanh dong, khong noi ve con nguoi',
  'Cu the, co vi du thuc te - tranh chung chung',
  'De xuat giai phap thay vi chi chi trich',
  'Chon thoi diem phu hop, khong feedback truoc mat nhieu nguoi',
]

const receiving = [
  'Lang nghe den cung, khong bien minh de cam on',
  'Khong "defend" ngay - hieu truoc, phan hoi sau',
  'Dat cau hoi lam ro neu feedback khong cu the',
  'Cam on - du ban co dong y hay khong',
]

export function Slide11Feedback() {
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
          Slide 11
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.heading,
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 32,
          }}
        >
          Nhan va dua <span style={{ color: theme.colors.accent }}>feedback xay dung</span>
        </motion.h2>

        <motion.div
          variants={containerFast}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
        >
          <motion.div variants={fadeInUp}>
            <div
              style={{
                fontSize: theme.sizes.small,
                fontWeight: 700,
                color: theme.colors.accent,
                marginBottom: 14,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Khi dua feedback
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {giving.map((tip, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                    background: 'white',
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: 8,
                    padding: '12px 16px',
                    boxShadow: '0 1px 4px rgba(17,24,39,0.04)',
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: theme.colors.accent,
                      marginTop: 6,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: theme.sizes.small, color: theme.colors.text, lineHeight: 1.5 }}>
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div
              style={{
                fontSize: theme.sizes.small,
                fontWeight: 700,
                color: '#d97706',
                marginBottom: 14,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Khi nhan feedback
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {receiving.map((tip, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                    background: 'white',
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: 8,
                    padding: '12px 16px',
                    boxShadow: '0 1px 4px rgba(17,24,39,0.04)',
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#d97706',
                      marginTop: 6,
                      flexShrink: 0,
                    }}
                  />
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
