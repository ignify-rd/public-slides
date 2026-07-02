import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { SearchCheck, Filter, Wrench } from 'lucide-react'
import type { SlideProps } from './types'

export default function S41ProblemFirst(_: SlideProps) {
  const phase = useTicker([2600, 2600, 2600])
  const steps = [
    { x: 20, icon: SearchCheck, label: '① Gọi tên vấn đề', sub: 'khởi tạo? cấu trúc? hành vi? phân tán?' },
    { x: 260, icon: Filter, label: '② Chọn pattern NHỎ nhất', sub: 'khớp đúng vấn đề — không hơn' },
    { x: 500, icon: Wrench, label: '③ Refactor dần', sub: 'áp vào chỗ đau, đo lại, mở rộng sau' },
  ]
  return (
    <SlideLayout
      kicker="LỜI KHUYÊN 3/3"
      title={<>Bắt đầu từ <Em>vấn đề</Em>, không phải từ tên pattern</>}
    >
      <Split
        leftW={430}
        left={
          <Bullets
            items={[
              { t: '“Dùng pattern gì cho oách?” — sai câu hỏi', d: 'pattern-driven design tạo ra mê cung không ai cần' },
              { t: 'Chẩn đoán trước, kê đơn sau', d: 'code đau ở đâu: khó tạo object? khó ghép? khó giao tiếp?' },
              { t: 'Một bảng tra nhanh', d: 'if/else khởi tạo → Factory · API lệch pha → Adapter · thông báo chéo → Observer · thuật toán đổi runtime → Strategy' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={700}
            h={400}
            wires={[
              { pts: [{ x: 220, y: 180 }, { x: 260, y: 180 }], arrow: true },
              { pts: [{ x: 460, y: 180 }, { x: 500, y: 180 }], arrow: true },
            ]}
          >
            {steps.map((s, i) => (
              <FNode
                key={s.label}
                x={s.x}
                y={130}
                w={200}
                h={100}
                icon={s.icon}
                label={s.label}
                sub={s.sub}
                tone={phase === i ? 'accent' : 'default'}
                active={phase === i}
                dimmed={phase < i}
              />
            ))}
            <Packet
              key={`f-${phase}`}
              pts={
                phase === 0
                  ? [{ x: 120, y: 60 }, { x: 120, y: 130 }]
                  : phase === 1
                    ? [{ x: 220, y: 180 }, { x: 260, y: 180 }]
                    : [{ x: 460, y: 180 }, { x: 500, y: 180 }]
              }
              dur={0.9}
              repeatDelay={1.6}
              color={T.accentBright}
              label={phase === 0 ? 'nỗi đau từ code thật' : phase === 1 ? 'ứng viên pattern' : 'áp dụng tối thiểu'}
            />
            <Chip
              x={350}
              y={300}
              text={
                phase === 0
                  ? 'ví dụ: “3 chỗ if/else new PdfParser giống hệt nhau” → vấn đề KHỞI TẠO'
                  : phase === 1
                    ? '→ Factory Method là đủ. Không cần Abstract Factory + DI framework'
                    : '→ refactor 1 module trước, đo độ đọc/độ lỗi, rồi mới lan ra'
              }
              tone="accent"
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
