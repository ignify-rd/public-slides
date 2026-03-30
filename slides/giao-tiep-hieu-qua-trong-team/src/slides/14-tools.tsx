import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const tools = [
  {
    name: 'Slack',
    tips: [
      'Dung thread de tra loi - tranh lam noise channel chinh',
      'Dat status khi ban busy / khong co mat',
      'Dung @mention dung nguoi, tranh @channel khi khong can thiet',
    ],
  },
  {
    name: 'Jira / Ticket',
    tips: [
      'Cap nhat trang thai ticket hang ngay',
      'Ghi ro comment khi bi block hoac co change',
      'Lien ket PR vao ticket de team theo doi',
    ],
  },
  {
    name: 'GitHub / GitLab',
    tips: [
      'PR description day du: what, why, how to test',
      'Review comment cu the, co suggestion code neu co the',
      'Reply tat ca comment khi da xu ly xong',
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
          Dung <span style={{ color: theme.colors.accent }}>tools hieu qua</span>
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
