import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const reasons = [
  { icon: '📸', title: 'Luu lich su', desc: 'Moi thay doi duoc ghi lai - co the xem lai hoac hoan tac bat ky luc nao' },
  { icon: '🌿', title: 'Lam viec song song', desc: 'Moi nguoi lam viec tren branch rieng, khong anh huong nhau' },
  { icon: '🤝', title: 'Hop tac nhom', desc: 'Gop code tu nhieu nguoi vao mot codebase chung mot cach co kiem soat' },
  { icon: '🔒', title: 'An toan', desc: 'Khong bao gio mat code - luon co the quay lai trang thai truoc' },
]

export function Slide02GitLaGi() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.default,
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

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: theme.colors.accent,
          transformOrigin: 'top',
          zIndex: 2,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '0 0 50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 80,
          paddingRight: 48,
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
            marginBottom: 16,
          }}
        >
          Slide 02
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 10,
            lineHeight: 1.15,
          }}
        >
          Git la <span style={{ color: theme.colors.accent }}>gi?</span>
        </motion.h2>

        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 24 }} />

        <motion.p
          variants={fadeInUp}
          style={{ fontSize: theme.sizes.body, color: theme.colors.textMuted, lineHeight: 1.7, marginBottom: 24 }}
        >
          Git la <strong style={{ color: theme.colors.text }}>Version Control System (VCS)</strong> - he thong quan ly phien ban. No giu lai lich su toan bo thay doi cua source code theo thoi gian.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 10,
            padding: '14px 18px',
          }}
        >
          <div style={{ fontSize: theme.sizes.small, color: theme.colors.text, lineHeight: 1.6 }}>
            <strong>Git != GitHub.</strong> Git la cong cu chay tren may tinh cua ban. GitHub la dich vu luu tru repo tren mang.
          </div>
        </motion.div>
      </motion.div>

      <div
        style={{
          flex: '0 0 50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 60px 60px 32px',
          zIndex: 1,
          gap: 14,
        }}
      >
        <motion.div
          style={{ position: 'absolute', left: '50%', top: '10%', bottom: '10%', width: 1, background: 'rgba(37,99,235,0.15)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.45 }}
            style={{
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
              background: 'white',
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 10,
              padding: '14px 18px',
              boxShadow: '0 2px 8px rgba(17,24,39,0.05)',
            }}
          >
            <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{r.icon}</span>
            <div>
              <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.text, marginBottom: 4 }}>{r.title}</div>
              <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.5 }}>{r.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
