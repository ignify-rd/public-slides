import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { Rocket, Search, ShoppingCart, CreditCard } from 'lucide-react'
import type { SlideProps } from './types'

const FRAGS = [
  { x: 40, label: 'Search', team: 'Team A · React 18', icon: Search },
  { x: 250, label: 'Cart', team: 'Team B · Vue 3', icon: ShoppingCart },
  { x: 460, label: 'Checkout', team: 'Team C · React 19', icon: CreditCard },
]

export default function S21Microfrontend(_: SlideProps) {
  // 0: shell ghép 3 mảnh; 1: Team B deploy riêng phần Cart
  const phase = useTicker([3200, 3600])
  return (
    <SlideLayout
      kicker="PHẦN 03 · FRONTEND"
      title={<>Microfrontend: <Em>mỗi team một mảnh</Em>, deploy không đợi nhau</>}
    >
      <Split
        leftW={430}
        left={
          <Bullets
            items={[
              { t: 'Chia frontend theo nghiệp vụ', d: 'mỗi mảnh một repo, một pipeline, một team làm chủ' },
              { t: 'Deploy độc lập', d: 'Cart lên v2.1 — Search & Checkout không cần rebuild' },
              { t: 'Đổi giá phải trả', d: 'phức tạp ở khâu tích hợp, trùng dependency — chỉ đáng khi nhiều team' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={680}
            h={430}
            wires={FRAGS.map((f) => ({
              pts: [
                { x: f.x + 90, y: 150 },
                { x: f.x + 90, y: 190 },
              ],
              arrow: true,
              opacity: 0.6,
            }))}
          >
            {/* shell */}
            <FNode x={20} y={20} w={620} h={130} label="" tone="accent" active={false} style={{ justifyContent: 'flex-start', paddingTop: 10 }}>
              <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>Shell App (container)</div>
              <div style={{ fontFamily: T.mono, fontSize: 11, color: T.muted }}>routing · layout · ghép các mảnh lúc runtime</div>
            </FNode>
            {FRAGS.map((f, i) => (
              <FNode
                key={f.label}
                x={f.x}
                y={190}
                w={180}
                h={110}
                icon={f.icon}
                label={f.label}
                sub={f.team}
                tone={phase === 1 && i === 1 ? 'ok' : 'default'}
                active={phase === 1 && i === 1}
                dimmed={phase === 1 && i !== 1}
              />
            ))}
            {/* independent pipelines */}
            {FRAGS.map((f, i) => (
              <FNode
                key={`ci-${i}`}
                x={f.x + 26}
                y={344}
                w={128}
                h={54}
                icon={Rocket}
                label=""
                sub={`CI/CD ${['A', 'B', 'C'][i]}`}
                dimmed={phase === 1 && i !== 1}
              />
            ))}
            {FRAGS.map((f, i) => (
              <Packet
                key={`dep-${i}-${phase}`}
                pts={[
                  { x: f.x + 90, y: 344 },
                  { x: f.x + 90, y: 300 },
                ]}
                dur={1}
                delay={phase === 0 ? i * 0.4 : 0}
                repeatDelay={1.4}
                color={T.ok}
                square
                label={phase === 1 ? 'deploy v2.1' : 'deploy'}
                visible={phase === 0 || i === 1}
              />
            ))}
            <Chip
              x={340}
              y={155}
              text={phase === 0 ? '3 mảnh độc lập ghép thành 1 trang' : '✓ chỉ Cart thay đổi — 2 mảnh kia không rebuild, không risk'}
              tone={phase === 0 ? 'accent' : 'ok'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
