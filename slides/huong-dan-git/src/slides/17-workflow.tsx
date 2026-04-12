import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'
import { CodeBlock } from '../components/CodeBlock'

const workflowLines = [
  '# 1. Cap nhat main moi nhat',
  '$ git switch main',
  '$ git pull origin main',
  '',
  '# 2. Tao branch moi cho task',
  '$ git switch -c feature/RD-123-them-bieu-do',
  '',
  '# 3. Lam viec, commit thuong xuyen',
  '$ git add .',
  '$ git commit -m "feat: them component bieu do"',
  '',
  '# 4. Cap nhat main moi nhat truoc khi push',
  '$ git fetch origin',
  '$ git rebase origin/main',
  '',
  '# 5. Push va tao Pull Request',
  '$ git push -u origin feature/RD-123-them-bieu-do',
]

const tips = [
  'Commit som va thuong xuyen - moi commit la mot checkpoint',
  'Viet commit message ro rang theo convention',
  'Review diff truoc khi commit: git diff --staged',
  'Dong bo main hang ngay de tranh conflict lon',
]

export function Slide17Workflow() {
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
        style={{ flex: '0 0 42%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 80, paddingRight: 32, zIndex: 1 }}
      >
        <motion.div variants={fadeInUp} style={{ fontSize: theme.sizes.label, fontWeight: 800, letterSpacing: '0.2em', color: theme.colors.accent, textTransform: 'uppercase', marginBottom: 16 }}>
          Slide 17
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          Quy trinh lam viec <span style={{ color: theme.colors.accent }}>thuc te</span>
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.div variants={fadeInUp}>
          <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.text, marginBottom: 10 }}>Best practices:</div>
          {tips.map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: theme.colors.accentDim, border: `1.5px solid ${theme.colors.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <span style={{ fontSize: '0.6rem', fontWeight: 800, color: theme.colors.accent }}>{i + 1}</span>
              </div>
              <span style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.5 }}>{tip}</span>
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
          <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.text, marginBottom: 10 }}>Feature Branch Workflow:</div>
          <CodeBlock lines={workflowLines} />
        </motion.div>
      </div>
    </div>
  )
}
