import { motion } from 'framer-motion'
import { Hammer, Copy, Layers, TreePine, DoorOpen, ShieldQuestion, Terminal, Link2 } from 'lucide-react'
import { item } from '../lib/animations'
import { T, clamp } from '../lib/theme'
import { SlideLayout } from '../components/SlideLayout'
import type { SlideProps } from './types'

const OTHERS = [
  { icon: Hammer, n: 'Builder', g: 'Creational', d: 'Lắp đối tượng phức tạp từng bước — pizza.size().cheese().build()' },
  { icon: Copy, n: 'Prototype', g: 'Creational', d: 'Nhân bản từ object mẫu thay vì new từ đầu' },
  { icon: Layers, n: 'Abstract Factory', g: 'Creational', d: 'Nhà máy của các nhà máy — tạo cả HỌ sản phẩm cùng bộ' },
  { icon: TreePine, n: 'Composite', g: 'Structural', d: 'Cây bộ phận–toàn thể: file & folder xử lý như nhau' },
  { icon: DoorOpen, n: 'Facade', g: 'Structural', d: '1 cửa đơn giản che cả hệ thống con rối rắm' },
  { icon: ShieldQuestion, n: 'Proxy', g: 'Structural', d: 'Người đại diện: chặn, cache, kiểm quyền trước khi tới object thật' },
  { icon: Terminal, n: 'Command', g: 'Behavioral', d: 'Gói request thành object — queue, log, undo được' },
  { icon: Link2, n: 'Chain of Responsibility', g: 'Behavioral', d: 'Chuyền request dọc chuỗi handler tới khi có người xử lý' },
]

export default function S18GofOthers(_: SlideProps) {
  return (
    <SlideLayout kicker="PHẦN 02 · OOP PATTERNS" title="Các gương mặt còn lại — biết tên để tra đúng lúc">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 40px', marginTop: 30 }}>
        {OTHERS.map((o) => (
          <motion.div key={o.n} variants={item} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <o.icon size={20} color={T.accentBright} strokeWidth={1.8} style={{ marginTop: 3, flexShrink: 0 }} />
            <div>
              <span style={{ fontSize: clamp('0.88rem', '1.35vw', '1.05rem'), fontWeight: 800 }}>{o.n}</span>
              <span style={{ fontFamily: T.mono, fontSize: 10.5, color: T.muted, marginLeft: 10, letterSpacing: '0.08em' }}>
                {o.g.toUpperCase()}
              </span>
              <p style={{ margin: '4px 0 0', fontSize: clamp('0.74rem', '1.15vw', '0.9rem'), color: T.muted, lineHeight: 1.5 }}>
                {o.d}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  )
}
