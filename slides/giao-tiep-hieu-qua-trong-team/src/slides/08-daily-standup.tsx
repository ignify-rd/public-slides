import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const questions = [
  {
    q: 'Hom qua lam gi?',
    hint: 'Task cu the, khong chi noi "lam feature X"',
    example: '"Hoan thanh API endpoint /users/login, da viet unit test"',
  },
  {
    q: 'Hom nay se lam gi?',
    hint: 'Plan ro rang, estimate neu co the',
    example: '"Se implement phan validate token, du kien xong truoc 3pm"',
  },
  {
    q: 'Co gi can ho tro khong?',
    hint: 'Nen noi ro blocker ngay - dung giu trong long',
    example: '"Dang bi ket o viec cau hinh Redis, can ai co kinh nghiem ho tro"',
  },
]

export function Slide08DailyStandup() {
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
          Slide 08
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
          Giao tiep trong <span style={{ color: theme.colors.accent }}>daily standup</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            marginBottom: 28,
          }}
        >
          15 phut moi ngay - giu ngan gon, tap trung, khong dung thuyet trinh dai dong.
        </motion.p>

        <motion.div
          variants={containerFast}
          style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          {questions.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              style={{
                background: 'white',
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 10,
                padding: '16px 20px',
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 20,
                alignItems: 'start',
                boxShadow: '0 1px 6px rgba(17,24,39,0.04)',
              }}
            >
              <div>
                <div style={{ fontSize: theme.sizes.body, fontWeight: 700, color: theme.colors.accent, marginBottom: 4 }}>
                  {item.q}
                </div>
                <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted }}>
                  {item.hint}
                </div>
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.text,
                  background: '#f1f5f9',
                  padding: '10px 14px',
                  borderRadius: 6,
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                }}
              >
                {item.example}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
