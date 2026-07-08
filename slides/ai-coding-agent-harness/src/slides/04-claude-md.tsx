import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { Tag, item } from '../components/primitives'
import { useReveal } from '../components/anim'

const file = [
  { t: '# CLAUDE.md', c: 'comment' },
  { t: '', c: 'blank' },
  { t: '## Stack', c: 'h' },
  { t: '- React 18 + TS + Vite, Tailwind v4', c: 'b' },
  { t: '- Test: vitest · Lint: eslint', c: 'b' },
  { t: '', c: 'blank' },
  { t: '## Lệnh', c: 'h' },
  { t: '- build: `npm run build`', c: 'b' },
  { t: '- test:  `npm test`', c: 'b' },
  { t: '', c: 'blank' },
  { t: '## Quy ước', c: 'h' },
  { t: '- KHÔNG dùng `any`', c: 'b' },
  { t: '- Component: PascalCase, 1 file/1 slide', c: 'b' },
  { t: '- Luôn chạy test trước khi báo xong', c: 'b' },
]

const points = [
  'Tự nạp vào MỌI phiên — không cần nhắc lại stack, lệnh, quy ước.',
  'Đặt ở gốc repo; có thể lồng nhiều file theo thư mục con.',
  'Giữ NGẮN & thật: chỉ thứ agent hay đoán sai (lệnh, convention, cấm kỵ).',
  'Tương đương: .cursorrules, .github/copilot-instructions.md, AGENTS.md.',
]

export function SlideClaudeMd() {
  const shown = useReveal(file.length, { delay: 720, step: 85 })
  return (
    <SlideLayout path="~/context/memory" badge="NỀN · MEMORY FILE">
      <div className="grid flex-1 min-h-0" style={{ gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div className="flex flex-col justify-center">
          <Tag>Bước 0 trước mọi tool</Tag>
          <motion.h2
            variants={item}
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: 12, lineHeight: 1.06 }}
          >
            Dạy agent “luật nhà” bằng 1 file
          </motion.h2>
          <div className="flex flex-col" style={{ gap: 10, marginTop: 22 }}>
            {points.map((p, i) => (
              <motion.div key={i} variants={item} className="flex items-start gap-3">
                <span style={{ color: 'var(--green-dim)', fontSize: '0.78rem', marginTop: 2 }}>▸</span>
                <span style={{ fontSize: 'var(--body-size)', color: 'var(--text-dim)', lineHeight: 1.5 }}>{p}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* right: file */}
        <motion.div variants={item} className="flex flex-col self-center" style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'var(--bg-2)', width: '100%' }}>
          <div className="flex items-center gap-2" style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: '#f85149' }} />
            <span className="w-2 h-2 rounded-full" style={{ background: '#d29922' }} />
            <span className="w-2 h-2 rounded-full" style={{ background: '#39d353' }} />
            <span style={{ fontSize: '0.6rem', color: 'var(--text-faint)', marginLeft: 6 }}>CLAUDE.md</span>
          </div>
          <div style={{ padding: '16px 18px', fontSize: '0.72rem', lineHeight: 1.75 }}>
            {file.map((l, i) => (
              <div
                key={i}
                className={i === shown - 1 && shown < file.length ? 'type-caret' : ''}
                style={{
                  minHeight: '1.3em',
                  whiteSpace: 'pre-wrap',
                  opacity: i < shown ? 1 : 0,
                  transition: 'opacity 0.15s ease',
                }}
              >
                <span
                  style={{
                    color:
                      l.c === 'comment'
                        ? 'var(--green)'
                        : l.c === 'h'
                          ? 'var(--cyan)'
                          : l.c === 'b'
                            ? 'var(--text)'
                            : 'transparent',
                  }}
                >
                  {l.t || ' '}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
