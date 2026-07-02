import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { Globe, Route, Landmark } from 'lucide-react'
import type { SlideProps } from './types'

const SVC = [
  { y: 26, label: 'Order Service', route: '/orders' },
  { y: 148, label: 'Payment Service', route: '/payments' },
  { y: 270, label: 'Report Service', route: '/reports' },
]

const MONO_H = [330, 226, 122, 56]
const MONO_SUB = ['/orders · /payments · /reports', '/payments · /reports', '/reports', '☠ retired']

export default function S25Strangler(_: SlideProps) {
  // mỗi phase “bóp nghẹt” thêm một route khỏi monolith
  const phase = useTicker([2800, 2800, 2800, 3200])
  const routerOut = { x: 320, y: 215 }
  return (
    <SlideLayout
      kicker="MICROSERVICES · PHÂN RÃ — STRANGLER FIG"
      title={<>Thay monolith <Em>từng route một</Em> — không có ngày “big bang”</>}
    >
      <Split
        leftW={420}
        left={
          <Bullets
            items={[
              { t: 'Facade/Router đứng trước', d: 'quyết định request đi vào code cũ hay service mới' },
              { t: 'Bóc dần từng nghiệp vụ', d: 'route nào tách xong thì chuyển hướng — người dùng không hề biết' },
              { t: 'Rollback dễ dàng', d: 'service mới lỗi? Trỏ route ngược về monolith trong 1 giây' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={700}
            h={430}
            wires={[
              { pts: [{ x: 128, y: 215 }, { x: 178, y: 215 }], arrow: true },
              { pts: [routerOut, { x: 385, y: 215 }], opacity: 0.5 },
              ...SVC.map((s) => ({
                pts: [routerOut, { x: 350, y: 215 }, { x: 350, y: s.y + 33 }, { x: 545, y: s.y + 33 }] as { x: number; y: number }[],
                dashed: true,
                opacity: 0.35,
              })),
            ]}
          >
            <FNode x={12} y={180} w={116} h={70} icon={Globe} label="Users" />
            <FNode x={178} y={176} w={142} h={80} icon={Route} label="Router" sub="facade / proxy" tone="accent" active />
            <FNode
              x={385}
              y={40}
              w={130}
              h={MONO_H[phase]}
              icon={Landmark}
              label="MONOLITH"
              sub={MONO_SUB[phase]}
              tone={phase === 3 ? 'default' : 'warn'}
              dimmed={phase === 3}
              style={{ transition: 'height 0.7s ease' }}
            />
            {SVC.map((s, i) => (
              <FNode
                key={s.label}
                x={545}
                y={s.y}
                w={148}
                h={66}
                label={s.label}
                sub={s.route}
                tone="ok"
                dimmed={phase < i + 1}
                active={phase === i + 1}
              />
            ))}
            {/* traffic: routes not yet extracted → monolith */}
            <Packet
              key={`mono-${phase}`}
              pts={[{ x: 128, y: 215 }, { x: 178, y: 215 }]}
              dur={0.7}
              repeatDelay={1.1}
              size={10}
              label="request"
            />
            {SVC.map((s, i) =>
              phase >= i + 1 ? (
                <Packet
                  key={`svc-${i}-${phase}`}
                  pts={[routerOut, { x: 350, y: 215 }, { x: 350, y: s.y + 33 }, { x: 545, y: s.y + 33 }]}
                  dur={1.2}
                  delay={0.4 + i * 0.3}
                  repeatDelay={0.6}
                  color={T.ok}
                  size={10}
                  label={s.route}
                />
              ) : (
                <Packet
                  key={`old-${i}-${phase}`}
                  pts={[routerOut, { x: 385, y: 215 }]}
                  dur={0.8}
                  delay={0.4 + i * 0.3}
                  repeatDelay={1}
                  color={T.warn}
                  size={10}
                  label={s.route}
                />
              ),
            )}
            <Chip
              x={350}
              y={396}
              text={
                ['0/3 route tách — monolith gánh tất', '1/3 — /orders đã sang service mới', '2/3 — monolith teo dần', '3/3 — cây vả đã “nuốt” xong cây chủ ✓'][phase]
              }
              tone={phase === 3 ? 'ok' : 'accent'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
