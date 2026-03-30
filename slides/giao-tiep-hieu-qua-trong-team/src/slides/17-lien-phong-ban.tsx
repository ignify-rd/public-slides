import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const teams = [
  {
    team: 'QA / Tester',
    tips: ['Mô tả rõ steps to reproduce khi báo bug', 'Thông báo khi deploy lên staging để QA test', 'Hỏi rõ acceptance criteria trước khi làm'],
  },
  {
    team: 'Product / PM',
    tips: ['Hỏi về "why" của feature, không chỉ "what"', 'Báo ngay khi có risk liên quan đến deadline', 'Propose solution, không chỉ nêu vấn đề'],
  },
  {
    team: 'DevOps / Infra',
    tips: ['Tạo ticket rõ ràng khi cần infra support', 'Báo trước khi cần resource mới (server, config)', 'Follow process deploy - không tự ý deploy lên prod'],
  },
]

export function Slide17LienPhongBan() {
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
          Slide 17
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
          Giao tiếp <span style={{ color: theme.colors.accent }}>liên phòng ban</span>
        </motion.h2>

        <motion.div
          variants={containerFast}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
        >
          {teams.map((t) => (
            <motion.div
              key={t.team}
              variants={fadeInUp}
              style={{
                background: 'white',
                border: `1px solid ${theme.colors.border}`,
                borderTop: `3px solid ${theme.colors.accent}`,
                borderRadius: 12,
                padding: '20px',
                boxShadow: '0 2px 10px rgba(17,24,39,0.06)',
              }}
            >
              <div
                style={{
                  fontSize: theme.sizes.body,
                  fontWeight: 800,
                  color: theme.colors.text,
                  marginBottom: 14,
                }}
              >
                Voi {t.team}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.tips.map((tip, i) => (
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
                    <span style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.5 }}>
                      {tip}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
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
          <strong style={{ color: theme.colors.accent }}>Nguyên tắc chung:</strong> Mỗi team có ngôn ngữ riêng - từ đó context, mức độ ưu tiên. Hiểu người đọc trước khi viết.
        </motion.div>
      </motion.div>
    </div>
  )
}
