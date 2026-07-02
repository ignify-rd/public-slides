import { motion } from 'framer-motion'
import { T, clamp } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Chip } from '../components/diagram'
import type { SlideProps } from './types'

const STAGES = [
  {
    key: 'MONOLITH',
    cap: '1 khối HTML + JS khổng lồ — sửa 1 dòng, test cả trang',
  },
  { key: 'MODULAR', cap: 'tách module theo tính năng — ranh giới rõ hơn, vẫn chung một app' },
  { key: 'COMPONENT-BASED', cap: 'UI = cây component tái sử dụng (React / Vue / Angular)' },
]

export default function S20ComponentArch(_: SlideProps) {
  const phase = useTicker([2600, 2600, 3400])
  return (
    <SlideLayout
      kicker="PHẦN 03 · FRONTEND"
      title={<>Tiến hoá: từ khối đá nguyên tảng đến <Em>cây component</Em></>}
    >
      <div style={{ display: 'flex', gap: 34, marginTop: 34, alignItems: 'flex-start', justifyContent: 'center' }}>
        {/* stage 1: monolith */}
        <motion.div animate={{ opacity: phase === 0 ? 1 : 0.35 }} transition={{ duration: 0.4 }}>
          <FlowCanvas w={280} h={330}>
            <FNode x={20} y={20} w={240} h={290} label="app.js" sub="12.000 dòng · jQuery spaghetti" tone={phase === 0 ? 'danger' : 'default'} active={phase === 0} />
          </FlowCanvas>
        </motion.div>

        {/* stage 2: modular */}
        <motion.div animate={{ opacity: phase === 1 ? 1 : 0.35 }} transition={{ duration: 0.4 }}>
          <FlowCanvas w={280} h={330}>
            <FNode x={20} y={20} w={240} h={88} label="auth module" tone={phase === 1 ? 'warn' : 'default'} active={phase === 1} />
            <FNode x={20} y={122} w={240} h={88} label="cart module" tone={phase === 1 ? 'warn' : 'default'} />
            <FNode x={20} y={224} w={240} h={86} label="catalog module" tone={phase === 1 ? 'warn' : 'default'} />
          </FlowCanvas>
        </motion.div>

        {/* stage 3: component tree */}
        <motion.div animate={{ opacity: phase === 2 ? 1 : 0.35 }} transition={{ duration: 0.4 }}>
          <FlowCanvas
            w={330}
            h={330}
            wires={[
              { pts: [{ x: 165, y: 66 }, { x: 165, y: 90 }, { x: 75, y: 90 }, { x: 75, y: 116 }], arrow: true },
              { pts: [{ x: 165, y: 66 }, { x: 165, y: 90 }, { x: 250, y: 90 }, { x: 250, y: 116 }], arrow: true },
              { pts: [{ x: 250, y: 176 }, { x: 250, y: 200 }, { x: 170, y: 200 }, { x: 170, y: 226 }], arrow: true },
              { pts: [{ x: 250, y: 176 }, { x: 250, y: 200 }, { x: 305, y: 200 }, { x: 305, y: 226 }], arrow: true },
              { pts: [{ x: 75, y: 176 }, { x: 75, y: 226 }], arrow: true },
            ]}
          >
            <FNode x={110} y={16} w={110} h={50} label="<App/>" tone={phase === 2 ? 'accent' : 'default'} active={phase === 2} />
            <FNode x={16} y={116} w={118} h={60} label="<Header/>" tone={phase === 2 ? 'accent' : 'default'} />
            <FNode x={188} y={116} w={124} h={60} label="<ProductList/>" tone={phase === 2 ? 'accent' : 'default'} />
            <FNode x={110} y={226} w={120} h={56} label="<Card/>" sub="tái sử dụng ×N" tone={phase === 2 ? 'ok' : 'default'} active={phase === 2} />
            <FNode x={252} y={226} w={106} h={56} label="<Card/>" sub="cùng 1 code" tone={phase === 2 ? 'ok' : 'default'} />
            <FNode x={16} y={226} w={78} h={56} label="<Nav/>" tone={phase === 2 ? 'accent' : 'default'} />
          </FlowCanvas>
        </motion.div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
        <div
          style={{
            fontFamily: T.mono,
            fontSize: clamp('0.72rem', '1.15vw', '0.9rem'),
            color: T.accentBright,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          {STAGES[phase].key} — <span style={{ color: T.muted, fontWeight: 500 }}>{STAGES[phase].cap}</span>
        </div>
      </div>
    </SlideLayout>
  )
}
