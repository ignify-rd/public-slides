import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { Rabbit, Mail, MessageSquare, BellRing } from 'lucide-react'
import type { SlideProps } from './types'

const QUEUES = [
  { y: 30, q: 'email.q', icon: Mail, c: 'Email worker' },
  { y: 160, q: 'sms.q', icon: MessageSquare, c: 'SMS worker' },
  { y: 290, q: 'push.q', icon: BellRing, c: 'Push worker' },
]

export default function S36RabbitMq(_: SlideProps) {
  // 0: fanout nhân bản msg tới 3 queue; 1: xử lý xong mới ACK; 2: worker chết → không ack → redeliver
  const phase = useTicker([3000, 3000, 3800])
  const ex = { x: 208, y: 160, w: 150, h: 100 }
  return (
    <SlideLayout
      kicker="CASE STUDY 2/3 — PUB/SUB VỚI RABBITMQ"
      title={<>Fanout Exchange + <Em>Manual Ack</Em>: không tin nhắn nào rơi mất</>}
    >
      <Split
        leftW={400}
        left={
          <Bullets
            items={[
              { t: 'Fanout = Observer cấp hạ tầng', d: '1 event OrderPaid → broker nhân bản cho MỌI queue đăng ký' },
              { t: 'Manual acknowledgment', d: 'msg chỉ bị xoá khi worker ack SAU KHI xử lý xong — crash giữa chừng thì requeue' },
              { t: 'Prefetch = 1', d: 'worker cầm 1 msg mỗi lần — không ôm cả trăm msg rồi chết nghẹn' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={700}
            h={434}
            wires={[
              { pts: [{ x: 148, y: 210 }, { x: ex.x, y: 210 }], arrow: true, opacity: 0.5 },
              ...QUEUES.map((q) => ({
                pts: [{ x: ex.x + ex.w, y: 210 }, { x: 400, y: 210 }, { x: 400, y: q.y + 30 }, { x: 428, y: q.y + 30 }],
                opacity: 0.4,
              })),
              ...QUEUES.map((q) => ({
                pts: [{ x: 540, y: q.y + 30 }, { x: 576, y: q.y + 30 }],
                arrow: true,
                opacity: 0.4,
              })),
            ]}
          >
            <FNode x={16} y={176} w={132} h={68} label="Order svc" sub="publish OrderPaid" active={phase === 0} />
            <FNode {...ex} icon={Rabbit} label="Fanout Exchange" sub="copy → mọi queue" tone="accent" active />
            {QUEUES.map((q, i) => (
              <FNode key={q.q} x={428} y={q.y} w={112} h={60} label={q.q} sub={phase === 2 && i === 0 ? 'msg quay lại ↩' : '≡ queue'} tone={phase === 2 && i === 0 ? 'warn' : 'default'} active={phase === 2 && i === 0} />
            ))}
            {QUEUES.map((q, i) => (
              <FNode
                key={q.c}
                x={576}
                y={q.y}
                w={116}
                h={60}
                icon={q.icon}
                label={q.c}
                sub={phase === 2 && i === 0 ? '💀 crash — KHÔNG ack' : phase >= 1 ? 'xử lý → ack ✓' : 'prefetch: 1'}
                tone={phase === 2 && i === 0 ? 'danger' : phase >= 1 ? 'ok' : 'default'}
                dimmed={false}
              />
            ))}
            {/* publish + fanout */}
            <Packet key={`pub-${phase === 0}`} pts={[{ x: 148, y: 210 }, { x: ex.x, y: 210 }]} dur={0.8} repeatDelay={2.4} square color={T.accentBright} label="OrderPaid" visible={phase === 0} />
            {QUEUES.map((q, i) => (
              <Packet
                key={`fan-${i}-${phase === 0}`}
                pts={[{ x: ex.x + ex.w, y: 210 }, { x: 400, y: 210 }, { x: 400, y: q.y + 30 }, { x: 428, y: q.y + 30 }]}
                dur={1}
                delay={0.9}
                repeatDelay={2.2}
                square
                size={11}
                color={T.accentBright}
                label={i === 0 ? 'copy ×3' : undefined}
                visible={phase === 0}
              />
            ))}
            {/* deliver + ack */}
            {QUEUES.map((q, i) => (
              <Packet key={`del-${i}-${phase === 1}`} pts={[{ x: 540, y: q.y + 30 }, { x: 576, y: q.y + 30 }]} dur={0.6} delay={i * 0.3} repeatDelay={2.4} square size={11} color={T.warn} visible={phase === 1} />
            ))}
            {QUEUES.map((q, i) => (
              <Packet key={`ack-${i}-${phase === 1}`} pts={[{ x: 576, y: q.y + 44 }, { x: 540, y: q.y + 44 }]} dur={0.6} delay={1.2 + i * 0.3} repeatDelay={1.9} size={9} color={T.ok} label={i === 1 ? 'ack ✓ → xoá msg' : undefined} visible={phase === 1} />
            ))}
            {/* crash & redeliver */}
            {phase === 2 && (
              <>
                <Packet key="d1" pts={[{ x: 540, y: 60 }, { x: 576, y: 60 }]} dur={0.6} repeatDelay={3} square size={11} color={T.warn} />
                <Packet key="requeue" pts={[{ x: 576, y: 76 }, { x: 484, y: 76 }]} dur={0.7} delay={1} repeatDelay={2.9} square size={11} color={T.danger} label="không ack → requeue" />
                <Packet key="redeliver" pts={[{ x: 540, y: 44 }, { x: 576, y: 44 }]} dur={0.6} delay={2.2} repeatDelay={3} square size={11} color={T.ok} label="redeliver ✓" />
              </>
            )}
            <Chip
              x={350}
              y={404}
              text={
                phase === 0
                  ? '① publish 1 lần — exchange tự nhân bản cho mọi queue'
                  : phase === 1
                    ? '② worker xử lý XONG mới ack — broker mới dám xoá'
                    : '③ crash giữa chừng: msg không mất, quay lại queue chờ worker khác'
              }
              tone={phase === 2 ? 'warn' : 'accent'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
