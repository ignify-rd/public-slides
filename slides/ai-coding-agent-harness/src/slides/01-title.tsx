import { motion } from 'framer-motion'
import { container, item } from '../lib/animations'
import { useReveal } from '../components/anim'

export function SlideTitle() {
  const boot = useReveal(3, { delay: 250, step: 340 })
  return (
    <div className="w-full h-full relative flex flex-col justify-center" style={{ padding: '0 96px' }}>
      {/* faint boot log, decorative */}
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: 96,
          right: 96,
          fontSize: '0.62rem',
          color: 'var(--text-faint)',
          lineHeight: 1.7,
          opacity: 0.5,
        }}
      >
        <div style={{ opacity: boot > 0 ? 1 : 0, transition: 'opacity 0.2s ease' }}>
          [ ok ] loading model weights ........................ done
        </div>
        <div style={{ opacity: boot > 1 ? 1 : 0, transition: 'opacity 0.2s ease' }}>
          [ ok ] mounting context window ...................... done
        </div>
        <div style={{ opacity: boot > 2 ? 1 : 0, transition: 'opacity 0.2s ease' }}>
          [ <span style={{ color: 'var(--green)' }}>run</span> ] starting agent harness<span className="cursor-blink" />
        </div>
      </div>

      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="tag-mono" style={{ marginBottom: 22 }}>
          <span style={{ color: 'var(--green-dim)' }}>{'>'}</span> Cẩm nang thực chiến · AI Agent × Coding
        </motion.div>

        <motion.h1
          variants={item}
          className="glow-text"
          style={{
            fontSize: 'var(--title-size)',
            fontWeight: 800,
            lineHeight: 0.98,
            letterSpacing: '-0.03em',
            color: '#fff',
          }}
        >
          Từ <span style={{ color: 'var(--green)' }}>Weight</span> đến{' '}
          <span style={{ color: 'var(--green)' }}>Harness</span>
        </motion.h1>
        <motion.h1
          variants={item}
          style={{
            fontSize: 'var(--title-size)',
            fontWeight: 300,
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            color: 'var(--text-dim)',
            marginTop: 6,
          }}
        >
          cách dev dùng AI để code
        </motion.h1>

        <motion.p
          variants={item}
          style={{
            fontSize: 'var(--subtitle-size)',
            color: 'var(--text-dim)',
            marginTop: 30,
            maxWidth: '58ch',
            lineHeight: 1.6,
          }}
        >
          Workflow, tool opensource & cách{' '}
          <span style={{ color: 'var(--text)' }}>điều phối AI Agent</span>{' '}
          để code — có command & config chạy được ngay.
        </motion.p>

        <motion.div
          variants={item}
          className="flex items-center gap-4"
          style={{ marginTop: 40, fontSize: '0.7rem', color: 'var(--text-faint)', letterSpacing: '0.1em' }}
        >
          <span>spec-kit</span>
          <span style={{ color: 'var(--green-dim)' }}>·</span>
          <span>MCP</span>
          <span style={{ color: 'var(--green-dim)' }}>·</span>
          <span>Playwright</span>
          <span style={{ color: 'var(--green-dim)' }}>·</span>
          <span>Codegraph</span>
          <span style={{ color: 'var(--green-dim)' }}>·</span>
          <span>Impeccable</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
