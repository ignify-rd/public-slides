import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { Tag, item } from '../components/primitives'
import { FileText, Plug, MousePointerClick, Network, Sparkles, Minimize2 } from 'lucide-react'

const tools = [
  { icon: FileText, name: 'GitHub Spec-Kit', layer: 'Prompt · Context', d: 'Spec-driven: specify → plan → tasks → implement' },
  { icon: Plug, name: 'MCP', layer: 'Harness · Chuẩn', d: '“USB-C for AI” — tools / resources / prompts' },
  { icon: MousePointerClick, name: 'Playwright MCP', layer: 'Harness · Verify', d: 'Agent lái browser, kiểm chứng UI thật' },
  { icon: Network, name: 'Codegraph', layer: 'Context · Retrieval', d: 'Đồ thị symbol/call-graph của codebase' },
  { icon: Sparkles, name: 'Impeccable', layer: 'Context · Eval', d: 'Skill pack thiết kế UI đẹp, chống “AI-look”' },
  { icon: Minimize2, name: 'Caveman', layer: 'Context · Nén', d: 'Nén token, giữ nguyên chất kỹ thuật' },
]

export function SlideToolsIntro() {
  return (
    <SlideLayout path="~/harness/tools" badge="HỘP CÔNG CỤ" pad={56}>
      <Tag>Công cụ dựng môi trường harness</Tag>
      <motion.h2
        variants={item}
        style={{ fontSize: 'var(--h2-size)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: 10 }}
      >
        Không nâng cấp model — <span style={{ color: 'var(--green)' }}>nâng cấp môi trường</span>
      </motion.h2>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 34 }}>
        {tools.map((t) => {
          const Icon = t.icon
          return (
            <motion.div
              key={t.name}
              variants={item}
              style={{
                padding: '20px 20px 22px',
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center justify-center"
                  style={{ width: 34, height: 34, border: '1px solid var(--green-dim)', background: 'rgba(57,211,83,0.08)' }}
                >
                  <Icon size={17} color="var(--green)" />
                </div>
                <span style={{ fontSize: '0.54rem', letterSpacing: '0.1em', color: 'var(--text-faint)', textTransform: 'uppercase', textAlign: 'right' }}>
                  {t.layer}
                </span>
              </div>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{t.name}</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>{t.d}</span>
            </motion.div>
          )
        })}
      </div>
    </SlideLayout>
  )
}
