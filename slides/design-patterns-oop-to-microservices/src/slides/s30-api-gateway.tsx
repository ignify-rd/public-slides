import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip, Pulse } from '../components/diagram'
import { Monitor, Smartphone, Building, DoorOpen } from 'lucide-react'
import type { SlideProps } from './types'

const CLIENTS = [
  { y: 26, icon: Monitor, label: 'Web' },
  { y: 156, icon: Smartphone, label: 'Mobile' },
  { y: 286, icon: Building, label: 'Partner' },
]
const SERVICES = [
  { y: 26, label: 'Order svc' },
  { y: 156, label: 'User svc' },
  { y: 286, label: 'Catalog svc' },
]

export default function S30ApiGateway(_: SlideProps) {
  // 0: request hợp lệ đi xuyên; 1: token sai → 401 tại cổng; 2: spam → 429 tại cổng
  const phase = useTicker([3000, 3000, 3000])
  const gw = { x: 268, y: 130, w: 176, h: 152 }
  const gwIn = { x: gw.x, y: 206 }
  const gwOut = { x: gw.x + gw.w, y: 206 }
  return (
    <SlideLayout
      kicker="MICROSERVICES · GIAO TIẾP — API GATEWAY"
      title={<>Một cửa duy nhất: <Em>auth · rate-limit · routing</Em> xử ngay tại cổng</>}
    >
      <Split
        leftW={410}
        left={
          <Bullets
            items={[
              { t: 'Single entry point', d: 'client chỉ cần biết 1 địa chỉ, không biết 30 service bên trong' },
              { t: 'Cross-cutting dồn về cổng', d: 'JWT, rate-limit, load-balancing — service bên trong nhẹ gánh' },
              { t: 'Biến thể BFF', d: 'mỗi loại client (web / mobile) một gateway may đo riêng' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={700}
            h={434}
            wires={[
              ...CLIENTS.map((c) => ({
                pts: [{ x: 140, y: c.y + 33 }, { x: 210, y: c.y + 33 }, { x: 210, y: 206 }, gwIn],
                opacity: 0.45,
              })),
              ...SERVICES.map((s) => ({
                pts: [gwOut, { x: 500, y: 206 }, { x: 500, y: s.y + 33 }, { x: 540, y: s.y + 33 }],
                opacity: 0.45,
                dashed: true,
              })),
            ]}
          >
            {CLIENTS.map((c, i) => (
              <FNode key={c.label} x={16} y={c.y} w={124} h={66} icon={c.icon} label={c.label} active={phase === i} />
            ))}
            <FNode {...gw} icon={DoorOpen} label="API Gateway" tone="accent" active style={{ justifyContent: 'flex-start', paddingTop: 14 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 6, fontFamily: T.mono, fontSize: 10.5 }}>
                <span style={{ color: phase === 1 ? T.danger : T.ok }}>① JWT auth {phase === 1 ? '✗' : '✓'}</span>
                <span style={{ color: phase === 2 ? T.danger : T.ok }}>② rate limit {phase === 2 ? '✗' : '✓'}</span>
                <span style={{ color: T.ok }}>③ route / LB</span>
              </div>
            </FNode>
            {SERVICES.map((s, i) => (
              <FNode key={s.label} x={540} y={s.y} w={144} h={66} label={s.label} sub="không lo auth nữa" tone="ok" dimmed={phase !== 0 && i !== 0} active={phase === 0 && i === 0} />
            ))}
            {/* happy path */}
            <Packet
              key={`in-${phase}`}
              pts={[{ x: 140, y: CLIENTS[phase].y + 33 }, { x: 210, y: CLIENTS[phase].y + 33 }, { x: 210, y: 206 }, gwIn]}
              dur={1}
              repeatDelay={2}
              label={phase === 0 ? 'GET /orders + JWT ✓' : phase === 1 ? 'token giả 🕵️' : 'request thứ 1.001/phút'}
              color={phase === 0 ? T.accentBright : T.warn}
            />
            {phase === 0 && (
              <>
                <Packet
                  key="route"
                  pts={[gwOut, { x: 500, y: 206 }, { x: 500, y: 59 }, { x: 540, y: 59 }]}
                  dur={1}
                  delay={1.1}
                  repeatDelay={1.9}
                  color={T.ok}
                  label="→ Order svc"
                />
              </>
            )}
            {phase !== 0 && (
              <>
                <Packet
                  key={`rej-${phase}`}
                  pts={[gwIn, { x: 210, y: 206 }, { x: 210, y: CLIENTS[phase].y + 47 }, { x: 140, y: CLIENTS[phase].y + 47 }]}
                  dur={1}
                  delay={1.15}
                  repeatDelay={1.85}
                  color={T.danger}
                  label={phase === 1 ? '401 Unauthorized ↩' : '429 Too Many Requests ↩'}
                />
                <Pulse x={gw.x + gw.w / 2} y={gw.y + 40} color={T.danger} />
              </>
            )}
            <Chip
              x={350}
              y={404}
              text={
                phase === 0
                  ? 'hợp lệ → định tuyến tới đúng service'
                  : phase === 1
                    ? 'chặn NGAY tại cổng — request rác không bao giờ chạm service'
                    : 'quá hạn mức → 429, bảo vệ service khỏi bị nhấn chìm'
              }
              tone={phase === 0 ? 'ok' : 'danger'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
