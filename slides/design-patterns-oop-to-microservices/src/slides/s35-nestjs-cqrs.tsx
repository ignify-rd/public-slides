import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Em } from '../components/SlideLayout'
import { CodeBlock } from '../components/CodeBlock'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import type { SlideProps } from './types'

const CODE = `@Post()  // controller chỉ NÉM command, không xử lý
create(@Body() dto: OrderDto) {
  return this.commandBus.execute(new CreateOrder(dto))
}

@CommandHandler(CreateOrder)
class CreateOrderHandler {
  async execute(cmd: CreateOrder) {
    const id = await this.repo.save(cmd.dto)
    this.eventBus.publish(new OrderCreated(id))
  }
}

@Saga()  // event → sinh command kế tiếp
orderCreated = ($: Observable<any>) => $.pipe(
  ofType(OrderCreated),
  map(e => new ReserveStock(e.id)))`

const HI: number[][] = [[0, 1, 2], [5, 6, 7, 8], [9], [13, 14, 15]]

export default function S35NestCqrs(_: SlideProps) {
  // 0 command bus → 1 handler ghi → 2 publish event → 3 saga sinh command mới
  const phase = useTicker([2600, 2600, 2600, 3000])
  return (
    <SlideLayout
      kicker="CASE STUDY 1/3 — CQRS TRONG NESTJS"
      title={<>@nestjs/cqrs: <Em>4 mảnh ghép</Em> — CommandBus · Handler · EventBus · Saga</>}
    >
      <Split
        leftW={560}
        align="flex-start"
        left={<CodeBlock code={CODE} fs={11.5} title="order.module — @nestjs/cqrs" highlights={HI[phase]} />}
        right={
          <FlowCanvas
            w={560}
            h={440}
            wires={[
              { pts: [{ x: 140, y: 60 }, { x: 140, y: 128 }], arrow: true },
              { pts: [{ x: 140, y: 196 }, { x: 140, y: 264 }], arrow: true },
              { pts: [{ x: 240, y: 296 }, { x: 420, y: 296 }, { x: 420, y: 230 }], arrow: true },
              { pts: [{ x: 420, y: 162 }, { x: 420, y: 96 }, { x: 260, y: 40 }], arrow: true, dashed: true },
            ]}
          >
            <FNode x={40} y={8} w={200} h={52} label="Controller" sub="POST /orders" active={phase === 0} />
            <FNode x={40} y={128} w={200} h={68} label="CommandBus" sub="định tuyến theo type" tone="accent" active={phase === 0} />
            <FNode x={40} y={264} w={200} h={64} label="CreateOrderHandler" sub="ghi DB · nghiệp vụ" tone={phase === 1 ? 'warn' : 'default'} active={phase === 1} />
            <FNode x={320} y={230} w={200} h={64} label="EventBus" sub="OrderCreated" tone={phase === 2 ? 'ok' : 'default'} active={phase === 2} />
            <FNode x={320} y={98} w={200} h={64} label="Saga (RxJS)" sub="event → command kế tiếp" tone={phase === 3 ? 'accent' : 'default'} active={phase === 3} />

            <Packet key={`c-${phase === 0}`} pts={[{ x: 140, y: 60 }, { x: 140, y: 128 }]} dur={0.8} repeatDelay={1.6} square color={T.accentBright} label="CreateOrder" visible={phase === 0} />
            <Packet key={`h-${phase === 1}`} pts={[{ x: 140, y: 196 }, { x: 140, y: 264 }]} dur={0.8} repeatDelay={1.6} square color={T.warn} label="execute(cmd)" visible={phase === 1} />
            <Packet key={`e-${phase === 2}`} pts={[{ x: 240, y: 296 }, { x: 420, y: 296 }, { x: 420, y: 230 }]} dur={1} repeatDelay={1.4} color={T.ok} label="OrderCreated 📣" visible={phase === 2} />
            <Packet key={`s-${phase === 3}`} pts={[{ x: 420, y: 162 }, { x: 420, y: 96 }, { x: 260, y: 40 }]} dur={1.1} repeatDelay={1.6} square color={T.accentBright} label="ReserveStock (cmd mới)" visible={phase === 3} />
            <Chip
              x={280}
              y={400}
              text={
                ['① controller ném command vào bus — mỏng dính', '② handler duy nhất cho mỗi command: ghi + rules', '③ ghi xong phát event cho mọi bên quan tâm', '④ Saga nghe event → tự sinh command kế tiếp (chuỗi nghiệp vụ)'][phase]
              }
              tone="accent"
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
