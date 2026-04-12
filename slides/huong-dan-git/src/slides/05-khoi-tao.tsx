import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'
import { CodeBlock } from '../components/CodeBlock'

const initLines = [
  '# Tao repo moi trong thu muc hien tai',
  '$ git init',
  '',
  '# Ket qua: tao thu muc .git/',
  'Initialized empty Git repository in /my-project/.git/',
]

const cloneLines = [
  '# Clone repo tu remote URL',
  '$ git clone https://github.com/user/repo.git',
  '',
  '# Clone vao thu muc ten khac',
  '$ git clone https://github.com/user/repo.git ten-thu-muc',
  '',
  '# Sau khi clone, cd vao thu muc',
  '$ cd repo',
]

export function Slide05KhoiTao() {
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
          Slide 05
        </motion.div>
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: theme.colors.text, marginBottom: 10, lineHeight: 1.15 }}>
          Khoi tao <span style={{ color: theme.colors.accent }}>repo</span>
        </motion.h2>
        <motion.div variants={fadeInUp} style={{ width: 40, height: 2, background: theme.colors.accent, marginBottom: 20 }} />

        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ background: 'white', border: `1px solid ${theme.colors.border}`, borderRadius: 10, padding: '14px 18px', boxShadow: '0 2px 8px rgba(17,24,39,0.05)' }}>
            <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: '#3b82f6', marginBottom: 6, fontFamily: theme.fonts.mono }}>git init</div>
            <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.6 }}>
              Tao repo moi trai. Dung khi bat dau du an tu dau tren may minh.
            </div>
          </div>
          <div style={{ background: 'white', border: `1px solid ${theme.colors.border}`, borderRadius: 10, padding: '14px 18px', boxShadow: '0 2px 8px rgba(17,24,39,0.05)' }}>
            <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: '#10b981', marginBottom: 6, fontFamily: theme.fonts.mono }}>git clone</div>
            <div style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, lineHeight: 1.6 }}>
              Sao chep repo tu remote (GitHub, GitLab...) ve may. Dung khi tham gia du an co san.
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div style={{ flex: '0 0 55%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 52px 60px 28px', zIndex: 1, gap: 18 }}>
        <motion.div
          style={{ position: 'absolute', left: '45%', top: '10%', bottom: '10%', width: 1, background: 'rgba(37,99,235,0.15)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: '#3b82f6', marginBottom: 8, fontFamily: theme.fonts.mono }}>git init</div>
          <CodeBlock lines={initLines} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
          <div style={{ fontSize: theme.sizes.small, fontWeight: 700, color: '#10b981', marginBottom: 8, fontFamily: theme.fonts.mono }}>git clone</div>
          <CodeBlock lines={cloneLines} />
        </motion.div>
      </div>
    </div>
  )
}
