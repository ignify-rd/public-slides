import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { Tag, item } from '../components/primitives'
import { Check, X } from 'lucide-react'

const dos = [
  { h: 'Plan trước, code sau', d: 'ép agent viết plan → bạn duyệt → mới cho sửa file.' },
  { h: 'Task nhỏ, phiên sạch', d: '1 mục tiêu/phiên; xong thì /clear, đừng dồn.' },
  { h: 'Nối verify', d: 'test + typecheck + lint để agent tự chấm, tự sửa.' },
  { h: 'Commit sớm & nhỏ', d: 'dễ review, dễ revert khi agent đi sai.' },
  { h: 'CLAUDE.md sống', d: 'thấy agent lặp lỗi → thêm luật vào file.' },
]

const donts = [
  { h: '“Làm hết đi”', d: 'prompt mơ hồ, phạm vi rộng → kết quả lan man.' },
  { h: 'Tin mù diff', d: 'không đọc code agent viết = nợ kỹ thuật ngầm.' },
  { h: 'Nhồi cả repo', d: 'context phình → chậm, đắt, agent lú (context rot).' },
  { h: 'Bỏ qua test', d: 'không có sự thật nền, agent “ảo tưởng đã xong”.' },
  { h: 'Một phiên vô tận', d: 'lịch sử dài → lệch mục tiêu, khó phục hồi.' },
]

function List({ side }: { side: 'do' | 'dont' }) {
  const data = side === 'do' ? dos : donts
  const ok = side === 'do'
  const accent = ok ? 'var(--green)' : 'var(--red)'
  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <Tag>{ok ? 'Thói quen thực chiến' : 'Bẫy thường gặp'}</Tag>
      <motion.h2
        variants={item}
        style={{ fontSize: 'var(--h2-size)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: 10, marginBottom: 26 }}
      >
        {ok ? (
          <>
            <span style={{ color: 'var(--green)' }}>NÊN</span> làm gì
          </>
        ) : (
          <>
            <span style={{ color: 'var(--red)' }}>ĐỪNG</span> làm gì
          </>
        )}
      </motion.h2>

      <div className="flex flex-col" style={{ gap: 14 }}>
        {data.map((r) => (
          <motion.div
            key={r.h}
            variants={item}
            className="flex items-start"
            style={{ gap: 16, padding: '14px 20px', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', borderLeft: `2px solid ${accent}` }}
          >
            <div className="flex items-center justify-center shrink-0" style={{ width: 26, height: 26, marginTop: 1 }}>
              {ok ? <Check size={18} color={accent} /> : <X size={18} color={accent} />}
            </div>
            <div className="flex flex-col">
              <span style={{ fontSize: '0.92rem', color: '#fff', fontWeight: 600 }}>{r.h}</span>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', marginTop: 3, lineHeight: 1.45 }}>{r.d}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function SlideDo() {
  return (
    <SlideLayout path="~/best-practices/do" badge="CHECKLIST · DO">
      <List side="do" />
    </SlideLayout>
  )
}

export function SlideDont() {
  return (
    <SlideLayout path="~/best-practices/dont" badge="CHECKLIST · DON'T">
      <List side="dont" />
    </SlideLayout>
  )
}
