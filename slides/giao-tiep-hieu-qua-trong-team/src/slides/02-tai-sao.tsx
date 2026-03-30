import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const stats = [
  { value: '86%', label: 'thất bại của các dự án là do giao tiếp kém' },
  { value: '4x', label: 'hiệu suất khi team giao tiếp tốt hơn' },
  { value: '#1', label: 'kỹ năng nhà tuyển dụng tìm kiếm ở junior dev' },
]

export function Slide02TaiSao() {
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
        padding: '60px 80px',
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
            marginBottom: 16,
          }}
        >
          Slide 02
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.heading,
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 12,
          }}
        >
          Tại sao giao tiếp <span style={{ color: theme.colors.accent }}>quan trọng?</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            marginBottom: 48,
            maxWidth: 600,
            lineHeight: 1.6,
          }}
        >
          Kỹ năng kỹ thuật chỉ là một phần - giao tiếp là thứ tạo ra sự khác biệt giữa người bình thường và người xuất sắc.
        </motion.p>

        <motion.div
          variants={containerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={fadeInUp}
              style={{
                background: 'white',
                border: `1px solid ${theme.colors.border}`,
                borderTop: `3px solid ${theme.colors.accent}`,
                borderRadius: 12,
                padding: '28px 24px',
                boxShadow: '0 2px 12px rgba(37,99,235,0.06)',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 800,
                  color: theme.colors.accent,
                  marginBottom: 10,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.textMuted,
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: 36,
            padding: '16px 24px',
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 10,
            fontSize: theme.sizes.body,
            color: theme.colors.text,
            maxWidth: 700,
          }}
        >
          <strong style={{ color: theme.colors.accent }}>Key insight:</strong> Code tốt nhưng giao tiếp kém = blocker cho cả team. Code trung bình nhưng giao tiếp tốt = contributor giá trị.
        </motion.div>
      </motion.div>
    </div>
  )
}
