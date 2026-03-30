import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const reviewerTips = [
  { good: 'Suggestion: Có thể dùng Map thay vì for loop để tăng hiệu suất - O(n) -> O(1)', bad: 'Sai rồi, viết lại đi' },
  { good: 'Nit: Đặt tên biến rõ ràng hơn: `u` -> `user` giúp code dễ đọc hơn', bad: 'u là gì vậy?' },
  { good: 'Question: Mình thấy curious tại sao chọn approach này? Có alternative không?', bad: 'Tại sao làm vậy?' },
]

export function Slide15CodeReview() {
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
          Slide 15
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
          Giao tiếp trong <span style={{ color: theme.colors.accent }}>code review</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            marginBottom: 28,
          }}
        >
          Code review là về <strong>code</strong>, không phải về <strong>con người</strong>. Phản biện code, không phản biện tác giả.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 4 }}>
            <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.positive }}>
              Comment tốt (Constructive)
            </div>
            <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.negative }}>
              Comment nên tránh
            </div>
          </div>

          {reviewerTips.map((tip, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div
                style={{
                  background: 'white',
                  border: '1px solid rgba(5,150,105,0.25)',
                  borderLeft: `3px solid ${theme.colors.positive}`,
                  borderRadius: 8,
                  padding: '12px 16px',
                  fontSize: theme.sizes.small,
                  color: theme.colors.text,
                  lineHeight: 1.5,
                  fontFamily: 'monospace',
                }}
              >
                {tip.good}
              </div>
              <div
                style={{
                  background: 'white',
                  border: '1px solid rgba(220,38,38,0.2)',
                  borderLeft: `3px solid ${theme.colors.negative}`,
                  borderRadius: 8,
                  padding: '12px 16px',
                  fontSize: theme.sizes.small,
                  color: theme.colors.text,
                  lineHeight: 1.5,
                  fontFamily: 'monospace',
                }}
              >
                {tip.bad}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: 20,
            padding: '12px 20px',
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 8,
            fontSize: theme.sizes.small,
            color: theme.colors.text,
          }}
        >
          <strong style={{ color: theme.colors.accent }}>Label comment:</strong> "Nit" = không bắt buộc, "Blocker" = phải sửa trước khi merge, "Question" = mình muốn hiểu thêm.
        </motion.div>
      </motion.div>
    </div>
  )
}
