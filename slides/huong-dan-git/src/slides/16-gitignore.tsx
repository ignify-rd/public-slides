import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const ignoreExample = [
  '# File moi truong (SECRET)',
  '.env',
  '.env.local',
  '.env.production',
  '',
  '# Thu muc dependencies',
  'node_modules/',
  'vendor/',
  '',
  '# Output build',
  'dist/',
  'build/',
  '.next/',
  '',
  '# File he dieu hanh',
  '.DS_Store        # macOS',
  'Thumbs.db        # Windows',
  '',
  '# File IDE/Editor',
  '.idea/',
  '.vscode/settings.json',
  '',
  '# Log files',
  '*.log',
  'npm-debug.log*',
]

const rules = [
  { pattern: 'file.txt', desc: 'Ignore dung file.txt' },
  { pattern: '*.log', desc: 'Ignore tat ca file .log' },
  { pattern: 'dir/', desc: 'Ignore ca thu muc dir' },
  { pattern: '!important.log', desc: 'KHONG ignore (exception)' },
  { pattern: '**/temp', desc: 'Ignore moi noi trong repo' },
]

export function Slide16Gitignore() {
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
          Slide 16
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          <span style={{ color: theme.colors.accent }}>.gitignore</span>
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.p variants={fadeInUp} style={{ fontSize: theme.sizes.body, color: theme.colors.textMuted, lineHeight: 1.7, marginBottom: 18 }}>
          File .gitignore chi dinh nhung file/thu muc Git se KHONG theo doi. Dat o goc repo.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.text, marginBottom: 10 }}>Cac pattern pho bien:</div>
          {rules.map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 6, alignItems: 'center' }}>
              <code style={{ fontFamily: theme.fonts.mono, fontSize: '0.7rem', color: theme.colors.accent, background: theme.colors.accentDim, padding: '2px 8px', borderRadius: 4, minWidth: 130 }}>{r.pattern}</code>
              <span style={{ fontSize: '0.68rem', color: theme.colors.textMuted }}>{r.desc}</span>
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
          <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.text, marginBottom: 10 }}>Vi du .gitignore (Node.js project):</div>
          <div style={{ background: theme.colors.codeBg, borderRadius: 10, padding: '14px 18px', fontFamily: theme.fonts.mono, fontSize: '0.72rem', lineHeight: 1.6, maxHeight: 400, overflowY: 'auto' }}>
            {ignoreExample.map((line, i) => (
              <div key={i} style={{ color: line.startsWith('#') ? theme.colors.codeComment : line === '' ? 'transparent' : theme.colors.codeString }}>
                {line === '' ? '\u00a0' : line}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
