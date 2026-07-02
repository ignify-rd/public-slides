import { motion } from 'framer-motion'
import { T, clamp } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { Database } from 'lucide-react'
import type { SlideProps } from './types'

const NAMES = ['Order', 'User', 'Stock']

export default function S26DbPerService(_: SlideProps) {
  // 0: shared DB — nghẽn & khoá lẫn nhau; 1: mỗi service một DB
  const phase = useTicker([3400, 3800])
  return (
    <SlideLayout
      kicker="MICROSERVICES · PHÂN RÃ — DATABASE PER SERVICE"
      title={<>Chung database = chung xiềng xích. <Em>Mỗi service một DB</Em></>}
    >
      <Split
        leftW={410}
        left={
          <Bullets
            items={[
              { t: 'Shared DB: đổi 1 schema, vỡ 3 team', d: 'migration của Order khoá luôn bảng User đang đọc' },
              { t: 'DB riêng: tự chủ hoàn toàn', d: 'tự chọn Postgres / Mongo / Redis, tự scale, tự migrate' },
              { t: 'Cái giá phải trả', d: 'hết JOIN xuyên service — dữ liệu ghép bằng API, đồng bộ bằng event / Saga' },
            ]}
          />
        }
        right={
          <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
            {/* anti-pattern */}
            <motion.div animate={{ opacity: phase === 0 ? 1 : 0.32 }} transition={{ duration: 0.4 }}>
              <FlowCanvas
                w={310}
                h={400}
                wires={NAMES.map((_, i) => ({
                  pts: [
                    { x: 62 + i * 93, y: 96 },
                    { x: 155, y: 210 },
                  ],
                  arrow: true,
                  color: phase === 0 ? 'rgba(255,82,82,0.4)' : undefined,
                }))}
              >
                {NAMES.map((n, i) => (
                  <FNode key={n} x={16 + i * 93} y={30} w={92} h={66} label={n} sub="service" />
                ))}
                <FNode x={92} y={210} w={126} h={96} icon={Database} label="1 DB chung" sub="schema khổng lồ" tone="danger" active={phase === 0} />
                {NAMES.map((_, i) => (
                  <Packet
                    key={`c-${i}-${phase}`}
                    pts={[
                      { x: 62 + i * 93, y: 96 },
                      { x: 155, y: 210 },
                    ]}
                    dur={0.9}
                    delay={i * 0.3}
                    repeatDelay={0.5}
                    size={9}
                    color={T.danger}
                    visible={phase === 0}
                  />
                ))}
                <Chip x={155} y={330} text="⚠ lock · nghẽn · coupling ngầm" tone="danger" visible={phase === 0} />
              </FlowCanvas>
            </motion.div>

            {/* pattern */}
            <motion.div animate={{ opacity: phase === 1 ? 1 : 0.32 }} transition={{ duration: 0.4 }}>
              <FlowCanvas
                w={330}
                h={400}
                wires={NAMES.map((_, i) => ({
                  pts: [
                    { x: 66 + i * 100, y: 96 },
                    { x: 66 + i * 100, y: 210 },
                  ],
                  arrow: true,
                  color: 'rgba(46,194,126,0.45)',
                }))}
              >
                {NAMES.map((n, i) => (
                  <FNode key={n} x={16 + i * 100} y={30} w={100} h={66} label={n} sub="service" tone={phase === 1 ? 'ok' : 'default'} />
                ))}
                {[ 'Postgres', 'Mongo', 'Redis' ].map((db, i) => (
                  <FNode key={db} x={16 + i * 100} y={210} w={100} h={80} icon={Database} label={db} sub={`db riêng ${NAMES[i]}`} tone={phase === 1 ? 'ok' : 'default'} active={phase === 1} />
                ))}
                {NAMES.map((_, i) => (
                  <Packet
                    key={`p-${i}-${phase}`}
                    pts={[
                      { x: 66 + i * 100, y: 96 },
                      { x: 66 + i * 100, y: 210 },
                    ]}
                    dur={0.9}
                    delay={i * 0.3}
                    repeatDelay={0.5}
                    size={9}
                    color={T.ok}
                    visible={phase === 1}
                  />
                ))}
                <Chip x={165} y={330} text="✓ độc lập schema · scale · deploy" tone="ok" visible={phase === 1} />
              </FlowCanvas>
            </motion.div>
          </div>
        }
      />
      <motion.div
        animate={{ opacity: 1 }}
        style={{ position: 'absolute', bottom: 26, left: 72, fontFamily: T.mono, fontSize: clamp('0.68rem', '1vw', '0.8rem'), color: T.muted }}
      >
        nguyên tắc: service khác muốn dữ liệu của bạn? Gọi API của bạn — không bao giờ chọc thẳng DB
      </motion.div>
    </SlideLayout>
  )
}
