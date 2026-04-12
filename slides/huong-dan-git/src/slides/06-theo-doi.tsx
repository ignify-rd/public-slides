import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'
import { CodeBlock } from '../components/CodeBlock'

const statusLines = [
  '$ git status',
  '',
  'On branch main',
  'Changes not staged for commit:',
  '  modified:   src/App.tsx',
  '',
  'Untracked files:',
  '  src/NewFile.tsx',
  '',
  'nothing added to commit but untracked files present',
]

const diffLines = [
  '$ git diff',
  '',
  '# So sanh working dir vs staging area',
  '# Hien thi nhung gi chua duoc git add',
  '',
  '$ git diff --staged',
  '# So sanh staging area vs commit cuoi',
  '# Hien thi nhung gi sap duoc commit',
]

export function Slide06TheoDoi() {
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
        style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 80, paddingRight: 36, zIndex: 1 }}
      >
        <motion.div variants={fadeInUp} style={{ fontSize: theme.sizes.label, fontWeight: 800, letterSpacing: '0.2em', color: theme.colors.accent, textTransform: 'uppercase', marginBottom: 16 }}>
          Slide 06
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          Theo doi <span style={{ color: theme.colors.accent }}>thay doi</span>
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <code style={{ fontFamily: theme.fonts.mono, fontSize: theme.sizes.body, fontWeight: 700, color: '#3b82f6' }}>git status</code>
            <p style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.6, marginTop: 6 }}>
              Hien thi trang thai hien tai: file nao da thay doi, file nao dang o staging area, file nao chua duoc theo doi.
            </p>
          </div>
          <div>
            <code style={{ fontFamily: theme.fonts.mono, fontSize: theme.sizes.body, fontWeight: 700, color: '#8b5cf6' }}>git diff</code>
            <p style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.6, marginTop: 6 }}>
              Hien thi chi tiet noi dung thay doi. Dong do la xoa, dong xanh la them moi.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div style={{ flex: '0 0 60%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 52px 60px 28px', zIndex: 1, gap: 18 }}>
        <motion.div
          style={{ position: 'absolute', left: '40%', top: '10%', bottom: '10%', width: 1, background: 'rgba(37,99,235,0.15)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <CodeBlock lines={statusLines} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
          <CodeBlock lines={diffLines} />
        </motion.div>
      </div>
    </div>
  )
}
