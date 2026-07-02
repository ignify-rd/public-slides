import { motion } from 'framer-motion'
import { Network, HeartCrack, GitCompareArrows, Radar } from 'lucide-react'
import { item } from '../lib/animations'
import { T, clamp } from '../lib/theme'
import { SlideLayout, Em } from '../components/SlideLayout'
import type { SlideProps } from './types'

const CHALLENGES = [
  {
    icon: Network,
    t: 'Điều phối dịch vụ',
    d: '1 nghiệp vụ = 5 service gọi nhau qua mạng. Ai gọi ai, theo thứ tự nào, timeout thì sao?',
  },
  {
    icon: HeartCrack,
    t: 'Khả năng chịu lỗi',
    d: 'Mạng LUÔN có lúc hỏng. 1 service chậm có thể kéo sập cả chuỗi phía trước nó.',
  },
  {
    icon: GitCompareArrows,
    t: 'Nhất quán dữ liệu phân tán',
    d: 'Mỗi service một database — không còn transaction ACID chung để dựa vào.',
  },
  {
    icon: Radar,
    t: 'Khám phá dịch vụ',
    d: 'Container sinh ra & chết đi liên tục, IP đổi từng phút — hard-code địa chỉ là tự sát.',
  },
]

export default function S24MsWhy(_: SlideProps) {
  return (
    <SlideLayout
      kicker="PHẦN 04 · MICROSERVICES"
      title={<>Trong monolith, <Em>function call</Em>. Trong microservices, <Em>network call</Em> — mọi thứ đổi khác</>}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px 44px', marginTop: 34, maxWidth: 1100 }}>
        {CHALLENGES.map((c) => (
          <motion.div key={c.t} variants={item} style={{ display: 'flex', gap: 18 }}>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 12,
                border: '1px solid rgba(255,82,82,0.4)',
                background: 'rgba(255,82,82,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <c.icon size={23} color={T.danger} strokeWidth={1.8} />
            </div>
            <div>
              <div style={{ fontSize: clamp('0.95rem', '1.5vw', '1.18rem'), fontWeight: 800, marginBottom: 6 }}>{c.t}</div>
              <p style={{ margin: 0, fontSize: clamp('0.78rem', '1.2vw', '0.95rem'), color: T.muted, lineHeight: 1.55 }}>
                {c.d}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p
        variants={item}
        style={{
          marginTop: 'auto',
          fontFamily: T.mono,
          fontSize: clamp('0.75rem', '1.15vw', '0.9rem'),
          color: T.accentBright,
        }}
      >
        → Mỗi thách thức sinh ra một họ pattern. Đi lần lượt từng nhóm.
      </motion.p>
    </SlideLayout>
  )
}
