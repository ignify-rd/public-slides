import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'
import { CodeBlock } from '../components/CodeBlock'

const rebaseLines = [
  '# Rebase feature branch len dau main',
  '$ git switch feature/login',
  '$ git rebase main',
  '',
  '# Neu co conflict, giai quyet roi tiep tuc',
  '$ git rebase --continue',
  '',
  '# Huy rebase neu gap van de',
  '$ git rebase --abort',
  '',
  '# Interactive rebase: chink sua lich su',
  '$ git rebase -i HEAD~3',
]

const comparison = [
  { label: 'git merge', pros: ['An toan, khong viet lai lich su', 'Ro rang khi nao merge xay ra'], cons: ['Lich su nhieu commit merge, kho doc'] },
  { label: 'git rebase', pros: ['Lich su commit thang hang, sach hon', 'De doc lich su du an'], cons: ['Viet lai lich su - KHONG dung voi branch da push'] },
]

export function Slide11Rebase() {
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
        style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 80, paddingRight: 36, zIndex: 1 }}
      >
        <motion.div variants={fadeInUp} style={{ fontSize: theme.sizes.label, fontWeight: 800, letterSpacing: '0.2em', color: theme.colors.accent, textTransform: 'uppercase', marginBottom: 16 }}>
          Slide 11
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          <span style={{ color: theme.colors.accent }}>Rebase</span>
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {comparison.map((c, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${theme.colors.border}`, borderRadius: 10, padding: '12px 16px', boxShadow: '0 2px 8px rgba(17,24,39,0.05)' }}>
              <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: theme.colors.accent, marginBottom: 8, fontFamily: theme.fonts.mono }}>{c.label}</div>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  {c.pros.map((p, j) => (
                    <div key={j} style={{ fontSize: '0.65rem', color: theme.colors.positive, lineHeight: 1.5, display: 'flex', gap: 4 }}>
                      <span>+</span><span>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ flex: 1 }}>
                  {c.cons.map((con, j) => (
                    <div key={j} style={{ fontSize: '0.65rem', color: theme.colors.negative, lineHeight: 1.5, display: 'flex', gap: 4 }}>
                      <span>-</span><span>{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{ marginTop: 14, background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.3)', borderRadius: 8, padding: '10px 14px' }}
        >
          <div style={{ fontSize: theme.sizes.small, color: '#dc2626', fontWeight: 700 }}>
            Luu y: Khong bao gio rebase branch da push len remote ma nguoi khac dang dung!
          </div>
        </motion.div>
      </motion.div>

      <div style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 52px 60px 28px', zIndex: 1 }}>
        <motion.div
          style={{ position: 'absolute', left: '50%', top: '10%', bottom: '10%', width: 1, background: 'rgba(37,99,235,0.15)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <CodeBlock lines={rebaseLines} />
        </motion.div>
      </div>
    </div>
  )
}
