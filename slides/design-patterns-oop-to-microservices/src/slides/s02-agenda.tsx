import { motion } from 'framer-motion'
import { item } from '../lib/animations'
import { T, clamp } from '../lib/theme'
import { SlideLayout } from '../components/SlideLayout'
import type { SlideProps } from './types'

const ROWS = [
  { no: '01', t: 'Design Pattern là gì?', d: 'Khuôn mẫu · lịch sử · giá trị', m: '15’' },
  { no: '02', t: '3 nhóm pattern cốt lõi trong OOP', d: 'Singleton · Factory · Adapter · Observer · Strategy', m: '30’' },
  { no: '03', t: 'Patterns trong kiến trúc Frontend', d: 'Component-based · Microfrontend · Flux', m: '15’' },
  { no: '04', t: 'Patterns trong kiến trúc Microservices', d: 'Strangler Fig · CQRS · Saga · Gateway · Circuit Breaker', m: '40’' },
  { no: '05', t: 'Case study thực tế', d: 'NestJS CQRS · RabbitMQ · Kong Gateway', m: '20’' },
  { no: '06', t: 'Lời khuyên & sai lầm cần tránh', d: 'Over-engineering · khi nào KHÔNG dùng', m: '10’' },
  { no: '07', t: 'Hỏi đáp', d: 'Q&A', m: '15’' },
]

export default function S02Agenda(_: SlideProps) {
  return (
    <SlideLayout kicker="NỘI DUNG" title="Lộ trình hôm nay">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 30, maxWidth: 1000 }}>
        {ROWS.map((r) => (
          <motion.div
            key={r.no}
            variants={item}
            style={{ display: 'flex', alignItems: 'baseline', gap: 22, padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span style={{ fontFamily: T.mono, fontSize: 14, fontWeight: 700, color: T.accentBright, width: 30 }}>
              {r.no}
            </span>
            <span style={{ fontSize: clamp('0.95rem', '1.5vw', '1.18rem'), fontWeight: 700, whiteSpace: 'nowrap' }}>
              {r.t}
            </span>
            <span
              style={{
                fontSize: clamp('0.72rem', '1.1vw', '0.85rem'),
                color: T.muted,
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {r.d}
            </span>
            <span style={{ fontFamily: T.mono, fontSize: 12.5, fontWeight: 700, color: T.muted }}>{r.m}</span>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  )
}
