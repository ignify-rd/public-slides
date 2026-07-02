import { motion } from 'framer-motion'
import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip, Pulse } from '../components/diagram'
import { Zap, Server, HeartPulse } from 'lucide-react'
import type { SlideProps } from './types'

const STATES = ['CLOSED', 'ĐẾM LỖI', 'OPEN', 'HALF-OPEN'] as const

export default function S32CircuitBreaker(_: SlideProps) {
  // 0 CLOSED ok → 1 lỗi dồn dập 3/3 → 2 OPEN fail-fast → 3 HALF-OPEN thử lại → về CLOSED
  const phase = useTicker([2800, 3000, 3200, 3200])
  const cb = { x: 268, y: 168, w: 176, h: 96 }
  const stateLabel = ['CLOSED — cho qua', 'CLOSED — lỗi 3/3 ⚠', 'OPEN — ngắt mạch', 'HALF-OPEN — thử 1 request']
  const cbTone = phase === 0 ? 'ok' : phase === 1 ? 'warn' : phase === 2 ? 'danger' : 'accent'
  return (
    <SlideLayout
      kicker="MICROSERVICES · CHỊU LỖI — CIRCUIT BREAKER"
      title={<>Cầu dao điện cho service: <Em>lỗi dồn dập thì ngắt</Em>, hồi phục thì đóng lại</>}
    >
      <Split
        leftW={410}
        left={
          <Bullets
            items={[
              { t: 'Vì sao phải ngắt?', d: 'cứ gọi tiếp service đang hấp hối = giữ thread chờ timeout → chết dây chuyền' },
              { t: 'OPEN: fail-fast + fallback', d: 'trả lỗi/cache ngay lập tức, service kia được yên để hồi sức' },
              { t: 'HALF-OPEN: thăm dò', d: 'hết thời gian chờ, nhả 1 request thử — sống thì đóng mạch lại' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={700}
            h={434}
            wires={[
              { pts: [{ x: 156, y: 216 }, { x: cb.x, y: 216 }], arrow: true, opacity: 0.5 },
              { pts: [{ x: cb.x + cb.w, y: 216 }, { x: 540, y: 216 }], arrow: true, opacity: phase === 2 ? 0.15 : 0.5 },
            ]}
          >
            {/* state machine pills */}
            <div style={{ position: 'absolute', left: 60, top: 20, display: 'flex', gap: 10 }}>
              {STATES.map((s, i) => (
                <motion.div
                  key={s}
                  animate={{
                    borderColor: phase === i ? (i === 2 ? 'rgba(255,82,82,0.9)' : i === 3 ? 'rgba(109,140,255,0.9)' : 'rgba(46,194,126,0.9)') : 'rgba(255,255,255,0.14)',
                    opacity: phase === i ? 1 : 0.45,
                  }}
                  style={{
                    border: '1px solid',
                    borderRadius: 999,
                    padding: '7px 18px',
                    fontFamily: T.mono,
                    fontSize: 11.5,
                    fontWeight: 700,
                  }}
                >
                  {s}
                </motion.div>
              ))}
            </div>
            <FNode x={16} y={180} w={140} h={72} label="Order svc" sub="caller" active />
            <FNode
              {...cb}
              icon={Zap}
              label="Circuit Breaker"
              sub={stateLabel[phase]}
              tone={cbTone}
              active
            />
            <FNode
              x={540}
              y={174}
              w={148}
              h={84}
              icon={phase === 3 ? HeartPulse : Server}
              label="Payment svc"
              sub={phase === 0 ? 'khoẻ mạnh' : phase === 1 ? '🔥 quá tải, timeout' : phase === 2 ? 'đang hồi sức…' : 'đã hồi phục ✓'}
              tone={phase === 0 ? 'ok' : phase === 1 ? 'danger' : phase === 2 ? 'warn' : 'ok'}
              active={phase === 1 || phase === 3}
            />
            {/* traffic per state */}
            {(phase === 0 || phase === 1) && (
              <>
                <Packet key={`t1-${phase}`} pts={[{ x: 156, y: 216 }, { x: cb.x, y: 216 }]} dur={0.7} repeatDelay={0.9} size={10} label="req" />
                <Packet
                  key={`t2-${phase}`}
                  pts={[{ x: cb.x + cb.w, y: 216 }, { x: 540, y: 216 }]}
                  dur={0.7}
                  delay={0.75}
                  repeatDelay={0.9}
                  size={10}
                  color={phase === 0 ? T.ok : T.danger}
                  label={phase === 0 ? '200 ✓' : 'timeout ✗'}
                />
              </>
            )}
            {phase === 2 && (
              <>
                <Packet key="ff-in" pts={[{ x: 156, y: 216 }, { x: cb.x + 20, y: 216 }]} dur={0.6} repeatDelay={0.8} size={10} label="req" />
                <Packet
                  key="ff-out"
                  pts={[{ x: cb.x + 20, y: 238 }, { x: 156, y: 238 }]}
                  dur={0.6}
                  delay={0.65}
                  repeatDelay={0.8}
                  size={10}
                  color={T.warn}
                  label="fallback ↩ (0ms)"
                />
                <Pulse x={cb.x + cb.w / 2} y={cb.y + 20} color={T.danger} />
              </>
            )}
            {phase === 3 && (
              <>
                <Packet key="probe" pts={[{ x: 156, y: 216 }, { x: cb.x, y: 216 }, { x: cb.x + cb.w, y: 216 }, { x: 540, y: 216 }]} dur={1.6} repeatDelay={1.6} label="1 request thăm dò" color={T.accentBright} />
                <Packet key="probe-ok" pts={[{ x: 540, y: 240 }, { x: 156, y: 240 }]} dur={1.2} delay={1.7} repeatDelay={2} color={T.ok} label="✓ 200 → đóng mạch (CLOSED)" />
              </>
            )}
            <Chip
              x={350}
              y={396}
              text={
                phase === 0
                  ? 'mạch đóng — traffic chảy bình thường'
                  : phase === 1
                    ? 'lỗi liên tiếp vượt ngưỡng (3/3) → NHẢY CẦU DAO'
                    : phase === 2
                      ? 'không gọi nữa: caller nhận fallback ngay, không treo thread nào'
                      : 'thử 1 request: thành công → khép mạch, thất bại → mở tiếp'
              }
              tone={phase === 0 ? 'ok' : phase === 1 ? 'danger' : phase === 2 ? 'warn' : 'accent'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
