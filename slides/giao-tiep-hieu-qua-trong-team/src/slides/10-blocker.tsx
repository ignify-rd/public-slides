import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const template = [
  { label: 'Đang làm gì', example: '"Mình đang implement feature X theo ticket ABC-123"' },
  { label: 'Vấn đề gặp phải', example: '"Bị lỗi 403 Forbidden khi gọi API /auth/token, dù đã gửi đúng token"' },
  { label: 'Đã thử gì rồi', example: '"Đã check docs, thử regenerate token, và debug với Postman - vẫn bị lỗi"' },
  { label: 'Cần hỗ trợ gì', example: '"Cần ai có access vào server log để kiểm tra phía backend có thấy lỗi gì không"' },
]

export function Slide10Blocker() {
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
          Slide 10
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
          Giao tiếp khi gặp <span style={{ color: theme.colors.accent }}>blocker</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            marginBottom: 28,
          }}
        >
          Template báo blocker hiệu quả - đừng báo loại "em bị lỗi rồi anh ơi" rồi chờ:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            background: 'white',
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 12,
            padding: '24px 28px',
            boxShadow: '0 4px 16px rgba(17,24,39,0.07)',
          }}
        >
          {template.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 16,
                alignItems: 'start',
                marginBottom: i < template.length - 1 ? 14 : 0,
                paddingBottom: i < template.length - 1 ? 14 : 0,
                borderBottom: i < template.length - 1 ? `1px solid ${theme.colors.border}` : 'none',
              }}
            >
              <div
                style={{
                  fontSize: theme.sizes.small,
                  fontWeight: 700,
                  color: theme.colors.accent,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.text,
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                }}
              >
                {item.example}
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
          <strong style={{ color: theme.colors.accent }}>Quy tắc 15 phút:</strong> Tự debug tối đa 15-30 phút. Nếu vẫn bị kẹt, báo ngay - đừng để mất cả ngày vì một vấn đề có thể được giải quyết trong 5 phút.
        </motion.div>
      </motion.div>
    </div>
  )
}
