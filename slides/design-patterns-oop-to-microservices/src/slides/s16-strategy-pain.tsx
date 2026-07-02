import { motion } from 'framer-motion'
import { T, clamp } from '../lib/theme'
import { useTicker } from '../lib/useTicker'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { CodeBlock } from '../components/CodeBlock'
import type { SlideProps } from './types'

const CODE = `function checkout(order, method) {
  if (method === 'CREDIT_CARD') {
    validateCard(); charge3DS();     // sửa dòng này…
  } else if (method === 'PAYPAL') {
    redirectPaypal(); capture();     // …vỡ dòng này 💥
  } else if (method === 'BANK') {
    genQR(); pollBankStatus();
  }
  // + refund(), retry(), fee()… mỗi hàm một rừng if y hệt
}`

export default function S16StrategyPain(_: SlideProps) {
  // 0: nhìn tổng thể; 1: sửa nhánh credit; 2: paypal gãy theo
  const phase = useTicker([2200, 2000, 2600])
  return (
    <SlideLayout
      kicker="BEHAVIORAL · STRATEGY — NỖI ĐAU"
      title={<>Mọi cách thanh toán nhồi <Em>một hàm</Em>: sửa A, vỡ B</>}
    >
      <Split
        leftW={420}
        left={
          <Bullets
            items={[
              { t: 'Thuật toán dính chặt luồng chính', d: 'không thể thay đổi lúc runtime' },
              { t: 'Sửa 1 nhánh, rủi ro lan cả hàm', d: 'mọi phương thức chung một scope, chung state' },
              { t: 'Thêm ví MoMo?', d: 'mở lại hàm core đã chạy ổn — regression test toàn bộ' },
            ]}
          />
        }
        right={
          <div style={{ width: 660 }}>
            <CodeBlock
              code={CODE}
              fs={13}
              title="checkout.ts — 1 hàm gánh mọi phương thức"
              highlights={phase === 1 ? [2] : []}
              bad={phase === 2 ? [4] : []}
            />
            <motion.div
              animate={{ opacity: phase === 2 ? 1 : 0 }}
              style={{
                marginTop: 14,
                fontFamily: T.mono,
                fontSize: clamp('0.72rem', '1.1vw', '0.85rem'),
                color: T.danger,
                fontWeight: 700,
              }}
            >
              💥 deploy thứ 6: sửa phí thẻ tín dụng — khách PayPal không thanh toán được
            </motion.div>
          </div>
        }
      />
    </SlideLayout>
  )
}
