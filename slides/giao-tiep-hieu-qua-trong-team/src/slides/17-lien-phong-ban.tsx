import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const teams = [
  {
    team: 'QA / Tester',
    tips: ['Mo ta ro steps to reproduce khi bao bug', 'Thong bao khi deploy len staging de QA test', 'Hoi ro acceptance criteria truoc khi lam'],
  },
  {
    team: 'Product / PM',
    tips: ['Hoi ve "why" cua feature, khong chi "what"', 'Bao ngay khi co risk liem quan den deadline', 'Propose solution, khong chi neu van de'],
  },
  {
    team: 'DevOps / Infra',
    tips: ['Tao ticket ro rang khi can infra support', 'Bao truoc khi can resource moi (server, config)', 'Follow process deploy - khong tu y deploy len prod'],
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
          Giao tiep <span style={{ color: theme.colors.accent }}>lien phong ban</span>
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
          <strong style={{ color: theme.colors.accent }}>Nguyen tac chung:</strong> Moi team co ngon ngu rieng - tu do context, muc do uu tien. Hieu nguoi doc truoc khi viet.
        </motion.div>
      </motion.div>
    </div>
  )
}
