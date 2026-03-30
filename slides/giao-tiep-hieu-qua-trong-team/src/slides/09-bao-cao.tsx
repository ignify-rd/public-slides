import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const levels = [
  {
    signal: 'Xanh',
    color: theme.colors.positive,
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.25)',
    desc: 'Đúng track, không có vấn đề. Cập nhật ngắn trong standup là đủ.',
  },
  {
    signal: 'Vàng',
    color: '#d97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.25)',
    desc: 'Có rủi ro, có thể trễ hạn. Báo ngay cho lead / PM, đề xuất giải pháp.',
  },
  {
    signal: 'Đỏ',
    color: theme.colors.negative,
    bg: 'rgba(220,38,38,0.07)',
    border: 'rgba(220,38,38,0.2)',
    desc: 'Đã bị block, không thể tự giải quyết. Escalate ngay, không chờ thêm.',
  },
]

export function Slide09BaoCao() {
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
          Slide 09
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.heading,
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 8,
          }}
        >
          Báo cáo tiến độ & <span style={{ color: theme.colors.accent }}>escalation đúng lúc</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            marginBottom: 32,
            maxWidth: 700,
          }}
        >
          Quy tắc vàng: <strong>không có tin xấu nào là tin xấu nếu được báo sớm.</strong> Im lặng mới là vấn đề.
        </motion.p>

        <motion.div
          variants={containerFast}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          {levels.map((lv) => (
            <motion.div
              key={lv.signal}
              variants={fadeInUp}
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'center',
                background: lv.bg,
                border: `1px solid ${lv.border}`,
                borderLeft: `4px solid ${lv.color}`,
                borderRadius: 10,
                padding: '18px 24px',
              }}
            >
              <div
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 800,
                  color: lv.color,
                  width: 60,
                  flexShrink: 0,
                }}
              >
                {lv.signal}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.body,
                  color: theme.colors.text,
                  lineHeight: 1.5,
                }}
              >
                {lv.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: 24,
            padding: '14px 20px',
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 8,
            fontSize: theme.sizes.small,
            color: theme.colors.text,
          }}
        >
          <strong style={{ color: theme.colors.accent }}>Lỗi junior hay gặp:</strong> Giữ blocker trong lòng vì sợ bị đánh giá "chậm". Thực tế: escalate sớm = phản chiếu tích cực.
        </motion.div>
      </motion.div>
    </div>
  )
}
