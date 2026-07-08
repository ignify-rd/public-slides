import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { Tag, item } from '../components/primitives'
import { Search, ListTodo, Code2, CheckCheck, GitPullRequest } from 'lucide-react'

const steps = [
  { icon: Search, k: 'EXPLORE', t: 'Agent đọc repo', d: 'grep, đọc file, dựng bản đồ code — chưa viết gì' },
  { icon: ListTodo, k: 'PLAN', t: 'Lên kế hoạch', d: 'chia task, viết spec, bạn duyệt trước khi code' },
  { icon: Code2, k: 'CODE', t: 'Thực thi', d: 'sửa file, chạy lệnh, bám plan đã duyệt' },
  { icon: CheckCheck, k: 'VERIFY', t: 'Tự kiểm', d: 'chạy test/lint/typecheck, xem UI, sửa đến khi xanh' },
  { icon: GitPullRequest, k: 'REVIEW', t: 'Bạn review', d: 'đọc diff, yêu cầu sửa, merge' },
]

export function SlideLoop() {
  return (
    <SlideLayout path="~/workflow/loop" badge="VÒNG LẶP CỐT LÕI" pad={60}>
      <Tag>Một task với agent trông thế nào</Tag>
      <motion.h2
        variants={item}
        style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: 10, marginBottom: 30 }}
      >
        Explore → Plan → Code → Verify → Review
      </motion.h2>

      <div className="flex-1 min-h-0 flex items-stretch" style={{ gap: 12 }}>
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div key={s.k} variants={item} className="flex-1 flex flex-col" style={{ gap: 0 }}>
              <div
                className="flex flex-col"
                style={{
                  flex: 1,
                  padding: '20px 18px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  borderTop: `2px solid ${i === 1 || i === 4 ? 'var(--cyan)' : 'var(--green)'}`,
                  gap: 12,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center" style={{ width: 34, height: 34, border: '1px solid var(--green-dim)', background: 'rgba(57,211,83,0.08)' }}>
                    <Icon size={17} color="var(--green)" />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-faint)', fontWeight: 700 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', color: 'var(--green)' }}>{s.k}</span>
                <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>{s.t}</span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>{s.d}</span>
                {(i === 1 || i === 4) && (
                  <span
                    style={{
                      marginTop: 'auto',
                      fontSize: '0.55rem',
                      letterSpacing: '0.1em',
                      color: 'var(--cyan)',
                      border: '1px solid rgba(57,197,207,0.35)',
                      padding: '3px 6px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    ◆ human checkpoint
                  </span>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.p
        variants={item}
        style={{ fontSize: '0.74rem', color: 'var(--text-dim)', marginTop: 22, maxWidth: '80ch', lineHeight: 1.55 }}
      >
        Mẹo vàng: <span style={{ color: 'var(--text)' }}>ép agent lập plan & bạn duyệt trước khi cho code</span>. Đừng để nó nhảy thẳng vào sửa file — 80% lỗi sinh ra ở đây.
      </motion.p>
    </SlideLayout>
  )
}
