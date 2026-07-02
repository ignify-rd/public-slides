import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip, type Tone } from '../components/diagram'
import { Wand2, ShoppingBag, Wallet, PackageX } from 'lucide-react'
import type { SlideProps } from './types'

const SVC = [
  { x: 26, icon: ShoppingBag, label: 'Order Service', tx: 'T1: tạo đơn' },
  { x: 256, icon: Wallet, label: 'Customer Service', tx: 'T2: trừ tiền' },
  { x: 486, icon: PackageX, label: 'Inventory Service', tx: 'T3: trừ kho' },
]

const STEP_TEXT = [
  'T1 — Order: tạo đơn PENDING ✓ (giao dịch cục bộ, commit ngay)',
  'T2 — Customer: trừ 590k ✓',
  'T3 — Inventory: hết hàng ✗ — KHÔNG có rollback chung để gọi!',
  'C2 — bù trừ: HOÀN TIỀN cho khách ↩',
  'C1 — bù trừ: HỦY ĐƠN ↩ → toàn hệ thống nhất quán trở lại ✓',
]

export default function S29Saga(_: SlideProps) {
  const phase = useTicker([2400, 2400, 2800, 2600, 3200])
  const orch = { x: 240, y: 20, w: 220, h: 78 }
  const yTop = 98
  const ySvc = 226
  const anchor = (i: number) => ({ x: SVC[i].x + 100, y: ySvc })
  const down = (i: number) => [
    { x: orch.x + orch.w / 2, y: yTop },
    { x: anchor(i).x, y: yTop + 60 },
    { x: anchor(i).x, y: ySvc },
  ]
  const up = (i: number) => [...down(i)].reverse()

  const orderState: Tone = phase === 4 ? 'warn' : 'ok'
  const custState: Tone = phase >= 3 ? 'warn' : phase >= 1 ? 'ok' : 'default'
  return (
    <SlideLayout
      kicker="MICROSERVICES · DỮ LIỆU — SAGA"
      title={<>Giao dịch xuyên 3 database: <Em>chuỗi tx cục bộ + hành động bù trừ</Em></>}
    >
      <Split
        leftW={400}
        left={
          <Bullets
            items={[
              { t: 'Không còn ACID chung', d: '3 service, 3 DB — không thể BEGIN…COMMIT một thể' },
              { t: 'Chia thành các tx cục bộ', d: 'mỗi bước commit ngay tại service của nó' },
              { t: 'Bước nào fail → bù trừ ngược', d: 'compensating tx hoàn tác các bước đã commit' },
              { t: '2 kiểu điều phối', d: 'Orchestration (nhạc trưởng) · Choreography (nghe event lẫn nhau)' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={700}
            h={434}
            wires={SVC.map((_, i) => ({ pts: down(i), opacity: 0.4, dashed: true }))}
          >
            <FNode {...orch} icon={Wand2} label="Saga Orchestrator" sub={phase < 3 ? 'điều phối tiến trình →' : '⚠ kích hoạt bù trừ ←'} tone={phase < 3 ? 'accent' : 'warn'} active />
            {SVC.map((s, i) => {
              const tone: Tone = i === 2 ? (phase >= 2 ? 'danger' : 'default') : i === 1 ? custState : orderState
              const sub =
                i === 0
                  ? phase === 4
                    ? 'C1: đơn đã HỦY ↩'
                    : 'T1: đơn PENDING ✓'
                  : i === 1
                    ? phase >= 3
                      ? 'C2: đã HOÀN TIỀN ↩'
                      : phase >= 1
                        ? 'T2: đã trừ 590k ✓'
                        : 'T2: trừ tiền'
                    : phase >= 2
                      ? 'T3: HẾT HÀNG ✗'
                      : 'T3: trừ kho'
              return (
                <FNode
                  key={s.label}
                  x={s.x}
                  y={ySvc}
                  w={200}
                  h={86}
                  icon={s.icon}
                  label={s.label}
                  sub={sub}
                  tone={tone}
                  active={phase === i || (phase === 3 && i === 1) || (phase === 4 && i === 0)}
                  dimmed={phase < i && i !== 0}
                />
              )
            })}
            {/* forward commands */}
            {phase <= 2 && (
              <Packet
                key={`fwd-${phase}`}
                pts={down(phase)}
                dur={1}
                repeatDelay={1.4}
                color={T.accentBright}
                square
                label={SVC[phase].tx}
              />
            )}
            {/* replies */}
            {phase <= 1 && (
              <Packet key={`ok-${phase}`} pts={up(phase)} dur={1} delay={1.1} repeatDelay={1.4} color={T.ok} label="✓ committed" />
            )}
            {phase === 2 && (
              <Packet key="fail" pts={up(2)} dur={1} delay={1.1} repeatDelay={1.8} color={T.danger} label="✗ OutOfStock" />
            )}
            {/* compensations */}
            {phase === 3 && (
              <Packet key="c2" pts={down(1)} dur={1} repeatDelay={1.6} color={T.warn} square label="refund(590k) ↩" />
            )}
            {phase === 4 && (
              <Packet key="c1" pts={down(0)} dur={1} repeatDelay={1.6} color={T.warn} square label="cancelOrder(42) ↩" />
            )}
            <Chip x={350} y={370} text={STEP_TEXT[phase]} tone={phase === 2 ? 'danger' : phase >= 3 ? 'warn' : 'ok'} />
            <Chip x={350} y={410} text={`bước ${phase + 1}/5`} />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
