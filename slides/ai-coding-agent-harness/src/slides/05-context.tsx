import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { Tag, item } from '../components/primitives'
import { Check, X } from 'lucide-react'

const dos = [
  'Trỏ thẳng file liên quan: `@src/auth.ts` thay vì tả bằng lời.',
  '`/clear` khi đổi task — reset context, tránh nhiễu phiên cũ.',
  'Dùng subagent cho việc phụ → giữ context chính sạch.',
  'Codegraph / index để agent tra “ai gọi gì” thay vì đọc cả repo.',
]

const donts = [
  'Nhồi cả repo vào context — “càng nhiều” ≠ “càng tốt”.',
  'Để lịch sử chat phình vô hạn → context rot, agent lú.',
  'Dán log/JSON khổng lồ raw — tóm tắt hoặc trỏ file.',
  'Trộn 3 task trong 1 phiên → agent lẫn mục tiêu.',
]

export function SlideContextEng() {
  return (
    <SlideLayout path="~/context/engineering" badge="CONTEXT ENG.">
      <Tag>Cho agent thấy ĐÚNG thứ — không phải MỌI thứ</Tag>
      <motion.h2
        variants={item}
        style={{ fontSize: 'var(--h2-size)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: 10 }}
      >
        Context là ngân sách — <span style={{ color: 'var(--green)' }}>tiêu khôn</span>
      </motion.h2>

      <div className="grid flex-1 min-h-0" style={{ gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 30 }}>
        {/* DO */}
        <motion.div variants={item} className="flex flex-col" style={{ padding: '24px 26px', border: '1px solid rgba(57,211,83,0.28)', background: 'rgba(57,211,83,0.05)', gap: 14 }}>
          <div className="flex items-center gap-2">
            <Check size={18} color="var(--green)" />
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.14em', color: 'var(--green)' }}>NÊN</span>
          </div>
          {dos.map((d, i) => (
            <div key={i} className="flex items-start gap-3">
              <span style={{ color: 'var(--green)', fontSize: '0.75rem', marginTop: 2 }}>▸</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text)', lineHeight: 1.5 }}>{d}</span>
            </div>
          ))}
        </motion.div>

        {/* DON'T */}
        <motion.div variants={item} className="flex flex-col" style={{ padding: '24px 26px', border: '1px solid rgba(248,81,73,0.3)', background: 'rgba(248,81,73,0.04)', gap: 14 }}>
          <div className="flex items-center gap-2">
            <X size={18} color="var(--red)" />
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.14em', color: 'var(--red)' }}>TRÁNH</span>
          </div>
          {donts.map((d, i) => (
            <div key={i} className="flex items-start gap-3">
              <span style={{ color: 'var(--red)', fontSize: '0.75rem', marginTop: 2 }}>✕</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>{d}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
