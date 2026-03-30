import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const scenarios = [
  {
    situation: 'Sau meeting',
    action: 'Gửi summary qua email/Slack: "Để mình xác nhận lại: các điểm đã thống nhất là..."',
  },
  {
    situation: 'Nhận task mới',
    action: 'Lặp lại yêu cầu bằng lời của mình trước khi bắt đầu làm để kiểm tra hiểu đúng chưa',
  },
  {
    situation: 'Giao tiếp bất đồng bộ',
    action: 'Nếu không chắc, hỏi thêm: "Mình hiểu là X - bạn xác nhận được không?"',
  },
  {
    situation: 'Khi biết rẽ quan điểm',
    action: 'Chuyển sang sync ngay: "Hãy có 5 phút call để hiểu rõ hơn" thay vì chat qua lại mãi',
  },
]

export function Slide12HieuLam() {
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
          Slide 12
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
          Tránh hiểu lầm - <span style={{ color: theme.colors.accent }}>xác nhận lại thông tin</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            marginBottom: 28,
          }}
        >
          Hiểu lầm xảy ra thường xuyên - vấn đề không phải là hiểu lầm mà là không kiểm tra lại để phát hiện sớm.
        </motion.p>

        <motion.div
          variants={containerFast}
          style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          {scenarios.map((sc, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 20,
                alignItems: 'center',
                background: 'white',
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 10,
                padding: '16px 20px',
                boxShadow: '0 1px 6px rgba(17,24,39,0.04)',
              }}
            >
              <div
                style={{
                  fontSize: theme.sizes.small,
                  fontWeight: 700,
                  color: theme.colors.accent,
                  background: theme.colors.accentDim,
                  padding: '6px 12px',
                  borderRadius: 6,
                  textAlign: 'center',
                }}
              >
                {sc.situation}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.text,
                  lineHeight: 1.5,
                }}
              >
                {sc.action}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
