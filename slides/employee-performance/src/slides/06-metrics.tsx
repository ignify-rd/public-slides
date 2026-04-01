import { motion, useReducedMotion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { formulaValueDetails } from '../data/performance'
import { createContainerVariants, createItemVariants } from '../lib/animations'

export function MetricsSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Giải nghĩa biến số"
      title="Mỗi ký hiệu trong công thức nghĩa là gì?"
      subtitle="Bạn có thể dùng bảng này để tự kiểm tra điểm của mình trước khi hệ thống chốt tháng"
    >
      <motion.div variants={createContainerVariants(reducedMotion)} initial="hidden" animate="visible" style={{ display: 'grid', gap: '12px' }}>
        <motion.div
          variants={createItemVariants(reducedMotion)}
          style={{ display: 'grid', gridTemplateColumns: '160px 160px 1fr 1fr', gap: '14px' }}
        >
          <p className="metric-label" style={{ color: 'var(--accent)' }}>Ký hiệu</p>
          <p className="metric-label" style={{ color: 'var(--accent)' }}>Miền giá trị</p>
          <p className="metric-label" style={{ color: 'var(--accent)' }}>Ý nghĩa</p>
          <p className="metric-label" style={{ color: 'var(--accent)' }}>Nguồn dữ liệu</p>
        </motion.div>

        {formulaValueDetails.map((item) => (
          <motion.div
            key={item.code}
            variants={createItemVariants(reducedMotion)}
            style={{ display: 'grid', gridTemplateColumns: '160px 160px 1fr 1fr', gap: '14px', alignItems: 'start' }}
          >
            <p className="text-body">{item.code}</p>
            <p className="text-body">{item.range}</p>
            <p className="text-body">{item.meaning}</p>
            <p className="text-small">{item.source}</p>
          </motion.div>
        ))}
      </motion.div>
    </SlideLayout>
  )
}
