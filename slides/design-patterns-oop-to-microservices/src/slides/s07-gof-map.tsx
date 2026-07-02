import { motion } from 'framer-motion'
import { Hammer, Blocks, Waypoints } from 'lucide-react'
import { item } from '../lib/animations'
import { T, clamp } from '../lib/theme'
import { SlideLayout } from '../components/SlideLayout'
import type { SlideProps } from './types'

const GROUPS = [
  {
    icon: Hammer,
    name: 'Creational',
    vi: 'Khởi tạo',
    q: '“Đối tượng được tạo ra như thế nào?”',
    patterns: [
      { n: 'Singleton', deep: true },
      { n: 'Factory Method', deep: true },
      { n: 'Abstract Factory' },
      { n: 'Builder' },
      { n: 'Prototype' },
    ],
  },
  {
    icon: Blocks,
    name: 'Structural',
    vi: 'Cấu trúc',
    q: '“Ghép các thành phần thành cấu trúc lớn ra sao?”',
    patterns: [
      { n: 'Adapter', deep: true },
      { n: 'Composite' },
      { n: 'Facade' },
      { n: 'Proxy' },
      { n: 'Decorator' },
    ],
  },
  {
    icon: Waypoints,
    name: 'Behavioral',
    vi: 'Hành vi',
    q: '“Các đối tượng giao tiếp & chia trách nhiệm thế nào?”',
    patterns: [
      { n: 'Observer', deep: true },
      { n: 'Strategy', deep: true },
      { n: 'Command' },
      { n: 'Chain of Responsibility' },
      { n: 'State' },
    ],
  },
]

export default function S07GofMap(_: SlideProps) {
  return (
    <SlideLayout kicker="PHẦN 02 · OOP PATTERNS" title="Bản đồ 3 nhóm GoF">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 26, marginTop: 32 }}>
        {GROUPS.map((g) => (
          <motion.div key={g.name} variants={item} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <g.icon size={22} color={T.accentBright} strokeWidth={1.8} />
              <span style={{ fontSize: clamp('1rem', '1.7vw', '1.3rem'), fontWeight: 800 }}>{g.name}</span>
              <span style={{ fontFamily: T.mono, fontSize: 11.5, color: T.muted }}>{g.vi}</span>
            </div>
            <p style={{ margin: '0 0 16px', fontSize: clamp('0.72rem', '1.1vw', '0.86rem'), color: T.muted, lineHeight: 1.5, minHeight: 42 }}>
              {g.q}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
              {g.patterns.map((p) => (
                <span
                  key={p.n}
                  style={{
                    padding: '9px 16px',
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: p.deep ? 800 : 500,
                    border: p.deep ? `1px solid rgba(109,140,255,0.75)` : '1px solid rgba(255,255,255,0.13)',
                    background: p.deep ? 'rgba(67,97,238,0.18)' : 'rgba(255,255,255,0.03)',
                    color: p.deep ? '#fff' : T.muted,
                    boxShadow: p.deep ? '0 0 18px rgba(67,97,238,0.28)' : undefined,
                  }}
                >
                  {p.n}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={item}
        style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, fontFamily: T.mono, fontSize: 12, color: T.muted }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: 'rgba(67,97,238,0.6)',
            border: '1px solid rgba(109,140,255,0.9)',
            display: 'inline-block',
          }}
        />
        5 pattern viền xanh — mổ xẻ chi tiết ngay sau đây, mỗi pattern gồm: nỗi đau → cơ chế
      </motion.div>
    </SlideLayout>
  )
}
