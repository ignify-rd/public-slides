import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'
import { CodeBlock } from '../components/CodeBlock'

const mergeLines = [
  '# Chuyen ve branch muon merge vao',
  '$ git switch main',
  '',
  '# Merge feature branch vao main',
  '$ git merge feature/login',
  '',
  '# Merge voi commit message ro rang',
  '$ git merge --no-ff feature/login',
  '-m "merge: tich hop tinh nang dang nhap"',
]

const mergeTypes = [
  {
    name: 'Fast-forward',
    color: '#10b981',
    diagram: ['main:    A---B', '                  \\', 'feature:   C---D', '', 'Sau merge:', 'main:    A---B---C---D'],
    desc: 'Dung khi main khong co commit moi. Git chi dich chuyen con tro.',
  },
  {
    name: '3-way merge',
    color: '#8b5cf6',
    diagram: ['main:    A---B---E---M', '               \\       /', 'feature:   C---D'],
    desc: 'Dung khi ca hai branch deu co commit moi. Git tao them commit M.',
  },
]

export function Slide10Merge() {
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
          Slide 10
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          <span style={{ color: theme.colors.accent }}>Merge</span> - gop nhanh
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {mergeTypes.map((t, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${theme.colors.border}`, borderRadius: 10, padding: '12px 16px', boxShadow: '0 2px 8px rgba(17,24,39,0.05)' }}>
              <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: t.color, marginBottom: 4 }}>{t.name}</div>
              <div style={{ background: theme.colors.codeBg, borderRadius: 6, padding: '8px 12px', fontFamily: theme.fonts.mono, fontSize: '0.7rem', color: theme.colors.codeText, marginBottom: 6 }}>
                {t.diagram.map((line, j) => <div key={j}>{line}</div>)}
              </div>
              <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.5 }}>{t.desc}</div>
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
          <CodeBlock lines={mergeLines} />
        </motion.div>
      </div>
    </div>
  )
}
