import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const channels = [
  { icon: '📧', name: 'Email', when: 'Thông báo chính thức, liên hệ ngoài công ty, các vấn đề cần lưu vết' },
  { icon: '💬', name: 'Slack / Chat', when: 'Trao đổi nhanh, hỏi đáp, cập nhật trạng thái trong ngày' },
  { icon: '📋', name: 'Jira / Ticket', when: 'Mô tả task, bug report, cập nhật tiến độ công việc' },
  { icon: '🔍', name: 'PR Comment', when: 'Review code, giải thích implementation, yêu cầu thay đổi' },
  { icon: '📄', name: 'Confluence / Doc', when: 'Tài liệu kiến trúc, decision log, hướng dẫn sử dụng' },
]

export function Slide06VanBan() {
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
          Slide 06
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
          Giao tiếp bằng <span style={{ color: theme.colors.accent }}>văn bản</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            marginBottom: 32,
          }}
        >
          Dùng đúng kênh - gửi đúng chỗ - là kỹ năng cơ bản nhiều junior còn thiếu.
        </motion.p>

        <motion.div
          variants={containerFast}
          style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          {channels.map((ch) => (
            <motion.div
              key={ch.name}
              variants={fadeInUp}
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'center',
                background: 'white',
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 10,
                padding: '14px 20px',
                boxShadow: '0 1px 6px rgba(17,24,39,0.04)',
              }}
            >
              <span style={{ fontSize: 24, flexShrink: 0 }}>{ch.icon}</span>
              <div
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 700,
                  color: theme.colors.text,
                  width: 140,
                  flexShrink: 0,
                }}
              >
                {ch.name}
              </div>
              <div
                style={{
                  width: 1,
                  height: 32,
                  background: theme.colors.border,
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.textMuted,
                  lineHeight: 1.5,
                }}
              >
                {ch.when}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
