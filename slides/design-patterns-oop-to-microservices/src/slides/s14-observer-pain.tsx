import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip, Pulse } from '../components/diagram'
import { Server, Smartphone, BellPlus } from 'lucide-react'
import type { SlideProps } from './types'

const CLIENTS = [{ y: 30 }, { y: 168 }, { y: 306 }]

export default function S14ObserverPain(_: SlideProps) {
  // 0: bão polling vô ích; 1: có bài mới nhưng client vẫn đợi vòng poll kế
  const phase = useTicker([3400, 3000])
  return (
    <SlideLayout
      kicker="BEHAVIORAL · OBSERVER — NỖI ĐAU"
      title={<>Không ai báo tin — followers phải <Em>hỏi dồn dập</Em> cả ngày</>}
    >
      <Split
        leftW={430}
        left={
          <Bullets
            items={[
              { t: 'Polling lãng phí', d: 'hàng nghìn request/phút, 99% câu trả lời là “chưa có gì”' },
              { t: 'Biết tin muộn', d: 'bài đăng lúc 10:00, vòng poll kế 10:05 mới thấy' },
              { t: 'Gọi trực tiếp thì coupling chặt', d: 'publisher phải biết & sửa code cho từng follower mới' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={680}
            h={420}
            wires={CLIENTS.map((c) => ({
              pts: [
                { x: 176, y: c.y + 32 },
                { x: 430, y: c.y + 32 },
                { x: 430, y: 200 },
                { x: 470, y: 200 },
              ],
              dashed: true,
              opacity: 0.5,
            }))}
          >
            {CLIENTS.map((c, i) => (
              <FNode key={i} x={16} y={c.y} w={160} h={64} icon={Smartphone} label={`Follower ${i + 1}`} sub="poll mỗi 5 phút" />
            ))}
            <FNode x={470} y={150} w={190} h={100} icon={Server} label="News Feed" sub={phase === 1 ? '● BÀI MỚI (chưa ai biết)' : 'chưa có gì mới'} tone={phase === 1 ? 'warn' : 'default'} active={phase === 1} />
            {phase === 1 && <Pulse x={565} y={140} color={T.warn} />}
            {phase === 1 && (
              <FNode x={598} y={96} w={62} h={44} icon={BellPlus} tone="warn" active label="" style={{ borderRadius: 999 }} />
            )}
            {CLIENTS.map((c, i) => (
              <Packet
                key={`poll-${i}-${phase}`}
                pts={[
                  { x: 176, y: c.y + 32 },
                  { x: 430, y: c.y + 32 },
                  { x: 430, y: 200 },
                  { x: 470, y: 200 },
                ]}
                dur={1.1}
                delay={i * 0.35}
                repeatDelay={0.55}
                size={10}
                label="mới chưa?"
              />
            ))}
            {CLIENTS.map((c, i) => (
              <Packet
                key={`resp-${i}-${phase}`}
                pts={[
                  { x: 470, y: 214 },
                  { x: 444, y: 214 },
                  { x: 444, y: c.y + 46 },
                  { x: 176, y: c.y + 46 },
                ]}
                dur={1.1}
                delay={1.15 + i * 0.35}
                repeatDelay={0.55}
                size={10}
                color={phase === 1 ? T.danger : T.muted}
                label={phase === 1 ? 'vẫn “chưa” ✗' : '204: chưa'}
              />
            ))}
            <Chip
              x={340}
              y={392}
              text={phase === 0 ? 'bão request vô ích — server gánh tải' : '⚠ tin đã có nhưng phải đợi vòng poll kế tiếp'}
              tone={phase === 0 ? 'default' : 'danger'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
