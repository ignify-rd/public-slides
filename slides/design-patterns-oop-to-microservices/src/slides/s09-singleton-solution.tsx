import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { CodeBlock } from '../components/CodeBlock'
import { FlowCanvas, FNode, Packet, Chip, Pulse } from '../components/diagram'
import { Database, Lock } from 'lucide-react'
import type { SlideProps } from './types'

const CALLERS = [
  { y: 36, name: 'OrderService' },
  { y: 176, name: 'PaymentService' },
  { y: 316, name: 'ReportJob' },
]

const CODE = `class Config {
  private static instance: Config
  private constructor() {}          // chặn new từ bên ngoài
  static getInstance(): Config {
    this.instance ??= new Config()  // tạo đúng 1 lần
    return this.instance
  }
}`

export default function S09SingletonSolution(_: SlideProps) {
  // 0: A gọi → khởi tạo lần đầu; 1: B gọi → tái dùng; 2: C gọi → tái dùng; 3: chốt
  const phase = useTicker([2400, 2400, 2400, 2200])
  const gate = { x: 300, y: 176, w: 168, h: 84 }
  const inst = { x: 540, y: 156, w: 120, h: 124 }
  return (
    <SlideLayout kicker="CREATIONAL · SINGLETON — CƠ CHẾ" title={<>Một cổng <Em>getInstance()</Em> — một instance duy nhất</>}>
      <Split
        leftW={470}
        left={
          <>
            <Bullets
              items={[
                { t: 'private constructor', d: 'không ai new được từ ngoài' },
                { t: 'Lần gọi đầu tạo, các lần sau tái dùng', d: 'mọi module cùng một tham chiếu' },
              ]}
            />
            <CodeBlock code={CODE} fs={12.5} title="singleton.ts" highlights={phase === 0 ? [4] : [5]} />
          </>
        }
        right={
          <FlowCanvas
            w={690}
            h={440}
            wires={[
              ...CALLERS.map((c) => ({
                pts: [
                  { x: 180, y: c.y + 32 },
                  { x: 240, y: c.y + 32 },
                  { x: 240, y: 218 },
                  { x: gate.x, y: 218 },
                ],
                arrow: true,
              })),
              { pts: [{ x: gate.x + gate.w, y: 218 }, { x: inst.x, y: 218 }], arrow: true },
            ]}
          >
            {CALLERS.map((c, i) => (
              <FNode key={c.name} x={16} y={c.y} w={164} h={64} label={c.name} sub="getInstance()" active={phase === i} />
            ))}
            <FNode {...gate} icon={Lock} label="getInstance()" sub={phase === 0 ? 'instance == null → new' : 'instance có rồi → reuse'} tone="accent" active />
            <FNode
              x={inst.x}
              y={inst.y}
              w={inst.w}
              h={inst.h}
              icon={Database}
              label="Config #1"
              sub="DUY NHẤT"
              tone="ok"
              dimmed={false}
              active={phase >= 0}
              style={{ opacity: 1 }}
            />
            {CALLERS.map((c, i) => (
              <Packet
                key={`req-${i}-${phase === i}`}
                pts={[
                  { x: 180, y: c.y + 32 },
                  { x: 240, y: c.y + 32 },
                  { x: 240, y: 218 },
                  { x: gate.x + 10, y: 218 },
                ]}
                dur={1.1}
                repeatDelay={1.3}
                label="call"
                visible={phase === i}
              />
            ))}
            {/* first call constructs; later calls bounce the same ref back */}
            <Packet
              key={`new-${phase === 0}`}
              pts={[{ x: gate.x + gate.w, y: 218 }, { x: inst.x, y: 218 }]}
              dur={0.8}
              delay={1.1}
              repeatDelay={1.5}
              color={T.warn}
              square
              label="new (1 lần duy nhất)"
              visible={phase === 0}
            />
            {CALLERS.slice(1).map((c, j) => {
              const i = j + 1
              return (
                <Packet
                  key={`ref-${i}-${phase === i}`}
                  pts={[
                    { x: inst.x, y: 218 },
                    { x: gate.x + gate.w, y: 218 },
                    { x: 240, y: 218 },
                    { x: 240, y: c.y + 32 },
                    { x: 180, y: c.y + 32 },
                  ]}
                  dur={1.2}
                  delay={1.15}
                  repeatDelay={1.2}
                  color={T.ok}
                  label="same ref ↩"
                  visible={phase === i}
                />
              )
            })}
            <Pulse x={inst.x + inst.w / 2} y={inst.y + inst.h / 2} color={T.ok} visible={phase === 3} />
            <Chip x={345} y={402} text={phase === 0 ? 'lần đầu: KHỞI TẠO' : phase === 3 ? '✓ 3 module — 1 instance — 1 sự thật' : 'lần sau: TÁI DÙNG'} tone={phase === 3 ? 'ok' : 'accent'} />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
