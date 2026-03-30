import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const good = [
  '"Mình hiểu requirement này là X - bạn xác nhận được không?"',
  '"Mình đang bị kẹt ở bước Y, bạn có thể cho mình biết cách tiếp cận không?"',
  '"Deadline này có flexible không nếu gặp vấn đề phát sinh?"',
]

const bad = [
  '"Làm thế nào?" (quá mơ, không có context)',
  '"Nó bị lỗi rồi" (không mô tả rõ lỗi gì, ở đâu)',
  '"OK" (không xác nhận mình hiểu đúng hay chưa)',
]

export function Slide05DatCauHoi() {
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
          Slide 05
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
          Kỹ năng <span style={{ color: theme.colors.accent }}>đặt câu hỏi đúng</span>
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
                color: theme.colors.positive,
                marginBottom: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span>+</span> Câu hỏi tốt
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {good.map((q, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    border: `1px solid rgba(5,150,105,0.25)`,
                    borderLeft: `3px solid ${theme.colors.positive}`,
                    borderRadius: 8,
                    padding: '12px 16px',
                    fontSize: theme.sizes.small,
                    color: theme.colors.text,
                    lineHeight: 1.5,
                  }}
                >
                  {q}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div
              style={{
                fontSize: theme.sizes.small,
                fontWeight: 700,
                color: theme.colors.negative,
                marginBottom: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span>-</span> Câu hỏi nên tránh
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {bad.map((q, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    border: `1px solid rgba(220,38,38,0.2)`,
                    borderLeft: `3px solid ${theme.colors.negative}`,
                    borderRadius: 8,
                    padding: '12px 16px',
                    fontSize: theme.sizes.small,
                    color: theme.colors.text,
                    lineHeight: 1.5,
                  }}
                >
                  {q}
                </div>
              ))}
            </div>
          </motion.div>
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
          <strong style={{ color: theme.colors.accent }}>Công thức đặt câu hỏi tốt:</strong> Bối cảnh + Điều mình đã thử + Kết quả mong muốn = Câu hỏi rõ ràng, dễ trả lời
        </motion.div>
      </motion.div>
    </div>
  )
}
