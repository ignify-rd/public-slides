import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'
import { CodeBlock } from '../components/CodeBlock'

const stashLines = [
  '# Luu tam thay doi chua commit',
  '$ git stash',
  '',
  '# Luu voi ten mo ta',
  '$ git stash push -m "dang lam login form"',
  '',
  '# Xem danh sach stash',
  '$ git stash list',
  'stash@{0}: On feature: dang lam login form',
  'stash@{1}: WIP on main: sua bug header',
  '',
  '# Lay lai stash gan nhat va xoa khoi list',
  '$ git stash pop',
  '',
  '# Lay lai stash cu the (khong xoa)',
  '$ git stash apply stash@{1}',
  '',
  '# Xoa stash',
  '$ git stash drop stash@{0}',
]

export function Slide14Stash() {
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
          Slide 14
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          <span style={{ color: theme.colors.accent }}>Stash</span> - tam giu
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.p variants={fadeInUp} style={{ fontSize: theme.sizes.body, color: theme.colors.textMuted, lineHeight: 1.7, marginBottom: 20 }}>
          Stash giup ban luu tam thay doi chua commit de chuyen sang lam viec khac, sau do quay lai tiep tuc.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{ background: theme.colors.accentDim, border: `1px solid ${theme.colors.borderAccent}`, borderRadius: 10, padding: '14px 18px' }}
        >
          <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.accent, marginBottom: 8 }}>Khi nao dung stash?</div>
          {[
            'Can switch branch gap de fix hotfix',
            'Can pull code moi nhung co thay doi dang do',
            'Muon thu nghiem cach lam khac nhung giu lai thay doi hien tai',
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: theme.colors.accent, fontWeight: 700, flexShrink: 0 }}>-</span>
              <span style={{ fontSize: theme.sizes.small, color: theme.colors.text, lineHeight: 1.5 }}>{s}</span>
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
          <CodeBlock lines={stashLines} />
        </motion.div>
      </div>
    </div>
  )
}
