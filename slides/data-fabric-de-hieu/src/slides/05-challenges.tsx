import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, scaleIn } from '../lib/animations'

const challenges = [
  {
    icon: '🏢',
    title: 'Sự cô lập dữ liệu (Data Silos)',
    desc: 'Dữ liệu nằm rải rác ở nhiều phòng ban, ứng dụng khác nhau và không "nói chuyện" được với nhau.',
    color: '#DC2626',
  },
  {
    icon: '☁',
    title: 'Môi trường phức tạp (Hybrid & Multi-cloud)',
    desc: 'Dữ liệu vừa ở dưới server công ty (On-premise), vừa ở trên nhiều nền tảng mây (AWS, Azure, Google Cloud), gây khó khăn khi muốn tổng hợp.',
    color: '#D97706',
  },
  {
    icon: '⏱',
    title: 'Quy trình thủ công & Chậm trễ',
    desc: 'Việc lấy dữ liệu mất vài tuần vì phải chờ IT viết code, chạy ETL (chiết xuất, biến đổi, nạp) thủ công.',
    color: '#7C3AED',
  },
  {
    icon: '🌑',
    title: 'Dữ liệu "tối" (Dark Data)',
    desc: 'Doanh nghiệp có rất nhiều dữ liệu nhưng không biết mình đang có gì, dữ liệu đó có đáng tin hay không (thiếu Metadata).',
    color: '#0F172A',
  },
  {
    icon: '🔒',
    title: 'Rủi ro bảo mật',
    desc: 'Càng nhiều nguồn dữ liệu thì càng khó kiểm soát ai đang xem cái gì, dễ vi phạm quy định pháp luật (như GDPR).',
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
            Bối cảnh
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
            Khó khăn chung của việc quản lý dữ liệu
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
