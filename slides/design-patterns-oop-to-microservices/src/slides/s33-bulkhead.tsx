import { motion } from 'framer-motion'
import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { Ship, Search, CreditCard } from 'lucide-react'
import type { SlideProps } from './types'

function PoolSlots({ x, y, busy, total = 8, color }: { x: number; y: number; busy: number; total?: number; color: string }) {
  return (
    <div style={{ position: 'absolute', left: x, top: y, display: 'flex', gap: 5 }}>
      {Array.from({ length: total }, (_, i) => (
        <motion.div
          key={i}
          animate={{
            background: i < busy ? color : 'rgba(255,255,255,0.08)',
            borderColor: i < busy ? color : 'rgba(255,255,255,0.2)',
          }}
          transition={{ duration: 0.3, delay: i * 0.06 }}
          style={{ width: 16, height: 22, borderRadius: 4, border: '1px solid' }}
        />
      ))}
    </div>
  )
}

export default function S33Bulkhead(_: SlideProps) {
  // 0: hai khoang chạy bình thường; 1: Payment treo — khoang A ngập dần; 2: A đầy cứng nhưng B vẫn sống
  const phase = useTicker([2800, 3000, 3600])
  const busyA = phase === 0 ? 3 : phase === 1 ? 6 : 8
  return (
    <SlideLayout
      kicker="MICROSERVICES · CHỊU LỖI — BULKHEAD"
      title={<>Khoang tàu chống chìm: <Em>lỗi bị nhốt</Em> trong ngăn của nó</>}
    >
      <Split
        leftW={410}
        left={
          <Bullets
            items={[
              { t: 'Chung 1 pool = chìm cả tàu', d: 'Payment treo chiếm hết 100 thread — Search vạ lây dù chẳng liên quan' },
              { t: 'Chia ngăn tài nguyên', d: 'mỗi dependency một pool thread / connection riêng, có hạn mức' },
              { t: 'Ngăn nào ngập, ngăn đó chịu', d: 'Payment cạn pool → chỉ tính năng thanh toán lỗi, phần còn lại chạy tiếp' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={700}
            h={434}
            wires={[
              { pts: [{ x: 130, y: 216 }, { x: 186, y: 216 }, { x: 186, y: 120 }, { x: 232, y: 120 }], arrow: true, opacity: 0.5 },
              { pts: [{ x: 130, y: 216 }, { x: 186, y: 216 }, { x: 186, y: 316 }, { x: 232, y: 316 }], arrow: true, opacity: 0.5 },
              { pts: [{ x: 480, y: 120 }, { x: 540, y: 120 }], arrow: true, opacity: 0.5 },
              { pts: [{ x: 480, y: 316 }, { x: 540, y: 316 }], arrow: true, opacity: 0.5 },
            ]}
          >
            <FNode x={12} y={182} w={118} h={70} icon={Ship} label="App" sub="requests" active />
            {/* pool A */}
            <FNode
              x={232}
              y={64}
              w={248}
              h={112}
              label="Khoang A — pool Payment"
              sub={`${busyA}/8 thread bận`}
              tone={phase === 2 ? 'danger' : phase === 1 ? 'warn' : 'ok'}
              active={phase > 0}
              style={{ justifyContent: 'flex-start', paddingTop: 12 }}
            >
              <PoolSlots x={38} y={74} busy={busyA} color={phase === 0 ? 'rgba(46,194,126,0.8)' : 'rgba(255,82,82,0.85)'} />
            </FNode>
            {/* pool B */}
            <FNode
              x={232}
              y={260}
              w={248}
              h={112}
              label="Khoang B — pool Search"
              sub="3/8 thread bận"
              tone="ok"
              style={{ justifyContent: 'flex-start', paddingTop: 12 }}
            >
              <PoolSlots x={38} y={74} busy={3} color="rgba(46,194,126,0.8)" />
            </FNode>
            <FNode
              x={540}
              y={86}
              w={148}
              h={70}
              icon={CreditCard}
              label="Payment svc"
              sub={phase === 0 ? 'ok' : '🔥 treo, không phản hồi'}
              tone={phase === 0 ? 'ok' : 'danger'}
              active={phase === 1}
            />
            <FNode x={540} y={282} w={148} h={70} icon={Search} label="Search svc" sub="vẫn khoẻ ✓" tone="ok" active={phase === 2} />
            {/* traffic */}
            <Packet
              key={`a-${phase}`}
              pts={[{ x: 130, y: 216 }, { x: 186, y: 216 }, { x: 186, y: 120 }, { x: 232, y: 120 }]}
              dur={0.9}
              repeatDelay={0.7}
              size={10}
              color={phase === 0 ? T.accentBright : T.danger}
              label={phase === 2 ? 'pool đầy → từ chối NGAY' : 'pay req'}
            />
            <Packet
              key={`b-${phase}`}
              pts={[{ x: 130, y: 216 }, { x: 186, y: 216 }, { x: 186, y: 316 }, { x: 232, y: 316 }, { x: 480, y: 316 }, { x: 540, y: 316 }]}
              dur={1.4}
              delay={0.4}
              repeatDelay={0.5}
              size={10}
              color={T.ok}
              label="search req"
            />
            <Packet
              key={`b-ok-${phase}`}
              pts={[{ x: 540, y: 336 }, { x: 130, y: 336 }]}
              dur={1.2}
              delay={1.9}
              repeatDelay={0.8}
              size={10}
              color={T.ok}
              label="✓ 200"
            />
            <Chip
              x={350}
              y={412}
              text={
                phase === 0
                  ? 'mỗi dependency một khoang tài nguyên riêng'
                  : phase === 1
                    ? 'Payment treo → CHỈ khoang A ngập dần…'
                    : '⚓ khoang A đầy cứng — nhưng Search vẫn phục vụ bình thường'
              }
              tone={phase === 0 ? 'accent' : phase === 1 ? 'warn' : 'ok'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
