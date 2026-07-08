import { motion } from 'framer-motion'
import { container, item } from '../lib/animations'

const takeaways = [
  'Bắt đầu ngay: viết CLAUDE.md + ép agent lập plan trước khi code.',
  'Nối verify (test/lint/typecheck/screenshot) — để agent tự chấm, tự sửa.',
  'Cắm tool qua MCP: Playwright để test UI, Codegraph để điều hướng repo lớn.',
  'Spec-Kit cho task lớn · subagent để chia việc · /clear giữ context sạch.',
]

export function SlideClosing() {
  return (
    <div className="w-full h-full relative flex flex-col justify-center" style={{ padding: '0 96px' }}>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="tag-mono" style={{ marginBottom: 20 }}>
          <span style={{ color: 'var(--green-dim)' }}>{'>'}</span> Tổng kết
        </motion.div>

        <motion.h2
          variants={item}
          className="glow-text"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.06, maxWidth: '20ch' }}
        >
          Đừng chỉ prompt giỏi hơn.{' '}
          <span style={{ color: 'var(--green)' }}>Hãy dựng harness tốt hơn.</span>
        </motion.h2>

        <div className="flex flex-col" style={{ gap: 12, marginTop: 34, maxWidth: '72ch' }}>
          {takeaways.map((t, i) => (
            <motion.div key={i} variants={item} className="flex items-start gap-3">
              <span style={{ color: 'var(--green)', fontSize: '0.8rem', marginTop: 3 }}>▸</span>
              <span style={{ fontSize: 'var(--body-size)', color: 'var(--text-dim)', lineHeight: 1.55 }}>{t}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={item}
          className="flex items-center gap-3"
          style={{ marginTop: 40, fontSize: '0.8rem', color: 'var(--text)' }}
        >
          weight → prompt → context →{' '}
          <span style={{ color: 'var(--green)', fontWeight: 700 }}>harness</span>
          <span className="cursor-blink" />
        </motion.div>
      </motion.div>
    </div>
  )
}
