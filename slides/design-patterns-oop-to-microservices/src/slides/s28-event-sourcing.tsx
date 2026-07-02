import { motion } from 'framer-motion'
import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { ScrollText, Play } from 'lucide-react'
import type { SlideProps } from './types'

const EVENTS = [
  { t: 'OrderCreated', d: '{ id: 42 }' },
  { t: 'ItemAdded', d: '{ sku: A1, qty: 2 }' },
  { t: 'ItemAdded', d: '{ sku: B7, qty: 1 }' },
  { t: 'OrderPaid', d: '{ total: 590k }' },
]

const STATE = ['{ id: 42, items: [] }', '{ items: [A1×2] }', '{ items: [A1×2, B7] }', '{ …, status: PAID ✓ }']

export default function S28EventSourcing(_: SlideProps) {
  // 0..3: append từng event, state fold theo; 4: replay toàn bộ
  const phase = useTicker([2000, 2000, 2000, 2200, 3400])
  const upTo = Math.min(phase, 3)
  return (
    <SlideLayout
      kicker="MICROSERVICES · DỮ LIỆU — EVENT SOURCING"
      title={<>Đừng lưu kết quả — <Em>lưu chuỗi sự kiện</Em> tạo ra kết quả</>}
    >
      <Split
        leftW={420}
        left={
          <Bullets
            items={[
              { t: 'Append-only log', d: 'không UPDATE, không DELETE — chỉ ghi thêm sự kiện' },
              { t: 'State = fold(events)', d: 'trạng thái hiện tại tính lại được từ log bất kỳ lúc nào' },
              { t: 'Audit trail miễn phí', d: '“vì sao đơn này thành PAID?” — xem lại từng bước' },
              { t: 'Cặp bài trùng với CQRS', d: 'read model dựng từ chính stream sự kiện này' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={700}
            h={432}
            wires={[{ pts: [{ x: 350, y: 252 }, { x: 350, y: 300 }], arrow: true, opacity: 0.6 }]}
          >
            {/* event store strip */}
            <FNode x={14} y={40} w={672} h={170} icon={ScrollText} label="" style={{ justifyContent: 'flex-start', paddingTop: 12 }}>
              <div style={{ fontFamily: T.mono, fontSize: 11, color: T.muted, marginBottom: 12 }}>
                EVENT STORE — append-only
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                {EVENTS.map((e, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: i <= upTo ? 1 : 0.15,
                      scale: phase === i ? 1.06 : 1,
                      borderColor:
                        phase === 4 || phase === i ? 'rgba(109,140,255,0.85)' : 'rgba(255,255,255,0.16)',
                    }}
                    style={{
                      width: 150,
                      borderRadius: 10,
                      border: '1px solid rgba(255,255,255,0.16)',
                      background: 'rgba(67,97,238,0.1)',
                      padding: '12px 12px',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontFamily: T.mono, fontSize: 10, color: T.muted }}>#{i + 1}</div>
                    <div style={{ fontSize: 13.5, fontWeight: 800, margin: '2px 0' }}>{e.t}</div>
                    <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.accentBright }}>{e.d}</div>
                  </motion.div>
                ))}
              </div>
            </FNode>
            {/* replay sweep */}
            <Packet
              key={`rp-${phase === 4}`}
              pts={[{ x: 40, y: 226 }, { x: 660, y: 226 }]}
              dur={2.4}
              repeatDelay={0.8}
              color={T.accentBright}
              label="replay / fold →"
              visible={phase === 4}
            />
            {/* derived state */}
            <FNode
              x={190}
              y={300}
              w={320}
              h={96}
              icon={Play}
              label="Trạng thái hiện tại (dẫn xuất)"
              sub={phase === 4 ? 'dựng lại từ 4 events — kết quả y hệt' : STATE[upTo]}
              tone={phase >= 3 ? 'ok' : 'default'}
              active={phase >= 3}
            />
            <Chip
              x={350}
              y={412}
              text={phase === 4 ? '⏪ time-travel: mất read DB? Replay log là xong' : `event #${upTo + 1} append → state fold theo`}
              tone={phase === 4 ? 'ok' : 'accent'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
