import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { CodeBlock } from '../components/CodeBlock'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { ShoppingCart, CreditCard, Wallet, QrCode } from 'lucide-react'
import type { SlideProps } from './types'

const CODE = `interface PayStrategy { pay(o: Order): Receipt }

checkout.setStrategy(new PaypalPay())  // đổi lúc runtime
checkout.pay(order)   // luồng core KHÔNG đổi`

const STRATS = [
  { y: 24, label: 'CreditCardPay', icon: CreditCard, m: 'CREDIT' },
  { y: 162, label: 'PaypalPay', icon: Wallet, m: 'PAYPAL' },
  { y: 300, label: 'BankQRPay', icon: QrCode, m: 'BANK' },
]

export default function S17StrategySolution(_: SlideProps) {
  const phase = useTicker([2800, 2800, 2800])
  const s = STRATS[phase]
  const ctx = { x: 250, y: 150, w: 190, h: 104 }
  return (
    <SlideLayout
      kicker="BEHAVIORAL · STRATEGY — CƠ CHẾ"
      title={<>Mỗi thuật toán một hộp — <Em>cắm nóng lúc runtime</Em></>}
    >
      <Split
        leftW={460}
        left={
          <>
            <Bullets
              items={[
                { t: 'Đóng gói từng thuật toán', d: 'mỗi strategy một class, cùng interface pay()' },
                { t: 'Hoán đổi không đụng core', d: 'user đổi phương thức ở checkout — luồng đơn hàng giữ nguyên' },
                { t: 'Thêm MoMo = thêm 1 class mới', d: 'không mở lại code cũ' },
              ]}
            />
            <CodeBlock code={CODE} fs={12.5} title="checkout.ts" highlights={[2]} />
          </>
        }
        right={
          <FlowCanvas
            w={690}
            h={420}
            wires={[
              { pts: [{ x: 172, y: 202 }, { x: ctx.x, y: 202 }], arrow: true },
              ...STRATS.map((st) => ({
                pts: [
                  { x: ctx.x + ctx.w, y: 202 },
                  { x: 490, y: 202 },
                  { x: 490, y: st.y + 32 },
                  { x: 522, y: st.y + 32 },
                ],
                dashed: true,
                opacity: 0.55,
              })),
            ]}
          >
            <FNode x={16} y={168} w={156} h={68} icon={ShoppingCart} label="Order flow" sub="pay(order)" active />
            <FNode
              {...ctx}
              label="Checkout (Context)"
              sub={`strategy = ${s.label}`}
              tone="accent"
              active
            />
            {STRATS.map((st, i) => (
              <FNode
                key={st.label}
                x={522}
                y={st.y}
                w={158}
                h={66}
                icon={st.icon}
                label={st.label}
                sub="implements pay()"
                tone={i === phase ? 'ok' : 'default'}
                active={i === phase}
                dimmed={i !== phase}
              />
            ))}
            <Packet
              key={`in-${phase}`}
              pts={[{ x: 172, y: 202 }, { x: ctx.x, y: 202 }]}
              dur={0.8}
              repeatDelay={2}
              label="order"
            />
            <Packet
              key={`route-${phase}`}
              pts={[
                { x: ctx.x + ctx.w, y: 202 },
                { x: 490, y: 202 },
                { x: 490, y: s.y + 32 },
                { x: 522, y: s.y + 32 },
              ]}
              dur={1}
              delay={0.85}
              repeatDelay={0.95}
              color={T.accentBright}
              label="delegate →"
            />
            <Packet
              key={`ok-${phase}`}
              pts={[
                { x: 522, y: s.y + 46 },
                { x: 476, y: s.y + 46 },
                { x: 476, y: 330 },
                { x: 94, y: 330 },
                { x: 94, y: 236 },
              ]}
              dur={1.2}
              delay={1.95}
              repeatDelay={0.65}
              color={T.ok}
              label="✓ receipt"
            />
            <Chip x={345} y={392} text={`user chọn ${s.m} → setStrategy(${s.label}) — core không đổi 1 dòng`} tone="accent" />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
