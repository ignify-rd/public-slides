import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const mistakes = [
  {
    mistake: 'Im lang vi so phien',
    fix: 'Hoi la bieu hien cua su chu dong, khong phai yeu kem',
  },
  {
    mistake: 'Giu blocker "cho tu giai quyet"',
    fix: 'Quy tac 15 phut: tu debug roi bao ngay neu chua xong',
  },
  {
    mistake: 'Bao "Xong roi" khi chua test',
    fix: '"Done" = lam xong + test + review ready',
  },
  {
    mistake: 'Khong doc ki yeu cau truoc khi hoi',
    fix: 'Doc ticket, doc doc, roi hoi - tranh hoi nhung gi da co san',
  },
  {
    mistake: 'Viet message dai dong, khong co point',
    fix: 'BLUF: ket luan truoc, chi tiet sau, toi da 5 dong',
  },
  {
    mistake: 'Khong confirm sau khi nhan task',
    fix: 'Lap lai yeu cau bang loi cua minh de xac nhan hieu dung',
  },
]

export function Slide18LoiPhoBien() {
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
          Slide 18
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.heading,
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 24,
          }}
        >
          Nhung loi giao tiep <span style={{ color: theme.colors.negative }}>pho bien</span> cua junior
        </motion.h2>

        <motion.div
          variants={containerFast}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
        >
          {mistakes.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              style={{
                background: 'white',
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 10,
                padding: '14px 16px',
                boxShadow: '0 1px 6px rgba(17,24,39,0.04)',
              }}
            >
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.negative,
                  fontWeight: 600,
                  marginBottom: 6,
                  display: 'flex',
                  gap: 6,
                  alignItems: 'center',
                }}
              >
                <span style={{ opacity: 0.7 }}>Loi:</span> {item.mistake}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.text,
                  lineHeight: 1.5,
                  paddingLeft: 12,
                  borderLeft: `2px solid ${theme.colors.positive}`,
                }}
              >
                {item.fix}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
