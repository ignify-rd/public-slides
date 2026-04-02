import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const concepts = [
  {
    name: 'Working Directory',
    color: '#3b82f6',
    desc: 'Thu muc lam viec tren may tinh cua ban. Cac file ban dang chinh sua song o day.',
    icon: '📁',
  },
  {
    name: 'Staging Area (Index)',
    color: '#8b5cf6',
    desc: 'Vung chuan bi cho commit. Dung git add de chuyen file tu working dir len day.',
    icon: '📋',
  },
  {
    name: 'Repository (.git)',
    color: '#10b981',
    desc: 'Noi luu tru lich su commit. Moi commit la mot anh chup (snapshot) cua code tai mot thoi diem.',
    icon: '🗄️',
  },
  {
    name: 'Commit',
    color: '#f59e0b',
    desc: 'Mot ban ghi thay doi duoc luu lai vinh vien, kem theo tac gia, thoi gian va message mo ta.',
    icon: '📌',
  },
]

export function Slide04KhaiNiem() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.alt,
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundImage: theme.backgrounds.grid, backgroundSize: '60px 60px', opacity: 0.8 }} />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6 }}
        style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: theme.colors.accent, transformOrigin: 'top', zIndex: 2 }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ padding: '48px 80px 28px', zIndex: 1 }}
      >
        <motion.div variants={fadeInUp} style={{ fontSize: theme.sizes.label, fontWeight: 800, letterSpacing: '0.2em', color: theme.colors.accent, textTransform: 'uppercase', marginBottom: 10 }}>
          Slide 04
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 6 }}>
          Khai niem <span style={{ color: theme.colors.accent }}>co ban</span>
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent }} />
      </motion.div>

      <div style={{ flex: 1, display: 'flex', padding: '0 80px 48px', gap: 20, zIndex: 1 }}>
        {concepts.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.12, duration: 0.45 }}
            style={{
              flex: 1,
              background: 'white',
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 14,
              padding: '22px 20px',
              boxShadow: '0 2px 12px rgba(17,24,39,0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: `${c.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                {c.icon}
              </div>
              <div style={{ width: 3, height: 28, background: c.color, borderRadius: 2 }} />
            </div>
            <div style={{ fontSize: theme.sizes.small, fontWeight: 800, color: theme.colors.text, fontFamily: theme.fonts.mono }}>{c.name}</div>
            <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.6, flex: 1 }}>{c.desc}</div>
          </motion.div>
        ))}
      </div>

      {/* Flow arrows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{ position: 'absolute', bottom: 52, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: 8, zIndex: 1 }}
      >
        {['Working Dir', '->', 'Staging Area', '->', 'Repository'].map((s, i) => (
          <span
            key={i}
            style={{
              fontSize: theme.sizes.small,
              color: s === '->' ? theme.colors.accent : theme.colors.textMuted,
              fontWeight: s === '->' ? 700 : 500,
              fontFamily: s === '->' ? theme.fonts.family : theme.fonts.mono,
            }}
          >
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
