import { motion, useReducedMotion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { formulaValueDetails } from '../data/performance'
import { createContainerVariants, createItemVariants } from '../lib/animations'
import type { SlideProps } from '../types'

export function MetricsSlide({ step, totalSteps }: SlideProps) {
  const reducedMotion = Boolean(useReducedMotion())
  const visibleItems =
    step === 0
      ? formulaValueDetails.slice(0, 4)
      : step === 1
        ? formulaValueDetails.slice(4, 7)
        : formulaValueDetails.slice(7)
  const pageLabel = `Phần ${step + 1}/${totalSteps}: chỉ cần hiểu mỗi biến đang đại diện cho dữ liệu nào của mình`

  return (
    <SlideLayout
      kicker="Giải nghĩa biến số"
      title="Ký hiệu trong công thức"
      subtitle={pageLabel}
    >
      <motion.div variants={createContainerVariants(reducedMotion)} initial="hidden" animate="visible" style={{ display: 'grid', gap: '10px' }}>
        <motion.div
          variants={createItemVariants(reducedMotion)}
          style={{ display: 'grid', gridTemplateColumns: '150px 150px 1fr 1fr', gap: '12px' }}
        >
          <p className="metric-label" style={{ color: 'var(--accent)' }}>Ký hiệu</p>
          <p className="metric-label" style={{ color: 'var(--accent)' }}>Miền giá trị</p>
          <p className="metric-label" style={{ color: 'var(--accent)' }}>Hiểu đơn giản</p>
          <p className="metric-label" style={{ color: 'var(--accent)' }}>Lấy từ đâu</p>
        </motion.div>

        {visibleItems.map((item) => (
          <motion.div
            key={item.code}
            variants={createItemVariants(reducedMotion)}
            style={{ display: 'grid', gridTemplateColumns: '150px 150px 1fr 1fr', gap: '12px', alignItems: 'start' }}
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
