import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Em } from '../components/SlideLayout'
import { CodeBlock } from '../components/CodeBlock'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { Monitor, KeyRound, Gauge, Server } from 'lucide-react'
import type { SlideProps } from './types'

const CODE = `# kong.yml — pattern bằng CẤU HÌNH, không code
services:
  - name: orders
    url: http://orders:3000
    routes:
      - paths: ["/api/orders"]
plugins:
  - name: jwt              # ① chặn 401 tại edge
  - name: rate-limiting    # ② chống spam
    config:
      minute: 60
      policy: redis`

export default function S37Kong(_: SlideProps) {
  // 0: JWT hợp lệ + trong hạn mức → 200; 1: token sai → 401; 2: request 61/phút → 429
  const phase = useTicker([3000, 2800, 3200])
  const jwtOK = phase !== 1
  const rlOK = phase !== 2
  return (
    <SlideLayout
      kicker="CASE STUDY 3/3 — KONG API GATEWAY"
      title={<>JWT + Rate Limiting tại tầng Edge — <Em>12 dòng YAML</Em></>}
    >
      <Split
        leftW={520}
        align="flex-start"
        left={<CodeBlock code={CODE} fs={12.5} title="declarative config" highlights={phase === 1 ? [7] : phase === 2 ? [8, 9, 10, 11] : [2, 3, 4, 5]} />}
        right={
          <FlowCanvas
            w={600}
            h={440}
            wires={[
              { pts: [{ x: 130, y: 120 }, { x: 130, y: 178 }], arrow: true, opacity: 0.5 },
              { pts: [{ x: 130, y: 258 }, { x: 130, y: 316 }], arrow: true, opacity: 0.5 },
              { pts: [{ x: 236, y: 346 }, { x: 400, y: 346 }], arrow: true, opacity: rlOK && jwtOK ? 0.5 : 0.15 },
            ]}
          >
            <FNode x={24} y={40} w={212} h={80} icon={Monitor} label="Client" sub={phase === 0 ? 'JWT ✓ · req 12/phút' : phase === 1 ? 'JWT giả mạo' : 'req thứ 61 trong phút'} active />
            <FNode x={24} y={178} w={212} h={80} icon={KeyRound} label="① jwt plugin" sub={jwtOK ? 'chữ ký hợp lệ ✓' : 'sai chữ ký → 401 ✗'} tone={jwtOK ? 'ok' : 'danger'} active={phase === 1} />
            <FNode x={24} y={316} w={212} h={80} icon={Gauge} label="② rate-limiting" sub={rlOK ? '12/60 phút ✓' : '61/60 → 429 ✗'} tone={rlOK ? 'ok' : 'danger'} active={phase === 2} />
            <FNode x={400} y={306} w={176} h={100} icon={Server} label="orders:3000" sub="upstream — chỉ nhận request SẠCH" tone="accent" active={phase === 0} />

            <Packet key={`s1-${phase}`} pts={[{ x: 130, y: 120 }, { x: 130, y: 178 }]} dur={0.7} repeatDelay={2.3} label="request" color={phase === 1 ? T.warn : T.accentBright} />
            {jwtOK && (
              <Packet key={`s2-${phase}`} pts={[{ x: 130, y: 258 }, { x: 130, y: 316 }]} dur={0.7} delay={0.8} repeatDelay={2.3} color={phase === 2 ? T.warn : T.accentBright} />
            )}
            {phase === 0 && (
              <Packet key="s3" pts={[{ x: 236, y: 346 }, { x: 400, y: 346 }]} dur={0.8} delay={1.6} repeatDelay={2.2} color={T.ok} label="→ 200 OK" />
            )}
            {phase === 1 && (
              <Packet key="r401" pts={[{ x: 236, y: 205 }, { x: 320, y: 205 }, { x: 320, y: 80 }, { x: 236, y: 80 }]} dur={1.1} delay={0.9} repeatDelay={1.9} color={T.danger} label="401 ↩ (chưa chạm service)" />
            )}
            {phase === 2 && (
              <Packet key="r429" pts={[{ x: 236, y: 372 }, { x: 320, y: 372 }, { x: 320, y: 80 }, { x: 236, y: 80 }]} dur={1.2} delay={1.6} repeatDelay={1.6} color={T.danger} label="429 ↩ + Retry-After" />
            )}
            <Chip
              x={300}
              y={420}
              text={
                phase === 0
                  ? 'request sạch mới được chạm vào microservice'
                  : phase === 1
                    ? 'auth fail chết ngay tầng edge — service không tốn 1 CPU cycle'
                    : 'vượt 60 req/phút → chặn, policy đếm chung qua Redis cluster'
              }
              tone={phase === 0 ? 'ok' : 'danger'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
