import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const morning = [
  'Đọc Slack / email: có tin nhắn nào cần trả lời gấp không?',
  'Check Jira: ticket của mình có update gì không?',
  'Xác định 1-3 việc chính cần hoàn thành hôm nay',
  'Chuẩn bị cho daily standup: hôm qua - hôm nay - blocker',
]

const during = [
  'Cập nhật ticket khi bắt đầu hoặc hoàn thành task',
  'Nếu gặp blocker quá 15 phút: báo ngay',
  'Reply comment PR / Slack trong vòng hợp lý (2-4h)',
  'Ghi note nếu nhận thông tin quan trọng qua meeting / call',
]

const end = [
  'Cập nhật trạng thái các ticket đang làm',
  'Notify nếu có gì chưa hoàn thành theo kế hoạch',
  'Đóng PR review chưa xử lý xong',
  'Clear notification và unread messages quan trọng',
]

export function Slide19Checklist() {
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
        padding: '46px 80px',
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
          Slide 19
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
          Checklist giao tiếp <span style={{ color: theme.colors.accent }}>hàng ngày</span>
        </motion.h2>

        <motion.div
          variants={containerFast}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}
        >
          {[
            { label: 'Buổi sáng', items: morning, color: '#d97706' },
            { label: 'Trong ngày', items: during, color: theme.colors.accent },
            { label: 'Cuối ngày', items: end, color: theme.colors.positive },
          ].map((col) => (
            <motion.div
              key={col.label}
              variants={fadeInUp}
              style={{
                background: 'white',
                border: `1px solid ${theme.colors.border}`,
                borderTop: `3px solid ${col.color}`,
                borderRadius: 12,
                padding: '18px 16px',
                boxShadow: '0 2px 8px rgba(17,24,39,0.06)',
              }}
            >
              <div
                style={{
                  fontSize: theme.sizes.small,
                  fontWeight: 800,
                  color: col.color,
                  marginBottom: 14,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {col.label}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map((item, i) => (
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
                        width: 16,
                        height: 16,
                        border: `2px solid ${col.color}`,
                        borderRadius: 4,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    <span style={{ fontSize: theme.sizes.small, color: theme.colors.text, lineHeight: 1.5 }}>
                      {item}
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
