import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, scaleIn } from '../lib/animations'

const challenges = [
  {
    icon: '🏢',
    title: 'Su co lap du lieu (Data Silos)',
    desc: 'Du lieu nam rai rac o nhieu phong ban, ung dung khac nhau va khong "noi chuyen" duoc voi nhau.',
    color: '#DC2626',
  },
  {
    icon: '☁',
    title: 'Moi truong phuc tap (Hybrid & Multi-cloud)',
    desc: 'Du lieu vua o duoi server cong ty (On-premise), vua o tren nhieu nen tang may (AWS, Azure, Google Cloud), gay kho khan khi muon tong hop.',
    color: '#D97706',
  },
  {
    icon: '⏱',
    title: 'Quy trinh thu cong & Cham tre',
    desc: 'Viec lay du lieu mat vai tuan vi phai cho IT viet code, chay ETL (chiet xuat, bien doi, nap) thu cong.',
    color: '#7C3AED',
  },
  {
    icon: '🌑',
    title: 'Du lieu "toi" (Dark Data)',
    desc: 'Doanh nghiep co rat nhieu du lieu nhung khong biet minh dang co gi, du lieu do co dang tin hay khong (thieu Metadata).',
    color: '#0F172A',
  },
  {
    icon: '🔒',
    title: 'Rui ro bao mat',
    desc: 'Cang nhieu nguon du lieu thi cang kho kiem soat ai dang xem cai gi, de vi pham quy dinh phap luat (nhu GDPR).',
    color: '#059669',
  },
]

export function Slide05Challenges() {
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
        position: 'relative',
        overflow: 'hidden',
        padding: '36px 70px',
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeInUp} style={{ marginBottom: 32 }}>
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
            Boi canh
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
            Kho khan chung cua viec quan ly du lieu
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 14,
          }}
        >
          {challenges.map((ch, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              style={{
                background: theme.colors.bgCard,
                border: `1.5px solid ${theme.colors.border}`,
                borderRadius: 12,
                padding: '18px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                boxShadow: theme.colors.shadowCard,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: ch.color,
                  opacity: 0.8,
                }}
              />
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: `${ch.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                }}
              >
                {ch.icon}
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: theme.colors.text,
                  lineHeight: 1.3,
                }}
              >
                {ch.title}
              </div>
              <div
                style={{
                  fontSize: '0.65rem',
                  color: theme.colors.textMuted,
                  lineHeight: 1.55,
                }}
              >
                {ch.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
