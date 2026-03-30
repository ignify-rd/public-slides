import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const mistakes = [
  {
    mistake: 'Im lặng vì sợ phiền',
    fix: 'Hỏi là biểu hiện của sự chủ động, không phải yếu kém',
  },
  {
    mistake: 'Giữ blocker "chờ tự giải quyết"',
    fix: 'Quy tắc 15 phút: tự debug rồi báo ngay nếu chưa xong',
  },
  {
    mistake: 'Báo "Xong rồi" khi chưa test',
    fix: '"Done" = làm xong + test + review ready',
  },
  {
    mistake: 'Không đọc kỹ yêu cầu trước khi hỏi',
    fix: 'Đọc ticket, đọc doc, rồi hỏi - tránh hỏi những gì đã có sẵn',
  },
  {
    mistake: 'Viết message dài dòng, không có point',
    fix: 'BLUF: kết luận trước, chi tiết sau, tối đa 5 dòng',
  },
  {
    mistake: 'Không confirm sau khi nhận task',
    fix: 'Lặp lại yêu cầu bằng lời của mình để xác nhận hiểu đúng',
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
          Những lỗi giao tiếp <span style={{ color: theme.colors.negative }}>phổ biến</span> của junior
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
                <span style={{ opacity: 0.7 }}>Lỗi:</span> {item.mistake}
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
