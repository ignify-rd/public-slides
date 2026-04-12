import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const commandTable = [
  { cmd: 'git init / clone', desc: 'Khoi tao repo' },
  { cmd: 'git status / diff', desc: 'Xem trang thai thay doi' },
  { cmd: 'git add / commit', desc: 'Luu thay doi vao lich su' },
  { cmd: 'git log', desc: 'Xem lich su commit' },
  { cmd: 'git branch / switch', desc: 'Quan ly nhanh' },
  { cmd: 'git merge / rebase', desc: 'Gop nhanh' },
  { cmd: 'git fetch / pull / push', desc: 'Dong bo voi remote' },
  { cmd: 'git stash', desc: 'Luu tam thay doi' },
  { cmd: 'git restore / revert', desc: 'Hoan tac thay doi' },
]

const takeaways = [
  'Commit thuong xuyen - moi commit la mot checkpoint an toan',
  'Dung branch rieng cho moi tinh nang/bugfix',
  'Viet commit message ro rang, theo convention',
  'Dong bo voi main hang ngay de giam conflict',
  'Khi nghi ngo: git status la ban tot nhat',
]

export function Slide18TongKet() {
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
        style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '48px 36px 48px 80px', zIndex: 1 }}
      >
        <motion.div variants={fadeInUp} style={{ fontSize: theme.sizes.label, fontWeight: 800, letterSpacing: '0.2em', color: theme.colors.accent, textTransform: 'uppercase', marginBottom: 16 }}>
          Slide 18 - Tong ket
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          5 dieu can <span style={{ color: theme.colors.accent }}>nho mai</span>
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 24 }} />

        <motion.div variants={containerFast} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {takeaways.map((item, i) => (
            <motion.div key={i} variants={fadeInUp} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ fontSize: theme.sizes.small, fontWeight: 800, color: 'white', background: theme.colors.accent, width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                {i + 1}
              </span>
              <span style={{ fontSize: theme.sizes.body, color: theme.colors.text, lineHeight: 1.5 }}>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '48px 60px 48px 28px', zIndex: 1 }}>
        <motion.div
          style={{ position: 'absolute', left: '50%', top: '10%', bottom: '10%', width: 1, background: 'rgba(37,99,235,0.2)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ background: 'white', border: `1px solid ${theme.colors.border}`, borderRadius: 12, padding: '18px 22px', boxShadow: '0 2px 12px rgba(17,24,39,0.07)' }}
        >
          <div style={{ fontSize: theme.sizes.small, fontWeight: 800, color: theme.colors.text, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Bang lenh tham khao nhanh
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 6 }}>
            {commandTable.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', paddingBottom: 6, borderBottom: i < commandTable.length - 1 ? `1px solid ${theme.colors.border}` : 'none' }}>
                <code style={{ fontFamily: theme.fonts.mono, fontSize: '0.65rem', color: theme.colors.accent, fontWeight: 700, minWidth: 160, flexShrink: 0 }}>{row.cmd}</code>
                <span style={{ fontSize: '0.65rem', color: theme.colors.textMuted }}>{row.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ position: 'absolute', right: 48, bottom: 40, fontSize: 'clamp(5rem, 10vw, 9rem)', fontWeight: 800, color: 'rgba(37, 99, 235, 0.06)', lineHeight: 1, userSelect: 'none', fontFamily: theme.fonts.mono }}
        >
          git
        </motion.div>
      </div>
    </div>
  )
}
