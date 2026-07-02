import { motion } from 'framer-motion'
import { Building2, BookOpen, Boxes } from 'lucide-react'
import { item } from '../lib/animations'
import { T, clamp } from '../lib/theme'
import { SlideLayout } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet } from '../components/diagram'
import type { SlideProps } from './types'

const MILESTONES = [
  {
    x: 90,
    year: '1977',
    icon: Building2,
    title: 'Christopher Alexander',
    desc: '“A Pattern Language” — khuôn mẫu trong kiến trúc xây dựng: mỗi pattern mô tả một vấn đề và lời giải tái dùng được.',
  },
  {
    x: 490,
    year: '1994',
    icon: BookOpen,
    title: 'Gang of Four (GoF)',
    desc: '“Design Patterns: Elements of Reusable Object-Oriented Software” — 23 patterns kinh điển, chia 3 nhóm Creational / Structural / Behavioral.',
  },
  {
    x: 890,
    year: 'NAY',
    icon: Boxes,
    title: 'Kỷ nguyên phân tán',
    desc: 'Patterns vượt khỏi class & object: kiến trúc frontend, microservices, cloud — Saga, CQRS, Circuit Breaker…',
  },
]

export default function S04History(_: SlideProps) {
  const LINE_Y = 96
  return (
    <SlideLayout kicker="PHẦN 01 · TỔNG QUAN" title="50 năm: từ toà nhà đến hệ phân tán">
      <div style={{ marginTop: 44 }}>
        <FlowCanvas
          w={1080}
          h={380}
          wires={[
            { pts: [{ x: 40, y: LINE_Y }, { x: 1040, y: LINE_Y }], arrow: true, color: 'rgba(255,255,255,0.18)' },
          ]}
        >
          <Packet pts={[{ x: 40, y: LINE_Y }, { x: 1040, y: LINE_Y }]} dur={5} repeatDelay={1.2} size={11} />
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              variants={item}
              style={{ position: 'absolute', left: m.x, top: 0, width: 300 }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: LINE_Y - 7,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: i === 2 ? T.accent : '#0a0a0a',
                  border: `3px solid ${T.accentBright}`,
                  boxShadow: i === 2 ? `0 0 18px ${T.accent}` : undefined,
                }}
              />
              <div
                style={{
                  fontFamily: T.mono,
                  fontSize: clamp('1.1rem', '2vw', '1.6rem'),
                  fontWeight: 700,
                  color: T.accentBright,
                  marginLeft: -4,
                  marginBottom: 52,
                }}
              >
                {m.year}
              </div>
              <div style={{ marginTop: 46, paddingRight: 40 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <m.icon size={20} color={T.accentBright} strokeWidth={1.8} />
                  <span style={{ fontSize: clamp('0.9rem', '1.4vw', '1.1rem'), fontWeight: 800 }}>{m.title}</span>
                </div>
                <p style={{ margin: 0, fontSize: clamp('0.74rem', '1.15vw', '0.9rem'), lineHeight: 1.55, color: T.muted }}>
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </FlowCanvas>
      </div>
    </SlideLayout>
  )
}
