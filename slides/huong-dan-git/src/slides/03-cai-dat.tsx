import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'
import { CodeBlock } from '../components/CodeBlock'

const configCommands = [
  '# Thiet lap ten va email (bat buoc)',
  '$ git config --global user.name "Ten cua ban"',
  '$ git config --global user.email "email@example.com"',
  '',
  '# Dat editor mac dinh (VS Code)',
  '$ git config --global core.editor "code --wait"',
  '',
  '# Kiem tra cau hinh',
  '$ git config --list',
]

const installSteps = [
  { os: 'macOS', cmd: 'brew install git' },
  { os: 'Ubuntu/Debian', cmd: 'apt install git' },
  { os: 'Windows', cmd: 'git-scm.com/download/win' },
]

export function Slide03CaiDat() {
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
        style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 80, paddingRight: 40, zIndex: 1 }}
      >
        <motion.div variants={fadeInUp} style={{ fontSize: theme.sizes.label, fontWeight: 800, letterSpacing: '0.2em', color: theme.colors.accent, textTransform: 'uppercase', marginBottom: 16 }}>
          Slide 03
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          Cai dat &amp; <span style={{ color: theme.colors.accent }}>cau hinh</span>
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.div variants={fadeInUp} style={{ marginBottom: 16 }}>
          <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.text, marginBottom: 10 }}>Cai dat Git:</div>
          {installSteps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 6, alignItems: 'center' }}>
              <span style={{ fontSize: theme.sizes.small, color: theme.colors.accent, fontWeight: 700, minWidth: 120 }}>{s.os}</span>
              <code style={{ fontFamily: theme.fonts.mono, fontSize: theme.sizes.small, color: theme.colors.textMuted, background: 'rgba(17,24,39,0.05)', padding: '2px 8px', borderRadius: 4 }}>{s.cmd}</code>
            </div>
          ))}
        </motion.div>

        <motion.p variants={fadeInUp} style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.6 }}>
          Sau khi cai dat, cau hinh ten va email - thong tin nay se xuat hien trong moi commit.
        </motion.p>
      </motion.div>

      <div style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 52px 60px 32px', zIndex: 1 }}>
        <motion.div
          style={{ position: 'absolute', left: '50%', top: '10%', bottom: '10%', width: 1, background: 'rgba(37,99,235,0.15)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <CodeBlock lines={configCommands} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: 16, background: theme.colors.accentDim, border: `1px solid ${theme.colors.borderAccent}`, borderRadius: 8, padding: '12px 16px' }}
        >
          <div style={{ fontSize: theme.sizes.small, color: theme.colors.text, lineHeight: 1.6 }}>
            <strong>--global</strong>: ap dung cho toan bo project tren may. Bo flag nay neu chi muon ap dung cho project hien tai.
          </div>
        </motion.div>
      </div>
    </div>
  )
}
