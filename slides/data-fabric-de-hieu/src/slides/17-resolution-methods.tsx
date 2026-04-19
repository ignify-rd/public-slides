import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, scaleIn } from '../lib/animations'

const methods = [
  {
    icon: '🔍',
    title: 'Phan tich Metadata (Lineage)',
    desc: 'No kiem tra xem du lieu nay den tu dau. He thong SQL chinh thuc thuong duoc may cham diem tin cay cao hon mot tep Excel nhap tay.',
    color: theme.colors.accent,
  },
  {
    icon: '📋',
    title: 'Ap dung Quy tac kinh doanh (Business Rules)',
    desc: 'Ban co the cai dat: "Neu co sai lech ve luong, luon uu tien du lieu tu he thong Ke toan". Quy tac nay duoc ap dung tu dong cho moi truy van.',
    color: '#7C3AED',
  },
  {
    icon: '🤖',
    title: 'Hoc may (AI/ML)',
    desc: 'AI quan sat lich su chinh sua. Neu no thay tep Excel thuong xuyen bi sai va da duoc sua lai nhieu lan, no se tu dong canh bao day la nguon du lieu "kem chat luong".',
    color: theme.colors.accentGreen,
  },
]

export function Slide17ResolutionMethods() {
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
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 70px',
      }}
    >
      {/* Left accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: `linear-gradient(180deg, ${theme.colors.accent} 0%, ${theme.colors.accentAlt} 100%)`,
          transformOrigin: 'top',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeInUp} style={{ marginBottom: 36 }}>
          <div
            style={{
              fontSize: theme.sizes.label,
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: theme.colors.accent,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Co che xu ly sai lech
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Cach Data Fabric xu ly sai lech
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {methods.map((method, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              style={{
                display: 'flex',
                gap: 20,
                background: theme.colors.bgCard,
                border: `1.5px solid ${theme.colors.border}`,
                borderRadius: 12,
                padding: '20px 24px',
                boxShadow: theme.colors.shadowCard,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 4,
                  background: method.color,
                }}
              />
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: `${method.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  flexShrink: 0,
                }}
              >
                {method.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: method.color,
                    marginBottom: 6,
                  }}
                >
                  {i + 1}. {method.title}
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: theme.colors.textMuted,
                    lineHeight: 1.65,
                  }}
                >
                  {method.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
