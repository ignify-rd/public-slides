import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { BookMarked, Server, HelpCircle } from 'lucide-react'
import type { SlideProps } from './types'

const INSTANCES = [
  { y: 40, addr: '10.0.1.7:8080' },
  { y: 170, addr: '10.0.3.2:8080' },
  { y: 300, addr: '10.0.9.4:8080' },
]

export default function S31ServiceDiscovery(_: SlideProps) {
  // 0: instances tự đăng ký; 1: caller hỏi registry rồi gọi; 2: 1 instance chết → registry loại khỏi danh bạ
  const phase = useTicker([3000, 3200, 3400])
  const reg = { x: 262, y: 150, w: 186, h: 120 }
  return (
    <SlideLayout
      kicker="MICROSERVICES · GIAO TIẾP — SERVICE DISCOVERY"
      title={<>IP đổi từng phút — cần <Em>danh bạ sống</Em> thay vì hard-code</>}
    >
      <Split
        leftW={410}
        left={
          <Bullets
            items={[
              { t: 'Register', d: 'instance khởi động → tự ghi tên + địa chỉ vào registry, kèm heartbeat' },
              { t: 'Discover', d: 'caller hỏi “payment-svc ở đâu?” → nhận địa chỉ còn sống' },
              { t: 'Tự lành', d: 'instance chết → mất heartbeat → registry gạch tên, traffic né tự động' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={700}
            h={434}
            wires={[
              { pts: [{ x: 148, y: 210 }, { x: reg.x, y: 210 }], arrow: true, opacity: 0.5 },
              ...INSTANCES.map((ins) => ({
                pts: [{ x: reg.x + reg.w, y: 210 }, { x: 500, y: 210 }, { x: 500, y: ins.y + 33 }, { x: 536, y: ins.y + 33 }],
                dashed: true,
                opacity: 0.35,
              })),
            ]}
          >
            <FNode x={16} y={172} w={132} h={76} icon={HelpCircle} label="Order svc" sub="cần gọi payment" active={phase === 1} />
            <FNode
              {...reg}
              icon={BookMarked}
              label="Service Registry"
              sub=""
              tone="accent"
              active
              style={{ justifyContent: 'flex-start', paddingTop: 12 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4, fontFamily: T.mono, fontSize: 10 }}>
                {INSTANCES.map((ins, i) => (
                  <span
                    key={i}
                    style={{
                      color: phase === 2 && i === 1 ? T.danger : T.ok,
                      textDecoration: phase === 2 && i === 1 ? 'line-through' : 'none',
                      opacity: phase === 0 && i > 0 ? 0.5 : 1,
                    }}
                  >
                    payment {ins.addr}
                  </span>
                ))}
              </div>
            </FNode>
            {INSTANCES.map((ins, i) => (
              <FNode
                key={ins.addr}
                x={536}
                y={ins.y}
                w={150}
                h={66}
                icon={Server}
                label={`payment #${i + 1}`}
                sub={phase === 2 && i === 1 ? '💀 crashed' : ins.addr}
                tone={phase === 2 && i === 1 ? 'danger' : 'ok'}
                dimmed={phase === 2 && i === 1}
                active={phase === 1 && i === 0}
              />
            ))}
            {/* register heartbeats */}
            {INSTANCES.map((ins, i) => (
              <Packet
                key={`reg-${i}-${phase === 0}`}
                pts={[{ x: 536, y: ins.y + 33 }, { x: 500, y: ins.y + 33 }, { x: 500, y: 210 }, { x: reg.x + reg.w, y: 210 }]}
                dur={1.1}
                delay={i * 0.4}
                repeatDelay={1.6}
                size={9}
                color={T.accentBright}
                label="register + ❤"
                visible={phase === 0}
              />
            ))}
            {/* discovery flow */}
            <Packet key={`ask-${phase === 1}`} pts={[{ x: 148, y: 210 }, { x: reg.x, y: 210 }]} dur={0.8} repeatDelay={2.6} label="payment ở đâu?" visible={phase === 1} />
            <Packet
              key={`ans-${phase === 1}`}
              pts={[{ x: reg.x, y: 232 }, { x: 148, y: 232 }]}
              dur={0.8}
              delay={0.9}
              repeatDelay={2.5}
              color={T.ok}
              label="10.0.1.7 ↩"
              visible={phase === 1}
            />
            <Packet
              key={`call-${phase === 1}`}
              pts={[{ x: 82, y: 172 }, { x: 82, y: 73 }, { x: 536, y: 73 }]}
              dur={1.2}
              delay={1.8}
              repeatDelay={1.4}
              color={T.ok}
              label="gọi thẳng instance #1"
              visible={phase === 1}
            />
            {/* death */}
            <Packet
              key={`hb-${phase === 2}`}
              pts={[{ x: 536, y: 203 }, { x: reg.x + reg.w, y: 210 }]}
              dur={1}
              repeatDelay={1.2}
              color={T.danger}
              label="…mất heartbeat"
              visible={phase === 2}
            />
            <Chip
              x={350}
              y={404}
              text={
                phase === 0
                  ? '① mỗi instance tự đăng ký khi khởi động'
                  : phase === 1
                    ? '② hỏi registry → nhận địa chỉ sống → gọi trực tiếp'
                    : '③ #2 chết → bị gạch khỏi danh bạ — không request nào lạc vào'
              }
              tone={phase === 2 ? 'danger' : 'accent'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
