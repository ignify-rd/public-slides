import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'
import { CodeBlock } from '../components/CodeBlock'

const logLines = [
  '$ git log',
  '',
  'commit a1b2c3d (HEAD -> main)',
  'Author: Dev <dev@example.com>',
  'Date:   Mon Mar 31 09:00:00 2025',
  '',
  '    feat: them tinh nang dang nhap',
  '',
  'commit e4f5g6h',
  'Author: Dev <dev@example.com>',
  '    fix: sua loi validate form',
]

const logShortLines = [
  '# Xem lich su gon',
  '$ git log --oneline',
  '',
  'a1b2c3d (HEAD -> main) feat: them tinh nang dang nhap',
  'e4f5g6h fix: sua loi validate form',
  '7i8j9k0 chore: cap nhat dependencies',
  '',
  '# Xem lich su co so do nhanh',
  '$ git log --oneline --graph --all',
]

export function Slide08LichSu() {
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
        style={{ flex: '0 0 38%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 80, paddingRight: 32, zIndex: 1 }}
      >
        <motion.div variants={fadeInUp} style={{ fontSize: theme.sizes.label, fontWeight: 800, letterSpacing: '0.2em', color: theme.colors.accent, textTransform: 'uppercase', marginBottom: 16 }}>
          Slide 08
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          Xem <span style={{ color: theme.colors.accent }}>lich su</span>
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { cmd: 'git log', desc: 'Xem lich su day du, bao gom tac gia, ngay, message' },
            { cmd: 'git log --oneline', desc: 'Lich su gon tren mot dong moi commit' },
            { cmd: 'git log --graph', desc: 'Ve so do nhanh ASCII trong terminal' },
            { cmd: 'git show <hash>', desc: 'Xem chi tiet mot commit cu the' },
          ].map((item, i) => (
            <div key={i}>
              <code style={{ fontFamily: theme.fonts.mono, fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.accent }}>{item.cmd}</code>
              <p style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.5, marginTop: 3 }}>{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div style={{ flex: '0 0 62%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 52px 60px 28px', zIndex: 1, gap: 18 }}>
        <motion.div
          style={{ position: 'absolute', left: '38%', top: '10%', bottom: '10%', width: 1, background: 'rgba(37,99,235,0.15)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <CodeBlock lines={logLines} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
          <CodeBlock lines={logShortLines} />
        </motion.div>
      </div>
    </div>
  )
}
