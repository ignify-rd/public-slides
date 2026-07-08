import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { Tag, item } from '../components/primitives'
import { CheckCircle2, Scale, Activity } from 'lucide-react'

const cols = [
  {
    icon: CheckCircle2,
    head: 'Verifier khách quan',
    q: 'Ai chấm?',
    items: ['Test pass / compile / lint', 'Benchmark: SWE-bench Verified', 'RLVR: test = phần thưởng'],
  },
  {
    icon: Scale,
    head: 'LLM-as-judge',
    q: 'Chất lượng chủ quan?',
    items: ['Model chấm output theo rubric', 'Grader được train từ nhãn', 'Dùng cho việc khó verify cứng'],
  },
  {
    icon: Activity,
    head: 'Observability',
    q: 'Chuyện gì đã xảy ra?',
    items: ['Trace từng step + tool call', 'LangSmith / Braintrust-style', 'Debug, tìm chỗ agent lạc'],
  },
]

export function SlideEval() {
  return (
    <SlideLayout path="~/harness/evaluation" badge="EVAL · OBSERVABILITY">
      <Tag>Làm sao biết agent code tốt — và khi nào dừng?</Tag>
      <motion.h2
        variants={item}
        style={{ fontSize: 'var(--h2-size)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: 10 }}
      >
        Không đo được thì không <span style={{ color: 'var(--green)' }}>tin, debug, cải tiến</span> được
      </motion.h2>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 34 }}>
        {cols.map((c) => {
          const Icon = c.icon
          return (
            <motion.div
              key={c.head}
              variants={item}
              style={{ padding: '22px 22px 24px', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center" style={{ width: 34, height: 34, border: '1px solid var(--green-dim)', background: 'rgba(57,211,83,0.08)' }}>
                  <Icon size={17} color="var(--green)" />
                </div>
                <span style={{ fontSize: '0.58rem', letterSpacing: '0.12em', color: 'var(--green)', textTransform: 'uppercase' }}>{c.q}</span>
              </div>
              <span style={{ fontSize: '1.02rem', fontWeight: 700, color: '#fff' }}>{c.head}</span>
              <div className="flex flex-col" style={{ gap: 7 }}>
                {c.items.map((it) => (
                  <div key={it} className="flex items-start gap-2">
                    <span style={{ color: 'var(--green-dim)', fontSize: '0.72rem', marginTop: 2 }}>▸</span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', lineHeight: 1.45 }}>{it}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.p
        variants={item}
        style={{ fontSize: 'var(--body-size)', color: 'var(--text-dim)', marginTop: 26, maxWidth: '76ch', lineHeight: 1.6 }}
      >
        Verifier còn định nghĩa <span style={{ color: 'var(--text)' }}>điều kiện dừng</span>: test xanh = xong.
        SWE-bench Verified đã leo từ một chữ số lên <span style={{ color: 'var(--green)' }}>~79%</span> nhờ harness tốt hơn.
      </motion.p>
    </SlideLayout>
  )
}
