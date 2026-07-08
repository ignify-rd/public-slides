import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { Tag, item } from '../components/primitives'
import { GitBranch, Users, BookMarked } from 'lucide-react'

export function SlideOrchestration() {
  return (
    <SlideLayout path="~/harness/orchestration" badge="ĐIỀU PHỐI">
      <div className="grid flex-1 min-h-0" style={{ gridTemplateColumns: '1fr 1fr', gap: 52 }}>
        <div className="flex flex-col justify-center">
          <Tag>Nhiều agent · tri thức tổ chức</Tag>
          <motion.h2
            variants={item}
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: 12, lineHeight: 1.08 }}
          >
            Một agent không đủ — cần cả một tổ đội
          </motion.h2>
          <motion.p variants={item} style={{ fontSize: 'var(--body-size)', color: 'var(--text-dim)', marginTop: 18, lineHeight: 1.65, maxWidth: '46ch' }}>
            Planner chia việc, subagent chạy song song, kết quả gộp lại. Mỗi subagent giữ
            context riêng → tránh <span style={{ color: 'var(--text)' }}>context rot</span> khi task lớn.
          </motion.p>
          <motion.div variants={item} style={{ marginTop: 24, padding: '16px 20px', borderLeft: '2px solid var(--green)', background: 'rgba(57,211,83,0.05)' }}>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', color: 'var(--text-faint)', textTransform: 'uppercase' }}>
              Bộ nhớ tổ chức
            </div>
            <div style={{ fontSize: 'var(--body-size)', color: '#fff', marginTop: 6, lineHeight: 1.5 }}>
              File kiểu <span style={{ color: 'var(--green)' }}>CLAUDE.md</span> tiêm convention, kiến trúc, luật team vào mọi lần chạy.
            </div>
          </motion.div>
        </div>

        {/* right: planner/worker diagram */}
        <div className="flex flex-col justify-center">
          <motion.div variants={item} className="flex flex-col items-center">
            <div className="flex items-center gap-3" style={{ padding: '14px 22px', border: '1px solid var(--green-dim)', background: 'rgba(57,211,83,0.08)' }}>
              <GitBranch size={18} color="var(--green)" />
              <span style={{ fontSize: '0.86rem', color: '#fff', fontWeight: 600 }}>Planner</span>
            </div>
            <span style={{ width: 1, height: 26, background: 'var(--green-dim)', opacity: 0.6 }} />
            <div className="flex items-start gap-4">
              {['auth', 'ui', 'tests'].map((w) => (
                <div key={w} className="flex flex-col items-center">
                  <span style={{ width: 1, height: 14, background: 'var(--green-dim)', opacity: 0.4 }} />
                  <div className="flex flex-col items-center" style={{ padding: '12px 16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', width: 92 }}>
                    <Users size={15} color="var(--green)" />
                    <span style={{ fontSize: '0.66rem', color: 'var(--text)', marginTop: 5 }}>worker</span>
                    <span style={{ fontSize: '0.58rem', color: 'var(--text-faint)' }}>{w}</span>
                  </div>
                </div>
              ))}
            </div>
            <span style={{ width: 1, height: 26, background: 'var(--green-dim)', opacity: 0.6 }} />
            <div className="flex items-center gap-3" style={{ padding: '12px 20px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
              <BookMarked size={16} color="var(--cyan)" />
              <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)' }}>gộp + review → merge</span>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}
