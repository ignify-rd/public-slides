import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { MousePointerClick, Send, Database, Monitor } from 'lucide-react'
import type { SlideProps } from './types'

/* one-way ring: View → Action → Dispatcher/Reducer → Store → View */
export default function S22Flux(_: SlideProps) {
  const phase = useTicker([2200, 2200, 2200, 2200])
  const N = {
    view: { x: 250, y: 20, w: 190, h: 78 },
    action: { x: 500, y: 170, w: 170, h: 78 },
    reducer: { x: 250, y: 322, w: 190, h: 78 },
    store: { x: 20, y: 170, w: 170, h: 78 },
  }
  const c = (n: { x: number; y: number; w: number; h: number }) => ({ x: n.x + n.w / 2, y: n.y + n.h / 2 })
  const LOOP = [
    { from: c(N.view), to: c(N.action), label: 'dispatch(action)', color: T.accentBright },
    { from: c(N.action), to: c(N.reducer), label: '{ type: ADD_TODO }', color: T.warn },
    { from: c(N.reducer), to: c(N.store), label: 'newState', color: T.warn },
    { from: c(N.store), to: c(N.view), label: 'subscribe → re-render', color: T.ok },
  ]
  const CAP = [
    'user click — View chỉ PHÁT action, không tự sửa state',
    'action = object mô tả “chuyện gì xảy ra”',
    'reducer tính state MỚI (pure function)',
    'store đổi → mọi View tự re-render',
  ]
  return (
    <SlideLayout
      kicker="PHẦN 03 · FRONTEND"
      title={<>Flux / Redux: dữ liệu chạy <Em>một chiều</Em>, không bao giờ ngược</>}
    >
      <Split
        leftW={430}
        left={
          <Bullets
            items={[
              { t: 'Two-way binding = spaghetti', d: 'view sửa model, model sửa view — vòng lặp không truy vết nổi' },
              { t: 'One-way ring', d: 'muốn đổi state chỉ có MỘT con đường: dispatch action' },
              { t: 'Debug như xem phim', d: 'log lại chuỗi action → tua lại từng bước (time-travel)' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={690}
            h={430}
            wires={LOOP.map((e) => ({ pts: [e.from, e.to], arrow: true, opacity: 0.5 }))}
          >
            <FNode {...N.view} icon={Monitor} label="View" sub="React components" tone={phase === 0 || phase === 3 ? 'accent' : 'default'} active={phase === 0 || phase === 3} />
            <FNode {...N.action} icon={MousePointerClick} label="Action" sub="{ type, payload }" tone={phase === 1 ? 'warn' : 'default'} active={phase === 1} />
            <FNode {...N.reducer} icon={Send} label="Reducer" sub="(state, action) → state'" tone={phase === 2 ? 'warn' : 'default'} active={phase === 2} />
            <FNode {...N.store} icon={Database} label="Store" sub="single source of truth" tone={phase === 3 ? 'ok' : 'default'} active={phase === 3} />
            {LOOP.map((e, i) => (
              <Packet
                key={`${i}-${phase === i}`}
                pts={[e.from, e.to]}
                dur={1.4}
                repeatDelay={0.8}
                color={e.color}
                label={e.label}
                visible={phase === i}
              />
            ))}
            <Chip x={345} y={200} text={`${phase + 1}/4 — ${CAP[phase]}`} tone="accent" />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
