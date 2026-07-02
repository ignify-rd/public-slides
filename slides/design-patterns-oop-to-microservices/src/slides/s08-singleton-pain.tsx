import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { Database, FileWarning } from 'lucide-react'
import type { SlideProps } from './types'

const CALLERS = [
  { y: 40, name: 'OrderService' },
  { y: 180, name: 'PaymentService' },
  { y: 320, name: 'ReportJob' },
]

export default function S08SingletonPain(_: SlideProps) {
  // 0..2: each module spawns its own Config; 3: mismatch revealed
  const phase = useTicker([1800, 1800, 1800, 2600])
  return (
    <SlideLayout kicker="CREATIONAL · SINGLETON — NỖI ĐAU" title={<>Mỗi nơi tự <Em>new Config()</Em> — 3 bản cấu hình lệch nhau</>}>
      <Split
        leftW={400}
        left={
          <Bullets
            items={[
              { t: 'Mỗi module một instance riêng', d: 'không ai biết đâu là “sự thật” duy nhất' },
              { t: 'Lãng phí tài nguyên', d: 'mỗi instance mở lại DB connection pool riêng' },
              { t: 'State lệch nhau', d: 'nơi bật cache, nơi tắt — bug chập chờn cực khó truy vết' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={660}
            h={440}
            wires={CALLERS.map((c) => ({
              pts: [
                { x: 190, y: c.y + 32 },
                { x: 330, y: c.y + 32 },
              ],
              arrow: true,
            }))}
          >
            {CALLERS.map((c, i) => (
              <FNode key={c.name} x={20} y={c.y} w={170} h={64} label={c.name} sub={`new Config()  // #${i + 1}`} active={phase === i} />
            ))}
            {CALLERS.map((c, i) => (
              <FNode
                key={i}
                x={330}
                y={c.y}
                w={190}
                h={64}
                icon={Database}
                label={`Config #${i + 1}`}
                sub={i === 1 ? 'cache: OFF · pool: 20' : 'cache: ON · pool: 10'}
                tone={phase === 3 ? 'danger' : 'default'}
                dimmed={phase < i}
                active={phase === 3 && i === 1}
              />
            ))}
            {CALLERS.map((c, i) => (
              <Packet
                key={`${i}-${phase === i}`}
                pts={[
                  { x: 190, y: c.y + 32 },
                  { x: 330, y: c.y + 32 },
                ]}
                dur={1.4}
                repeatDelay={0.6}
                color={T.warn}
                square
                label="new"
                visible={phase === i}
              />
            ))}
            <Chip x={425} y={402} text="⚠ 3 instances — trạng thái KHÔNG đồng nhất" tone="danger" visible={phase === 3} />
            <FNode x={556} y={160} w={84} h={84} icon={FileWarning} tone="danger" label="BUG" dimmed={phase !== 3} active={phase === 3} />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
