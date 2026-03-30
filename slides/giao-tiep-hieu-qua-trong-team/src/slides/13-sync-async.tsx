import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const syncItems = [
  { text: 'Vấn đề phức tạp, cần trao đổi nhiều chiều' },
  { text: 'Emergency, cần giải quyết ngay' },
  { text: 'Onboarding, brainstorm, retro' },
  { text: 'Bối cảnh nảy sinh hiểu lầm liên tục' },
]

const asyncItems = [
  { text: 'Cập nhật trạng thái, không cần phản hồi ngay' },
  { text: 'Yêu cầu review, phản hồi, hỗ trợ' },
  { text: 'Tài liệu, wiki, decision log' },
  { text: 'Thông báo đến nhiều người cùng lúc' },
]

export function Slide13SyncAsync() {
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
          Slide 13
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
          Giao tiếp <span style={{ color: theme.colors.accent }}>đồng bộ vs. bất đồng bộ</span>
        </motion.h2>

        <motion.div
          variants={containerFast}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
        >
          <motion.div variants={fadeInUp}>
            <div
              style={{
                background: theme.colors.accentDim,
                border: `1px solid ${theme.colors.borderAccent}`,
                borderRadius: 10,
                padding: '16px 20px',
                marginBottom: 14,
              }}
            >
              <div style={{ fontSize: theme.sizes.body, fontWeight: 700, color: theme.colors.accent, marginBottom: 4 }}>
                Đồng bộ (Meeting / Call)
              </div>
              <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>
                Nên dùng khi...
              </div>
            </div>
            {syncItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                  marginBottom: 10,
                  background: 'white',
                  border: `1px solid ${theme.colors.border}`,
                  borderRadius: 8,
                  padding: '10px 14px',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: theme.colors.accent,
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: theme.sizes.small, color: theme.colors.text, lineHeight: 1.5 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div
              style={{
                background: 'rgba(5,150,105,0.08)',
                border: '1px solid rgba(5,150,105,0.25)',
                borderRadius: 10,
                padding: '16px 20px',
                marginBottom: 14,
              }}
            >
              <div style={{ fontSize: theme.sizes.body, fontWeight: 700, color: theme.colors.positive, marginBottom: 4 }}>
                Bất đồng bộ (Chat / Doc)
              </div>
              <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>
                Nên dùng khi...
              </div>
            </div>
            {asyncItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                  marginBottom: 10,
                  background: 'white',
                  border: `1px solid ${theme.colors.border}`,
                  borderRadius: 8,
                  padding: '10px 14px',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: theme.colors.positive,
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: theme.sizes.small, color: theme.colors.text, lineHeight: 1.5 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
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
          <strong style={{ color: theme.colors.accent }}>Default async, sync khi cần thiết.</strong> Không nên tổ chức meeting để báo kết quả có thể gửi Slack - tốn thời gian cả team.
        </motion.div>
      </motion.div>
    </div>
  )
}
