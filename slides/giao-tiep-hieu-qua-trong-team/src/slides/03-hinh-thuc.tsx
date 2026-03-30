import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const forms = [
  { icon: '💬', title: 'Dong bo (Sync)', desc: 'Meeting, call, standup, pair programming - moi nguoi online cung luc' },
  { icon: '📝', title: 'Bat dong bo (Async)', desc: 'Email, Slack, comment, doc - moi nguoi tra loi khi ranh' },
  { icon: '🖥️', title: 'Bang van ban', desc: 'PR description, ticket, wiki, README - luu lai de tham khao' },
  { icon: '🎤', title: 'Bang loi noi', desc: 'Trao doi truc tiep, review, 1:1 - nhanh nhung khong luu vet' },
]

export function Slide03HinhThuc() {
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
          Slide 03
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.heading,
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 40,
          }}
        >
          Cac hinh thuc <span style={{ color: theme.colors.accent }}>giao tiep trong team</span>
        </motion.h2>

        <motion.div
          variants={containerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
          }}
        >
          {forms.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeInUp}
              style={{
                background: 'white',
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 12,
                padding: '24px 28px',
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
                boxShadow: '0 2px 8px rgba(17,24,39,0.06)',
              }}
            >
              <span style={{ fontSize: 32, flexShrink: 0, lineHeight: 1 }}>{f.icon}</span>
              <div>
                <div
                  style={{
                    fontSize: theme.sizes.subheading,
                    fontWeight: 700,
                    color: theme.colors.text,
                    marginBottom: 6,
                  }}
                >
                  {f.title}
                </div>
                <div
                  style={{
                    fontSize: theme.sizes.body,
                    color: theme.colors.textMuted,
                    lineHeight: 1.5,
                  }}
                >
                  {f.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
