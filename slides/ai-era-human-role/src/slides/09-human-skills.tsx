import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide09HumanSkills() {
  const skills = [
    {
      icon: '🏗',
      title: 'System design',
      desc: 'Quyết định kiến trúc, trade-off, scalability - AI chỉ có biết pattern.',
    },
    {
      icon: '🐛',
      title: 'Debug lỗi phức tạp',
      desc: 'Lỗi xảy ra từ sự kết hợp của nhiều hệ thống, không có trong training data.',
    },
    {
      icon: '🤝',
      title: 'Giao tiếp với stakeholder',
      desc: 'Hiểu yêu cầu mơ hồ, đàm phán scope, điều phối giữa team và khách hàng.',
    },
    {
      icon: '⚖',
      title: 'Quyết định đạo đức / rủi ro',
      desc: 'Chọn giải pháp phù hợp với bối cảnh tổ chức, pháp lý, người dùng.',
    },
  ]

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
        paddingLeft: 96,
        paddingRight: 96,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${theme.colors.accent}, transparent)`,
          transformOrigin: 'left',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Những gì vẫn cần con người
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 32,
          }}
        >
          AI chưa thể thay thế được
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.5 }}
              style={{
                background: theme.colors.accentDim,
                border: `1px solid ${theme.colors.borderAccent}`,
                borderRadius: 12,
                padding: '20px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div style={{ fontSize: '1.4rem' }}>{skill.icon}</div>
              <div
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 700,
                  color: theme.colors.text,
                }}
              >
                {skill.title}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.textMuted,
                  lineHeight: 1.5,
                }}
              >
                {skill.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
