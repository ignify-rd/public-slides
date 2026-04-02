import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'
import { CodeBlock } from '../components/CodeBlock'

const undoLines = [
  '# Hoan tac thay doi trong working dir',
  '$ git restore src/App.tsx',
  '',
  '# Bo staged (hoan tac git add)',
  '$ git restore --staged src/App.tsx',
  '',
  '# Xoa commit cuoi (giu lai thay doi)',
  '$ git reset HEAD~1',
  '',
  '# Xoa commit cuoi (bo luon thay doi)',
  '$ git reset --hard HEAD~1',
  '',
  '# Tao commit dao nguoc (an toan cho remote)',
  '$ git revert <commit-hash>',
]

const undoGuide = [
  { cmd: 'git restore', scope: 'Working Dir', safe: true, desc: 'Hoan tac file ve trang thai staging/commit' },
  { cmd: 'git reset', scope: 'Lich su commit', safe: false, desc: 'Xoa commit, nguy hiem khi da push' },
  { cmd: 'git revert', scope: 'Lich su commit', safe: true, desc: 'Tao commit moi dao nguoc - an toan voi remote' },
]

export function Slide15Undo() {
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
        style={{ flex: '0 0 45%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 80, paddingRight: 36, zIndex: 1 }}
      >
        <motion.div variants={fadeInUp} style={{ fontSize: theme.sizes.label, fontWeight: 800, letterSpacing: '0.2em', color: theme.colors.accent, textTransform: 'uppercase', marginBottom: 16 }}>
          Slide 15
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          <span style={{ color: theme.colors.accent }}>Undo</span> - hoan tac
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {undoGuide.map((item, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${theme.colors.border}`, borderRadius: 10, padding: '12px 16px', boxShadow: '0 2px 8px rgba(17,24,39,0.05)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <code style={{ fontFamily: theme.fonts.mono, fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.accent }}>{item.cmd}</code>
                  <span style={{ fontSize: '0.6rem', padding: '2px 6px', borderRadius: 4, background: item.safe ? 'rgba(5,150,105,0.12)' : 'rgba(220,38,38,0.12)', color: item.safe ? '#059669' : '#dc2626', fontWeight: 700 }}>
                    {item.safe ? 'AN TOAN' : 'NGUY HIEM'}
                  </span>
                </div>
                <div style={{ fontSize: '0.65rem', color: theme.colors.textMuted }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div style={{ flex: '0 0 55%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 52px 60px 28px', zIndex: 1 }}>
        <motion.div
          style={{ position: 'absolute', left: '45%', top: '10%', bottom: '10%', width: 1, background: 'rgba(37,99,235,0.15)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <CodeBlock lines={undoLines} />
        </motion.div>
      </div>
    </div>
  )
}
