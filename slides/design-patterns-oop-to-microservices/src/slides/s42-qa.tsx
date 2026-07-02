import { motion } from 'framer-motion'
import { container, item } from '../lib/animations'
import { T, clamp } from '../lib/theme'
import type { SlideProps } from './types'

const RECAP = [
  'Singleton', 'Factory', 'Adapter', 'Observer', 'Strategy',
  'Component', 'Flux', 'Strangler Fig', 'CQRS', 'Event Sourcing',
  'Saga', 'API Gateway', 'Discovery', 'Circuit Breaker', 'Bulkhead',
]

export default function S42Qa(_: SlideProps) {
  return (
    <div className="slide-bg slide-grid" style={{ width: 1280, height: 720, display: 'flex', overflow: 'hidden' }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 84px' }}
      >
        <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
          <div style={{ width: 44, height: 4, background: T.accent }} />
          <span style={{ fontFamily: T.mono, fontSize: clamp('0.7rem', '1.1vw', '0.85rem'), fontWeight: 700, letterSpacing: '0.24em', color: T.accentBright }}>
            PHẦN 07 · 15 PHÚT
          </span>
        </motion.div>
        <motion.h1
          variants={item}
          style={{ margin: 0, fontSize: clamp('3.4rem', '8vw', '6.4rem'), fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}
        >
          Hỏi & Đáp
        </motion.h1>
        <motion.p variants={item} style={{ margin: '24px 0 0', fontSize: clamp('0.95rem', '1.6vw', '1.2rem'), color: T.muted, maxWidth: 560, lineHeight: 1.55 }}>
          Câu hỏi hay nhất thường bắt đầu bằng: <span style={{ color: T.ink, fontWeight: 700 }}>“Ở dự án của em đang gặp…”</span>
        </motion.p>
        <motion.div variants={item} style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginTop: 44, maxWidth: 760 }}>
          {RECAP.map((p) => (
            <span
              key={p}
              style={{
                padding: '7px 15px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.13)',
                background: 'rgba(255,255,255,0.03)',
                fontFamily: T.mono,
                fontSize: 11.5,
                color: T.muted,
              }}
            >
              {p}
            </span>
          ))}
        </motion.div>
        <motion.p variants={item} style={{ margin: '40px 0 0', fontFamily: T.mono, fontSize: 12.5, color: 'rgba(139,147,167,0.7)' }}>
          15 patterns · 3 cấp độ: code → frontend → hệ phân tán — cảm ơn mọi người!
        </motion.p>
      </motion.div>
    </div>
  )
}
