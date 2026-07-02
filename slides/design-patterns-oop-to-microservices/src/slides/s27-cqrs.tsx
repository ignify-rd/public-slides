import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { Monitor, PenLine, Search, Database } from 'lucide-react'
import type { SlideProps } from './types'

export default function S27Cqrs(_: SlideProps) {
  // 0: Command (ghi); 1: đồng bộ sang read model; 2: Query (đọc) siêu nhanh
  const phase = useTicker([2800, 2600, 3000])
  const cli = { x: 16, y: 170, w: 128, h: 84 }
  const cmd = { x: 230, y: 34, w: 180, h: 80 }
  const wdb = { x: 500, y: 34, w: 180, h: 80 }
  const qry = { x: 230, y: 316, w: 180, h: 80 }
  const rdb = { x: 500, y: 316, w: 180, h: 80 }
  return (
    <SlideLayout
      kicker="MICROSERVICES · DỮ LIỆU — CQRS"
      title={<>Tách đôi: <Em>Command ghi</Em> một đường, <Em>Query đọc</Em> một đường</>}
    >
      <Split
        leftW={420}
        left={
          <Bullets
            items={[
              { t: 'Đọc thường chiếm ~90% traffic', d: 'nhưng lại xếp hàng chung với ghi trên 1 model' },
              { t: 'Mỗi bên một model tối ưu riêng', d: 'ghi: chuẩn hoá + rules · đọc: DTO phẳng, denormalized' },
              { t: 'Scale độc lập', d: 'nhân 10 read-replica mà không đụng đường ghi' },
              { t: 'Giá phải trả', d: 'eventual consistency — đọc có thể trễ vài trăm ms' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={700}
            h={432}
            wires={[
              { pts: [{ x: 144, y: 190 }, { x: 190, y: 190 }, { x: 190, y: 74 }, { x: cmd.x, y: 74 }], arrow: true },
              { pts: [{ x: cmd.x + cmd.w, y: 74 }, { x: wdb.x, y: 74 }], arrow: true },
              { pts: [{ x: wdb.x + 90, y: 114 }, { x: wdb.x + 90, y: 316 }], arrow: true, dashed: true, opacity: 0.7 },
              { pts: [{ x: 144, y: 236 }, { x: 190, y: 236 }, { x: 190, y: 356 }, { x: qry.x, y: 356 }], arrow: true },
              { pts: [{ x: qry.x + qry.w, y: 356 }, { x: rdb.x, y: 356 }], arrow: true },
            ]}
          >
            <FNode {...cli} icon={Monitor} label="Client" sub={phase === 2 ? 'GET /orders' : 'POST /order'} active />
            <FNode {...cmd} icon={PenLine} label="Command side" sub="validate · business rules" tone={phase === 0 ? 'warn' : 'default'} active={phase === 0} />
            <FNode {...wdb} icon={Database} label="Write DB" sub="chuẩn hoá · ACID" tone={phase <= 1 ? 'warn' : 'default'} active={phase === 0} />
            <FNode {...qry} icon={Search} label="Query side" sub="DTO phẳng · không rules" tone={phase === 2 ? 'ok' : 'default'} active={phase === 2} />
            <FNode {...rdb} icon={Database} label="Read DB ×3" sub="denormalized · replicas" tone={phase >= 1 ? 'ok' : 'default'} active={phase === 1 || phase === 2} />

            <Packet
              key={`w1-${phase === 0}`}
              pts={[{ x: 144, y: 190 }, { x: 190, y: 190 }, { x: 190, y: 74 }, { x: cmd.x, y: 74 }]}
              dur={1}
              repeatDelay={1.6}
              color={T.warn}
              square
              label="CreateOrder cmd"
              visible={phase === 0}
            />
            <Packet
              key={`w2-${phase === 0}`}
              pts={[{ x: cmd.x + cmd.w, y: 74 }, { x: wdb.x, y: 74 }]}
              dur={0.7}
              delay={1.1}
              repeatDelay={1.8}
              color={T.warn}
              square
              label="INSERT"
              visible={phase === 0}
            />
            <Packet
              key={`sync-${phase === 1}`}
              pts={[{ x: wdb.x + 90, y: 114 }, { x: wdb.x + 90, y: 316 }]}
              dur={1.2}
              repeatDelay={1}
              color={T.accentBright}
              label="OrderCreated event"
              visible={phase === 1}
            />
            <Packet
              key={`q1-${phase === 2}`}
              pts={[{ x: 144, y: 236 }, { x: 190, y: 236 }, { x: 190, y: 356 }, { x: qry.x, y: 356 }]}
              dur={0.8}
              repeatDelay={1.8}
              color={T.ok}
              label="query"
              visible={phase === 2}
            />
            <Packet
              key={`q2-${phase === 2}`}
              pts={[{ x: rdb.x, y: 380 }, { x: qry.x + qry.w, y: 380 }, { x: 190, y: 380 }, { x: 190, y: 250 }, { x: 144, y: 250 }]}
              dur={1.1}
              delay={0.9}
              repeatDelay={1.5}
              color={T.ok}
              label="DTO ↩ (1 lần đọc, 0 JOIN)"
              visible={phase === 2}
            />
            <Chip
              x={350}
              y={208}
              text={
                phase === 0
                  ? 'GHI: qua rules đầy đủ, chậm cũng được — đúng là trên hết'
                  : phase === 1
                    ? 'event đồng bộ write → read (eventual consistency)'
                    : 'ĐỌC: model phẳng, scale ×N — nhanh như cache'
              }
              tone={phase === 2 ? 'ok' : phase === 1 ? 'accent' : 'warn'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
