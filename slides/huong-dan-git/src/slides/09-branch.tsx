import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'
import { CodeBlock } from '../components/CodeBlock'

const branchLines = [
  '# Xem tat ca branch',
  '$ git branch',
  '* main',
  '  feature/login',
  '',
  '# Tao branch moi',
  '$ git branch feature/register',
  '',
  '# Chuyen sang branch moi (cach cu)',
  '$ git checkout -b feature/register',
  '',
  '# Chuyen sang branch moi (cach moi)',
  '$ git switch -c feature/register',
  '',
  '# Xoa branch',
  '$ git branch -d feature/login',
]

export function Slide09Branch() {
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
          Slide 09
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          <span style={{ color: theme.colors.accent }}>Branch</span> - nhanh
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.p variants={fadeInUp} style={{ fontSize: theme.sizes.body, color: theme.colors.textMuted, lineHeight: 1.7, marginBottom: 20 }}>
          Branch la mot dong phat trien doc lap. Moi feature, bugfix nen co branch rieng - khong lam truc tiep tren <code style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent }}>main</code>.
        </motion.p>

        {/* Branch diagram */}
        <motion.div
          variants={fadeInUp}
          style={{ background: theme.colors.codeBg, borderRadius: 10, padding: '16px 20px', fontFamily: theme.fonts.mono, fontSize: '0.8rem', color: theme.colors.codeText, lineHeight: 2 }}
        >
          <div style={{ color: '#94a3b8' }}>main:    A---B---C</div>
          <div style={{ color: '#94a3b8' }}>               \</div>
          <div><span style={{ color: '#86efac' }}>feature:    </span><span style={{ color: '#93c5fd' }}>D---E</span></div>
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
          <CodeBlock lines={branchLines} />
        </motion.div>
      </div>
    </div>
  )
}
