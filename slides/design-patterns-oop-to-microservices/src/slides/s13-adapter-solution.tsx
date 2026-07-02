import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { CodeBlock } from '../components/CodeBlock'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { ShoppingCart, Landmark, Plug } from 'lucide-react'
import type { SlideProps } from './types'

const CODE = `class PaymentAdapter implements PaymentProcessor {
  constructor(private legacy: LegacyPayGate) {}
  processPayment(order: Order) {
    const xml = toXml(order)   // DỊCH dữ liệu
    const res = this.legacy.makeTransaction(xml)
    return fromXml(res)        // dịch ngược kết quả
  }
}`

export default function S13AdapterSolution(_: SlideProps) {
  // 0: đi — json→xml; 1: về — xml→json
  const phase = useTicker([3000, 3000])
  return (
    <SlideLayout
      kicker="STRUCTURAL · ADAPTER — CƠ CHẾ"
      title={<>Adapter đứng giữa, <Em>dịch hai chiều</Em> — không đập bỏ gì cả</>}
    >
      <Split
        leftW={470}
        left={
          <>
            <Bullets
              items={[
                { t: 'Checkout giữ nguyên', d: 'vẫn gọi processPayment(order) như cũ' },
                { t: 'Vendor giữ nguyên', d: 'adapter dịch object ⇄ XML thay cho cả hai bên' },
              ]}
            />
            <CodeBlock code={CODE} fs={12} title="payment-adapter.ts" highlights={phase === 0 ? [3] : [5]} />
          </>
        }
        right={
          <FlowCanvas
            w={690}
            h={420}
            wires={[
              { pts: [{ x: 190, y: 200 }, { x: 268, y: 200 }], arrow: true },
              { pts: [{ x: 448, y: 200 }, { x: 520, y: 200 }], arrow: true },
            ]}
          >
            <FNode x={16} y={156} w={174} h={88} icon={ShoppingCart} label="Checkout" sub="processPayment(order)" active={phase === 0} />
            <FNode x={268} y={146} w={180} h={108} icon={Plug} label="PaymentAdapter" sub={phase === 0 ? 'toXml(order)' : 'fromXml(res)'} tone="accent" active />
            <FNode x={520} y={150} w={160} h={100} icon={Landmark} label="LegacyPayGate" sub="makeTransaction(xml)" tone="warn" active={phase === 1} />

            <Packet
              key={`go1-${phase === 0}`}
              pts={[{ x: 190, y: 200 }, { x: 268, y: 200 }]}
              dur={1}
              repeatDelay={2}
              label="{ order }"
              visible={phase === 0}
            />
            <Packet
              key={`go2-${phase === 0}`}
              pts={[{ x: 448, y: 200 }, { x: 520, y: 200 }]}
              dur={1}
              delay={1.4}
              repeatDelay={1.6}
              color={T.warn}
              square
              label="<xml>"
              visible={phase === 0}
            />
            <Packet
              key={`bk1-${phase === 1}`}
              pts={[{ x: 520, y: 230 }, { x: 448, y: 230 }]}
              dur={1}
              repeatDelay={2}
              color={T.warn}
              square
              label="<ok/>"
              visible={phase === 1}
            />
            <Packet
              key={`bk2-${phase === 1}`}
              pts={[{ x: 268, y: 230 }, { x: 190, y: 230 }]}
              dur={1}
              delay={1.4}
              repeatDelay={1.6}
              color={T.ok}
              label="{ status: 'paid' }"
              visible={phase === 1}
            />
            <Chip
              x={350}
              y={318}
              text={phase === 0 ? '→ chiều đi: object được dịch thành XML' : '← chiều về: XML được dịch lại thành object'}
              tone="accent"
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
