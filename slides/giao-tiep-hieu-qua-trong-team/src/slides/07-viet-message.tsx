import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide07VietMessage() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.alt,
        fontFamily: theme.fonts.family,
        display: 'flex',
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

      {/* Left */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '0 0 50%',
          padding: '60px 40px 60px 80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
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
          Slide 07
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.heading,
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 24,
            lineHeight: 1.2,
          }}
        >
          Viet message <span style={{ color: theme.colors.accent }}>ro rang, ngan gon</span>
        </motion.h2>

        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { label: 'BLUF', desc: 'Bottom Line Up Front - ket luan truoc, chi tiet sau' },
            { label: 'Context', desc: 'Neu boi canh de nguoi doc hieu van de' },
            { label: 'Action', desc: 'Neu ro ban can gi: review, approve, phan hoi' },
            { label: 'Deadline', desc: 'Neu co urgent, ghi ro thoi han cu the' },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              style={{
                display: 'flex',
                gap: 14,
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontSize: theme.sizes.small,
                  fontWeight: 800,
                  color: 'white',
                  background: theme.colors.accent,
                  padding: '3px 10px',
                  borderRadius: 4,
                  flexShrink: 0,
                  letterSpacing: '0.05em',
                }}
              >
                {item.label}
              </span>
              <span style={{ fontSize: theme.sizes.body, color: theme.colors.textMuted, lineHeight: 1.5 }}>
                {item.desc}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right - example */}
      <div
        style={{
          flex: '0 0 50%',
          padding: '60px 64px 60px 32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            top: '10%',
            bottom: '10%',
            width: 1,
            background: 'rgba(37,99,235,0.2)',
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            background: 'white',
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 12,
            padding: '24px 28px',
            boxShadow: '0 4px 16px rgba(17,24,39,0.08)',
          }}
        >
          <div
            style={{
              fontSize: theme.sizes.small,
              fontWeight: 700,
              color: theme.colors.positive,
              marginBottom: 14,
            }}
          >
            Vi du message tot:
          </div>
          <div
            style={{
              fontSize: theme.sizes.small,
              color: theme.colors.text,
              lineHeight: 1.8,
              fontFamily: 'monospace',
              background: '#f8f9fa',
              padding: '16px',
              borderRadius: 8,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            <div style={{ color: theme.colors.accent, fontWeight: 700 }}>@Nam - Can review PR #142 truoc 5pm hom nay</div>
            <br />
            <div>Boi canh: Feature login se bi block neu PR nay chua duoc merge.</div>
            <br />
            <div>Da test o local, pass all unit tests. Can them 1 pair of eyes cho phan error handling (line 45-60).</div>
            <br />
            <div>Link: github.com/org/repo/pull/142</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
