import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { Tag, item } from '../components/primitives'
import { useReveal } from '../components/anim'

type Line = { kind: 'you' | 'agent' | 'tool' | 'plan' | 'edit' | 'ok' | 'check'; t: string }

const color: Record<Line['kind'], string> = {
  you: 'var(--cyan)',
  agent: 'var(--green)',
  tool: 'var(--text-faint)',
  plan: 'var(--text)',
  edit: 'var(--amber)',
  ok: 'var(--green)',
  check: 'var(--cyan)',
}
const prefix: Record<Line['kind'], string> = {
  you: '▶ bạn:',
  agent: '●',
  tool: '  $',
  plan: '   ',
  edit: '  ✎',
  ok: '  ✓',
  check: '◆',
}

function Transcript({ title, lines }: { title: string; lines: Line[] }) {
  const shown = useReveal(lines.length, { delay: 620, step: 210 })
  return (
    <motion.div
      variants={item}
      className="flex flex-col"
      style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'var(--bg-2)', flex: 1, minHeight: 0 }}
    >
      <div className="flex items-center gap-2" style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span className="w-2 h-2 rounded-full" style={{ background: '#f85149' }} />
        <span className="w-2 h-2 rounded-full" style={{ background: '#d29922' }} />
        <span className="w-2 h-2 rounded-full" style={{ background: '#39d353' }} />
        <span style={{ fontSize: '0.62rem', color: 'var(--text-faint)', marginLeft: 6 }}>{title}</span>
      </div>
      <div style={{ padding: '16px 20px', fontSize: '0.76rem', lineHeight: 1.75, overflow: 'hidden' }}>
        {lines.map((l, i) => (
          <div
            key={i}
            className={i === shown - 1 && shown < lines.length ? 'type-caret' : ''}
            style={{
              whiteSpace: 'pre-wrap',
              display: 'flex',
              gap: 8,
              opacity: i < shown ? 1 : 0,
              transition: 'opacity 0.2s ease',
            }}
          >
            <span style={{ color: color[l.kind], flexShrink: 0, minWidth: l.kind === 'you' ? 48 : 20 }}>
              {prefix[l.kind]}
            </span>
            <span style={{ color: l.kind === 'you' ? '#fff' : color[l.kind] }}>{l.t}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const part1: Line[] = [
  { kind: 'you', t: 'thêm dark-mode toggle vào Settings, nhớ persist' },
  { kind: 'agent', t: 'đọc bối cảnh repo…' },
  { kind: 'tool', t: 'grep -r "theme" src/    → theme.ts, useTheme.ts' },
  { kind: 'tool', t: 'cat src/components/Settings.tsx' },
  { kind: 'agent', t: 'plan đề xuất:' },
  { kind: 'plan', t: '1. toggleTheme() trong useTheme.ts' },
  { kind: 'plan', t: '2. <Switch> trong Settings.tsx' },
  { kind: 'plan', t: '3. lưu localStorage, đọc lúc init' },
  { kind: 'plan', t: '4. test vitest + screenshot 2 chế độ' },
  { kind: 'check', t: 'bạn duyệt plan trước khi code?  [y/n] › y' },
]

const part2: Line[] = [
  { kind: 'agent', t: 'thực thi theo plan đã duyệt…' },
  { kind: 'edit', t: 'useTheme.ts      +12 -2' },
  { kind: 'edit', t: 'Settings.tsx     +8' },
  { kind: 'edit', t: 'theme.test.ts    +20  (new)' },
  { kind: 'agent', t: 'tự kiểm chứng:' },
  { kind: 'tool', t: 'npm test         ✓ 14 passed' },
  { kind: 'tool', t: 'npm run typecheck ✓ no errors' },
  { kind: 'ok', t: 'screenshot: light ✓  ·  dark ✓' },
  { kind: 'you', t: 'đổi accent dark → #39d353' },
  { kind: 'edit', t: 'theme.ts +1 -1  ·  test ✓' },
  { kind: 'ok', t: 'merged → main' },
]

export function SlideDemo1() {
  return (
    <SlideLayout path="~/demo/task" badge="DEMO · 1/2">
      <Tag>Một task trọn vẹn — Explore + Plan</Tag>
      <motion.h2
        variants={item}
        style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: 8, marginBottom: 16 }}
      >
        Agent đọc code & lập kế hoạch — bạn duyệt
      </motion.h2>
      <Transcript title="agent session — phase 1" lines={part1} />
    </SlideLayout>
  )
}

export function SlideDemo2() {
  return (
    <SlideLayout path="~/demo/task" badge="DEMO · 2/2">
      <Tag>Một task trọn vẹn — Code + Verify + Review</Tag>
      <motion.h2
        variants={item}
        style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: 8, marginBottom: 16 }}
      >
        Thực thi → tự test → bạn tinh chỉnh → merge
      </motion.h2>
      <Transcript title="agent session — phase 2" lines={part2} />
    </SlideLayout>
  )
}
