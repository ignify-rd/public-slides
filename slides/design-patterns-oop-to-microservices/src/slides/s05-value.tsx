import { motion } from 'framer-motion'
import { MessagesSquare, Rocket, BookOpenCheck, ShieldCheck } from 'lucide-react'
import { item } from '../lib/animations'
import { T, clamp } from '../lib/theme'
import { SlideLayout } from '../components/SlideLayout'
import type { SlideProps } from './types'

const VALUES = [
  {
    icon: MessagesSquare,
    t: 'Từ vựng chung',
    d: 'Nói “chỗ này dùng Observer” — cả team hiểu ngay thiết kế, không cần vẽ lại từ đầu.',
  },
  {
    icon: Rocket,
    t: 'Tăng tốc phát triển',
    d: 'Không phát minh lại bánh xe: giải pháp đã được kiểm chứng, chỉ cần điều chỉnh theo ngữ cảnh.',
  },
  {
    icon: BookOpenCheck,
    t: 'Dễ đọc, dễ bảo trì',
    d: 'Cấu trúc quen thuộc giúp người mới đọc hiểu code nhanh, sửa đổi an toàn hơn.',
  },
  {
    icon: ShieldCheck,
    t: 'Hạn chế lỗi khi mở rộng',
    d: 'Ranh giới & trách nhiệm rõ ràng — thêm tính năng ít gây vỡ các phần đã chạy ổn.',
  },
]

export default function S05Value(_: SlideProps) {
  return (
    <SlideLayout kicker="PHẦN 01 · TỔNG QUAN" title="Vì sao team nên đầu tư vào patterns?">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 36, maxWidth: 1090 }}>
        {VALUES.map((v) => (
          <motion.div
            key={v.t}
            variants={item}
            style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: '10px 0' }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                border: '1px solid rgba(109,140,255,0.4)',
                background: 'rgba(67,97,238,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <v.icon size={24} color={T.accentBright} strokeWidth={1.8} />
            </div>
            <div>
              <div style={{ fontSize: clamp('0.95rem', '1.5vw', '1.2rem'), fontWeight: 800, marginBottom: 6 }}>
                {v.t}
              </div>
              <p style={{ margin: 0, fontSize: clamp('0.78rem', '1.2vw', '0.95rem'), lineHeight: 1.55, color: T.muted, maxWidth: 420 }}>
                {v.d}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  )
}
