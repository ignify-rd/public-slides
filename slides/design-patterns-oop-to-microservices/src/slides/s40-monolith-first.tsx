import { motion } from 'framer-motion'
import { Users, Boxes, Building } from 'lucide-react'
import { item, fadeScale } from '../lib/animations'
import { T, clamp } from '../lib/theme'
import { SlideLayout, Em } from '../components/SlideLayout'
import type { SlideProps } from './types'

const ROWS = [
  { q: 'Team < 10 devs?', mono: '✓ Monolith — 1 codebase, 1 deploy, họp 1 phòng', micro: '✗ chi phí điều phối nuốt chửng team' },
  { q: 'Chưa rõ domain / MVP?', mono: '✓ ranh giới module còn đổi hàng tuần — để chung dễ nắn', micro: '✗ cắt sai ranh giới = nối lại cực đau' },
  { q: 'Cần scale lệch & deploy độc lập?', mono: '△ modular monolith vẫn gánh được khá xa', micro: '✓ đây mới là lúc microservices toả sáng' },
  { q: 'Nhiều team tự chủ, release riêng?', mono: '✗ giẫm chân nhau trên 1 repo', micro: '✓ mỗi team một service, một nhịp release' },
]

export default function S40MonolithFirst(_: SlideProps) {
  return (
    <SlideLayout
      kicker="LỜI KHUYÊN 2/3"
      title={<>Microservices <Em>không phải mặc định</Em> — Monolith-first</>}
    >
      <div style={{ display: 'flex', gap: 0, marginTop: 28, maxWidth: 1120, alignItems: 'stretch' }}>
        <motion.div variants={fadeScale} style={{ flex: 1 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '10px 14px', fontSize: clamp('0.78rem', '1.2vw', '0.95rem'), color: T.muted, fontWeight: 700, width: '30%' }}>
                  Câu hỏi
                </th>
                <th style={{ textAlign: 'left', padding: '10px 14px', fontSize: clamp('0.82rem', '1.3vw', '1rem'), fontWeight: 800, width: '35%' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <Building size={17} color={T.ok} /> Monolith / Modular
                  </span>
                </th>
                <th style={{ textAlign: 'left', padding: '10px 14px', fontSize: clamp('0.82rem', '1.3vw', '1rem'), fontWeight: 800, width: '35%' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <Boxes size={17} color={T.accentBright} /> Microservices
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.q} style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '13px 14px', fontSize: clamp('0.78rem', '1.2vw', '0.95rem'), fontWeight: 700, verticalAlign: 'top' }}>{r.q}</td>
                  <td style={{ padding: '13px 14px', fontSize: clamp('0.72rem', '1.1vw', '0.88rem'), color: r.mono.startsWith('✓') ? T.ok : r.mono.startsWith('△') ? T.warn : T.muted, lineHeight: 1.45, verticalAlign: 'top' }}>
                    {r.mono}
                  </td>
                  <td style={{ padding: '13px 14px', fontSize: clamp('0.72rem', '1.1vw', '0.88rem'), color: r.micro.startsWith('✓') ? T.ok : T.muted, lineHeight: 1.45, verticalAlign: 'top' }}>
                    {r.micro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
      <motion.div
        variants={item}
        style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12, fontFamily: T.mono, fontSize: clamp('0.72rem', '1.1vw', '0.88rem'), color: T.accentBright }}
      >
        <Users size={16} />
        Định luật Conway: kiến trúc sẽ copy cấu trúc team — chưa có nhiều team thì đừng vẽ nhiều service
      </motion.div>
    </SlideLayout>
  )
}
