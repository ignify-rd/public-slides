import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

const conflictExample = [
  '<<<<<<< HEAD (branch hien tai)',
  'function greet() {',
  '  return "Xin chao!";',
  '}',
  '=======',
  'function greet() {',
  '  return "Hello World!";',
  '}',
  '>>>>>>> feature/i18n',
]

const steps = [
  { num: '1', title: 'Nhan biet conflict', desc: 'Git thong bao sau khi merge/rebase that bai. Dung git status de xem file nao bi conflict.' },
  { num: '2', title: 'Mo file va sua', desc: 'Tim cac marker <<<<<<, ======, >>>>>>. Giu lai phan code dung, xoa marker.' },
  { num: '3', title: 'Danh dau da giai quyet', desc: 'Sau khi sua xong, dung git add <file> de danh dau da giai quyet conflict.' },
  { num: '4', title: 'Tiep tuc', desc: 'Chay git commit (neu merge) hoac git rebase --continue (neu rebase).' },
]

export function Slide12Conflict() {
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
        style={{ flex: '0 0 55%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 80, paddingRight: 36, zIndex: 1 }}
      >
        <motion.div variants={fadeInUp} style={{ fontSize: theme.sizes.label, fontWeight: 800, letterSpacing: '0.2em', color: theme.colors.accent, textTransform: 'uppercase', marginBottom: 16 }}>
          Slide 12
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          Giai quyet <span style={{ color: theme.colors.accent }}>conflict</span>
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {steps.map((s) => (
            <div key={s.num} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: theme.colors.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'white' }}>{s.num}</span>
              </div>
              <div>
                <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.text, marginBottom: 2 }}>{s.title}</div>
                <div style={{ fontSize: '0.68rem', color: theme.colors.textMuted, lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div style={{ flex: '0 0 45%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 52px 60px 24px', zIndex: 1 }}>
        <motion.div
          style={{ position: 'absolute', left: '55%', top: '10%', bottom: '10%', width: 1, background: 'rgba(37,99,235,0.15)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.text, marginBottom: 10 }}>Vi du conflict trong file:</div>
          <div style={{ background: theme.colors.codeBg, borderRadius: 10, padding: '16px 18px', fontFamily: theme.fonts.mono, fontSize: '0.75rem', lineHeight: 1.7 }}>
            {conflictExample.map((line, i) => {
              const isHead = line.startsWith('<<<<')
              const isSep = line.startsWith('====')
              const isFeat = line.startsWith('>>>>')
              return (
                <div key={i} style={{ color: isHead || isFeat ? '#f87171' : isSep ? '#fbbf24' : theme.colors.codeText }}>
                  {line}
                </div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          style={{ marginTop: 16, background: theme.colors.accentDim, border: `1px solid ${theme.colors.borderAccent}`, borderRadius: 8, padding: '12px 16px' }}
        >
          <div style={{ fontSize: theme.sizes.small, color: theme.colors.text, lineHeight: 1.6 }}>
            <strong>Tip:</strong> Dung VS Code hoac IntelliJ - co giao dien do ho conflict truc quan hon.
          </div>
        </motion.div>
      </div>
    </div>
  )
}
