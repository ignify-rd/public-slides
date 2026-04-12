import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'
import { CodeBlock } from '../components/CodeBlock'

const remoteLines = [
  '# Them remote (thuong ten la "origin")',
  '$ git remote add origin https://github.com/user/repo.git',
  '',
  '# Xem danh sach remote',
  '$ git remote -v',
  '',
  '# Lay thay doi tu remote (khong merge)',
  '$ git fetch origin',
  '',
  '# Lay va merge ngay (fetch + merge)',
  '$ git pull origin main',
  '',
  '# Dua code len remote',
  '$ git push origin feature/login',
  '',
  '# Push lan dau (set upstream)',
  '$ git push -u origin feature/login',
]

export function Slide13Remote() {
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
        style={{ flex: '0 0 42%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 80, paddingRight: 36, zIndex: 1 }}
      >
        <motion.div variants={fadeInUp} style={{ fontSize: theme.sizes.label, fontWeight: 800, letterSpacing: '0.2em', color: theme.colors.accent, textTransform: 'uppercase', marginBottom: 16 }}>
          Slide 13
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          <span style={{ color: theme.colors.accent }}>Remote</span>
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { cmd: 'git fetch', desc: 'Tai thay doi tu remote KHONG anh huong working dir', color: '#3b82f6' },
            { cmd: 'git pull', desc: 'Fetch + merge: lay thay doi va gop ngay vao branch hien tai', color: '#10b981' },
            { cmd: 'git push', desc: 'Dua commit cua ban len remote de nguoi khac co the lay ve', color: '#8b5cf6' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${theme.colors.border}`, borderRadius: 10, padding: '12px 16px', boxShadow: '0 2px 8px rgba(17,24,39,0.05)' }}>
              <code style={{ fontFamily: theme.fonts.mono, fontSize: theme.sizes.small, fontWeight: 700, color: item.color }}>{item.cmd}</code>
              <p style={{ fontSize: '0.68rem', color: theme.colors.textMuted, lineHeight: 1.5, marginTop: 4 }}>{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div style={{ flex: '0 0 58%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 52px 60px 28px', zIndex: 1 }}>
        <motion.div
          style={{ position: 'absolute', left: '42%', top: '10%', bottom: '10%', width: 1, background: 'rgba(37,99,235,0.15)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <CodeBlock lines={remoteLines} />
        </motion.div>
      </div>
    </div>
  )
}
