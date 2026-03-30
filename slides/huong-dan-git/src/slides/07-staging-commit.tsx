import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'
import { CodeBlock } from '../components/CodeBlock'

const addLines = [
  '# Them mot file cu the',
  '$ git add src/App.tsx',
  '',
  '# Them nhieu file',
  '$ git add src/App.tsx src/index.css',
  '',
  '# Them tat ca file da thay doi',
  '$ git add .',
  '',
  '# Bo staged (hoan tac git add)',
  '$ git restore --staged src/App.tsx',
]

const commitLines = [
  '# Commit voi message ngan',
  '$ git commit -m "feat: them trang dang nhap"',
  '',
  '# Commit va mo editor de viet message dai',
  '$ git commit',
  '',
  '# Good commit message format:',
  '# <type>: <mo ta ngan gon>',
  '# feat | fix | docs | refactor | test',
]

export function Slide07StagingCommit() {
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
          Slide 07
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          Staging &amp; <span style={{ color: theme.colors.accent }}>Commit</span>
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { step: '1', label: 'Chinh sua code', color: '#3b82f6' },
            { step: '2', label: 'git add (staging)', color: '#8b5cf6' },
            { step: '3', label: 'git commit', color: '#10b981' },
            { step: '4', label: 'Lap lai', color: theme.colors.accent },
          ].map((s) => (
            <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'white' }}>{s.step}</span>
              </div>
              <span style={{ fontSize: theme.sizes.small, color: theme.colors.text, fontWeight: 500, fontFamily: theme.fonts.mono }}>{s.label}</span>
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
          <CodeBlock lines={addLines} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
          <CodeBlock lines={commitLines} />
        </motion.div>
      </div>
    </div>
  )
}
