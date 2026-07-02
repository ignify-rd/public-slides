import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { CodeBlock } from '../components/CodeBlock'
import { FlowCanvas, FNode, Packet, Chip, Pulse } from '../components/diagram'
import { User, Smartphone, RadioTower } from 'lucide-react'
import type { SlideProps } from './types'

const CODE = `feed.subscribe(follower)      // đăng ký 1 lần
// khi có bài mới:
notify(post) {
  this.subscribers
    .forEach(s => s.update(post))   // 1 → N
}`

const SUBS = [{ y: 26 }, { y: 164 }, { y: 302 }]

export default function S15ObserverSolution(_: SlideProps) {
  // 0: subscribe 1 lần; 1: publish → fan-out tức thì
  const phase = useTicker([3200, 3400])
  const subject = { x: 262, y: 152, w: 186, h: 108 }
  return (
    <SlideLayout
      kicker="BEHAVIORAL · OBSERVER — CƠ CHẾ"
      title={<>Đăng ký một lần — <Em>một sự kiện, N thông báo</Em> tự tìm đến</>}
    >
      <Split
        leftW={460}
        left={
          <>
            <Bullets
              items={[
                { t: 'Quan hệ one-to-many', d: 'subject đổi trạng thái → mọi observer được báo' },
                { t: 'Loose coupling', d: 'publisher chỉ giữ danh sách interface, không biết ai cụ thể' },
              ]}
            />
            <CodeBlock code={CODE} fs={12.5} title="subject.ts" highlights={phase === 0 ? [0] : [3, 4]} />
          </>
        }
        right={
          <FlowCanvas
            w={690}
            h={420}
            wires={[
              { pts: [{ x: 156, y: 206 }, { x: subject.x, y: 206 }], arrow: true },
              ...SUBS.map((s) => ({
                pts: [
                  { x: subject.x + subject.w, y: 206 },
                  { x: 496, y: 206 },
                  { x: 496, y: s.y + 32 },
                  { x: 528, y: s.y + 32 },
                ],
                opacity: 0.65,
              })),
            ]}
          >
            <FNode x={16} y={168} w={140} h={76} icon={User} label="Publisher" sub="đăng bài" active={phase === 1} />
            <FNode
              {...subject}
              icon={RadioTower}
              label="NewsFeed (Subject)"
              sub={phase === 0 ? 'subscribers: [ +1… ]' : 'notify(post) → forEach'}
              tone="accent"
              active
            />
            {SUBS.map((s, i) => (
              <FNode
                key={i}
                x={528}
                y={s.y}
                w={150}
                h={64}
                icon={Smartphone}
                label={`Follower ${i + 1}`}
                sub={phase === 1 ? '🔔 update(post)' : 'subscribe()'}
                tone={phase === 1 ? 'ok' : 'default'}
                active={phase === 1}
              />
            ))}
            {/* phase 0: subscribe packets flow INTO the subject */}
            {SUBS.map((s, i) => (
              <Packet
                key={`sub-${i}-${phase === 0}`}
                pts={[
                  { x: 528, y: s.y + 32 },
                  { x: 496, y: s.y + 32 },
                  { x: 496, y: 206 },
                  { x: subject.x + subject.w, y: 206 },
                ]}
                dur={1.2}
                delay={i * 0.5}
                repeatDelay={1.6}
                size={10}
                color={T.accentBright}
                label="subscribe()"
                visible={phase === 0}
              />
            ))}
            {/* phase 1: one post fans out to all */}
            <Packet
              key={`post-${phase === 1}`}
              pts={[{ x: 156, y: 206 }, { x: subject.x, y: 206 }]}
              dur={0.8}
              repeatDelay={2.6}
              color={T.warn}
              square
              label="post #42"
              visible={phase === 1}
            />
            {SUBS.map((s, i) => (
              <Packet
                key={`ntf-${i}-${phase === 1}`}
                pts={[
                  { x: subject.x + subject.w, y: 206 },
                  { x: 496, y: 206 },
                  { x: 496, y: s.y + 32 },
                  { x: 528, y: s.y + 32 },
                ]}
                dur={1}
                delay={0.9}
                repeatDelay={2.5}
                color={T.ok}
                label="update(post)"
                visible={phase === 1}
              />
            ))}
            {phase === 1 && <Pulse x={subject.x + subject.w / 2} y={subject.y + subject.h / 2} color={T.accentBright} />}
            <Chip
              x={348}
              y={392}
              text={phase === 0 ? 'bước 1 — đăng ký MỘT lần, không poll nữa' : 'bước 2 — 1 sự kiện đẩy tới N người nghe TỨC THÌ'}
              tone={phase === 0 ? 'accent' : 'ok'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
