import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const tools = [
  {
    name: 'Slack',
    tips: [
      'Dùng thread để trả lời - tránh làm noise channel chính',
      'Đặt status khi bận busy / không có mặt',
      'Dùng @mention đúng người, tránh @channel khi không cần thiết',
    ],
  },
  {
    name: 'Jira / Ticket',
    tips: [
      'Cập nhật trạng thái ticket hàng ngày',
      'Ghi rõ comment khi bị block hoặc có change',
      'Liên kết PR vào ticket để team theo dõi',
    ],
  },
  {
    name: 'GitHub / GitLab',
    tips: [
      'PR description đầy đủ: what, why, how to test',
      'Review comment cụ thể, có suggestion code nếu có thể',
      'Reply tất cả comment khi đã xử lý xong',
    ],
  },
]

export function Slide14Tools() {
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
          Slide 14
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.heading,
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 28,
          }}
        >
          Dùng <span style={{ color: theme.colors.accent }}>tools hiệu quả</span>
        </motion.h2>

        <motion.div
          variants={containerFast}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={fadeInUp}
              style={{
                background: 'white',
                border: `1px solid ${theme.colors.border}`,
                borderTop: `3px solid ${theme.colors.accent}`,
                borderRadius: 12,
                padding: '22px 20px',
                boxShadow: '0 2px 10px rgba(17,24,39,0.06)',
              }}
            >
              <div
                style={{
                  fontSize: theme.sizes.subheading,
                  fontWeight: 800,
                  color: theme.colors.text,
                  marginBottom: 14,
                }}
              >
                {tool.name}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {tool.tips.map((tip, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: 10,
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: theme.colors.accent,
                        marginTop: 7,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: theme.sizes.small,
                        color: theme.colors.textMuted,
                        lineHeight: 1.5,
                      }}
                    >
                      {tip}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
