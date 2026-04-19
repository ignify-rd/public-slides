import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, scaleIn } from '../lib/animations'

const methods = [
  {
    icon: '🔍',
    title: 'Phân tích Metadata (Lineage)',
    desc: 'Nó kiểm tra xem dữ liệu này đến từ đâu. Hệ thống SQL chính thức thường được máy chấm điểm tin cậy cao hơn một tệp Excel nhập tay.',
    color: theme.colors.accent,
  },
  {
    icon: '📋',
    title: 'Áp dụng Quy tắc kinh doanh (Business Rules)',
    desc: 'Bạn có thể cài đặt: "Nếu có sai lệch về lương, luôn ưu tiên dữ liệu từ hệ thống Kế toán". Quy tắc này được áp dụng tự động cho mọi truy vấn.',
    color: '#7C3AED',
  },
  {
    icon: '🤖',
    title: 'Học máy (AI/ML)',
    desc: 'AI quan sát lịch sử chỉnh sửa. Nếu nó thấy tệp Excel thường xuyên bị sai và đã được sửa lại nhiều lần, nó sẽ tự động cảnh báo đây là nguồn dữ liệu "kém chất lượng".',
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
            Cơ chế xử lý sai lệch
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
            Cách Data Fabric xử lý sai lệch
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
