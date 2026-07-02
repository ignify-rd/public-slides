import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { CodeBlock } from '../components/CodeBlock'
import { FlowCanvas, FNode, Packet, Chip } from '../components/diagram'
import { Factory, FileText, FileCode, FileType } from 'lucide-react'
import type { SlideProps } from './types'

const CODE = `const parser: IParser =
  ParserFactory.create(file.type)
parser.parse(file)  // client chỉ biết interface`

const PRODUCTS = [
  { y: 30, label: 'PdfParser', type: 'pdf', icon: FileText },
  { y: 170, label: 'DocxParser', type: 'docx', icon: FileType },
  { y: 310, label: 'HtmlParser', type: 'html', icon: FileCode },
]

export default function S11FactorySolution(_: SlideProps) {
  const phase = useTicker([2600, 2600, 2600]) // pdf → docx → html
  const p = PRODUCTS[phase]
  const factory = { x: 268, y: 168, w: 176, h: 88 }
  return (
    <SlideLayout
      kicker="CREATIONAL · FACTORY METHOD — CƠ CHẾ"
      title={<>Dồn việc khởi tạo về <Em>một nhà máy</Em>, client chỉ biết interface</>}
    >
      <Split
        leftW={460}
        left={
          <>
            <Bullets
              items={[
                { t: 'Tách tạo khỏi dùng', d: 'client gọi create(type), không đụng constructor' },
                { t: 'Trả về interface chung', d: 'IParser — mọi parser hoán đổi được' },
                { t: 'Thêm XmlParser?', d: 'chỉ sửa duy nhất Factory — client giữ nguyên' },
              ]}
            />
            <CodeBlock code={CODE} fs={12.5} title="client.ts" />
          </>
        }
        right={
          <FlowCanvas
            w={700}
            h={430}
            wires={[
              { pts: [{ x: 170, y: 212 }, { x: factory.x, y: 212 }], arrow: true },
              ...PRODUCTS.map((pr) => ({
                pts: [
                  { x: factory.x + factory.w, y: 212 },
                  { x: 500, y: 212 },
                  { x: 500, y: pr.y + 32 },
                  { x: 540, y: pr.y + 32 },
                ],
                arrow: true,
                dashed: true,
                opacity: 0.7,
              })),
            ]}
          >
            <FNode x={16} y={180} w={154} h={64} label="Client" sub="create(type)" active />
            <FNode {...factory} icon={Factory} label="ParserFactory" sub={`switch(type) → '${p.type}'`} tone="accent" active />
            {PRODUCTS.map((pr, i) => (
              <FNode
                key={pr.label}
                x={540}
                y={pr.y}
                w={146}
                h={64}
                icon={pr.icon}
                label={pr.label}
                sub="implements IParser"
                tone={i === phase ? 'ok' : 'default'}
                active={i === phase}
                dimmed={i !== phase}
              />
            ))}
            <Packet
              key={`req-${phase}`}
              pts={[{ x: 170, y: 212 }, { x: factory.x, y: 212 }]}
              dur={0.9}
              repeatDelay={1.7}
              label={`create('${p.type}')`}
            />
            <Packet
              key={`route-${phase}`}
              pts={[
                { x: factory.x + factory.w, y: 212 },
                { x: 500, y: 212 },
                { x: 500, y: p.y + 32 },
                { x: 540, y: p.y + 32 },
              ]}
              dur={1}
              delay={0.9}
              repeatDelay={0.7}
              color={T.warn}
              square
              label="new"
            />
            <Packet
              key={`ret-${phase}`}
              pts={[
                { x: 540, y: p.y + 32 },
                { x: 500, y: p.y + 32 },
                { x: 500, y: 340 },
                { x: 93, y: 340 },
                { x: 93, y: 244 },
              ]}
              dur={1.3}
              delay={2}
              repeatDelay={0.4}
              color={T.ok}
              label="IParser ↩"
            />
            <Chip x={356} y={396} text={`type = '${p.type}' → ${p.label}`} tone="accent" />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
