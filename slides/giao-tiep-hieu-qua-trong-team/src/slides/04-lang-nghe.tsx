import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const tips = [
  { num: '01', text: 'Không ngắt lời người khác đang nói - để họ nói xong hoàn toàn' },
  { num: '02', text: 'Xác nhận lại bằng cách tóm tắt: "Ý bạn là..."' },
  { num: '03', text: 'Đặt câu hỏi làm rõ, không đưa ra kết luận quá sớm' },
  { num: '04', text: 'Để ý ngôn ngữ cơ thể (expression, tone) khi nói chuyện trực tiếp' },
  { num: '05', text: 'Ghi chú những điểm quan trọng để không quên' },
]

export function Slide04LangNghe() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.default,
        fontFamily: theme.fonts.family,
        display: 'flex',
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

      {/* Left panel */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '0 0 52%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 48px 60px 80px',
          position: 'relative',
          zIndex: 1,
        }}
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
          Slide 04
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.heading,
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 16,
            lineHeight: 1.15,
          }}
        >
          Lắng nghe{' '}
          <span style={{ color: theme.colors.accent }}>chủ động</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            lineHeight: 1.65,
            marginBottom: 32,
            maxWidth: 380,
          }}
        >
          Active listening không phải nghe để chờ đến lượt mình nói. Đó là kỹ năng nghe để hiểu - hiểu người, hiểu vấn đề, hiểu bối cảnh.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{
            padding: '14px 20px',
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 8,
            fontSize: theme.sizes.small,
            color: theme.colors.text,
            maxWidth: 380,
          }}
        >
          <strong>Nhớ:</strong> Junior hay mắc lỗi nói nhiều hơn nghe. Đảo ngược lại sẽ tạo sự khác biệt lớn.
        </motion.div>
      </motion.div>

      {/* Right panel */}
      <div
        style={{
          flex: '0 0 48%',
          display: 'flex',
          alignItems: 'center',
          padding: '60px 64px 60px 32px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            top: '10%',
            bottom: '10%',
            width: 1,
            background: 'rgba(37,99,235,0.2)',
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />

        <motion.div
          variants={containerFast}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}
        >
          {tips.map((tip) => (
            <motion.div
              key={tip.num}
              variants={fadeInUp}
              style={{
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
                background: 'white',
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 10,
                padding: '14px 18px',
                boxShadow: '0 1px 6px rgba(17,24,39,0.05)',
              }}
            >
              <span
                style={{
                  fontSize: theme.sizes.small,
                  fontWeight: 800,
                  color: theme.colors.accent,
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                {tip.num}
              </span>
              <span
                style={{
                  fontSize: theme.sizes.body,
                  color: theme.colors.text,
                  lineHeight: 1.5,
                }}
              >
                {tip.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
