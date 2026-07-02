import { motion } from 'framer-motion'
import { T } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { FlowCanvas, FNode, Packet, Chip, Pulse } from '../components/diagram'
import { ShoppingCart, Landmark, Zap } from 'lucide-react'
import type { SlideProps } from './types'

export default function S12AdapterPain(_: SlideProps) {
  // 0: request bay tới khe hở; 1: vỡ — incompatible
  const phase = useTicker([1700, 2500])
  return (
    <SlideLayout
      kicker="STRUCTURAL · ADAPTER — NỖI ĐAU"
      title={<>Hệ thống mới gặp API cũ: <Em>ổ cắm không vừa phích</Em></>}
    >
      <Split
        leftW={430}
        left={
          <Bullets
            items={[
              { t: 'Interface không khớp', d: <>ta cần <code style={{ fontFamily: T.mono, color: T.accentBright }}>processPayment(order)</code>, vendor chỉ có <code style={{ fontFamily: T.mono, color: T.warn }}>makeTransaction(xml)</code></> },
              { t: 'Không sửa được code vendor', d: 'thư viện đóng gói / hệ thống bên thứ ba' },
              { t: 'Đập đi viết lại checkout?', d: 'rủi ro cao, tốn thời gian — không đáng' },
            ]}
          />
        }
        right={
          <FlowCanvas
            w={680}
            h={420}
            wires={[
              { pts: [{ x: 200, y: 200 }, { x: 300, y: 200 }], arrow: true },
              { pts: [{ x: 380, y: 200 }, { x: 470, y: 200 }], dashed: true, opacity: 0.4 },
            ]}
          >
            <FNode x={20} y={156} w={180} h={88} icon={ShoppingCart} label="Checkout" sub="gọi processPayment(order)" active={phase === 0} />
            <FNode x={470} y={150} w={190} h={100} icon={Landmark} label="LegacyPayGate" sub="chỉ hiểu makeTransaction(xml)" tone="warn" />
            {/* the incompatibility gap */}
            <motion.div
              animate={{
                borderColor: phase === 1 ? 'rgba(255,82,82,0.9)' : 'rgba(255,82,82,0.45)',
                boxShadow: phase === 1 ? '0 0 28px rgba(255,82,82,0.5)' : '0 0 0 rgba(0,0,0,0)',
              }}
              style={{
                position: 'absolute',
                left: 300,
                top: 160,
                width: 80,
                height: 80,
                border: '2px dashed rgba(255,82,82,0.45)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Zap size={30} color={T.danger} />
            </motion.div>
            <Packet
              key={`p-${phase === 0}`}
              pts={[{ x: 200, y: 200 }, { x: 296, y: 200 }]}
              dur={1.2}
              repeatDelay={0.5}
              label="order {json}"
              visible={phase === 0}
            />
            <Pulse x={340} y={200} color={T.danger} visible={phase === 1} />
            <Chip
              x={340}
              y={300}
              text={phase === 1 ? '✗ TypeError — hai interface không nói cùng ngôn ngữ' : 'gửi order dạng object…'}
              tone={phase === 1 ? 'danger' : 'default'}
            />
          </FlowCanvas>
        }
      />
    </SlideLayout>
  )
}
