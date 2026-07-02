import { motion } from 'framer-motion'
import { item } from '../lib/animations'
import { T, clamp } from '../lib/theme'
import { SlideLayout, Split, Bullets, Em } from '../components/SlideLayout'
import { CodeBlock } from '../components/CodeBlock'
import type { SlideProps } from './types'

const SIMPLE = `// bài toán: giảm giá 2 loại khách
const rate = user.isVip ? 0.2 : 0.05
return price * (1 - rate)`

const OVERKILL = `// cùng bài toán đó…
interface DiscountStrategy { … }
class VipDiscountStrategy implements … { … }
class RegularDiscountStrategy implements … { … }
class DiscountStrategyFactory { … }
class DiscountStrategyFactoryProvider { … }
// 5 files · 120 dòng · để làm phép nhân`

export default function S39Overengineering(_: SlideProps) {
  return (
    <SlideLayout
      kicker="LỜI KHUYÊN 1/3"
      title={<>Pattern sai liều = <Em>độc dược</Em>: đừng bắn ruồi bằng đại bác</>}
    >
      <Split
        leftW={430}
        left={
          <Bullets
            items={[
              { t: 'Mỗi pattern là một tầng gián tiếp', d: 'thêm class, thêm interface — người đọc phải nhảy qua nhiều file hơn' },
              { t: 'Chỉ rút súng khi vấn đề LẶP LẠI', d: 'nhánh if thứ 3, chỗ copy-paste thứ 3 — lúc đó mới refactor thành pattern' },
              { t: 'Quy tắc ngón tay cái', d: 'YAGNI trước, pattern sau. Code đơn giản chạy đúng > kiến trúc đẹp chạy mơ hồ' },
            ]}
          />
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, width: 640 }}>
            <CodeBlock code={SIMPLE} fs={13} title="✓ đủ dùng — 3 dòng, ai đọc cũng hiểu" />
            <CodeBlock code={OVERKILL} fs={13} title="✗ Strategy + Factory cho bài toán KHÔNG BAO GIỜ đổi" bad={[1, 2, 3, 4, 5, 6]} />
            <motion.p
              variants={item}
              style={{ margin: 0, fontFamily: T.mono, fontSize: clamp('0.7rem', '1.05vw', '0.82rem'), color: T.warn }}
            >
              khi nào nâng cấp? → khi thêm loại khách thứ 3, thứ 4 và rules bắt đầu phình
            </motion.p>
          </div>
        }
      />
    </SlideLayout>
  )
}
