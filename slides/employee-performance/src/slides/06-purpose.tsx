import { motion, useReducedMotion } from 'framer-motion'
import { MathBlock } from '../components/MathBlock'
import { SlideLayout } from '../components/SlideLayout'
import { formulaPurposeDetails } from '../data/performance'
import { createContainerVariants, createItemVariants } from '../lib/animations'
import type { SlideProps } from '../types'

export function FormulaPurposeSlide({ step }: SlideProps) {
  const reducedMotion = Boolean(useReducedMotion())
  const visibleItems =
    step === 0 ? formulaPurposeDetails.slice(0, 3) : formulaPurposeDetails.slice(3)

  return (
    <SlideLayout
      kicker="Mục đích của công thức"
      title="Mỗi phép tính đang giải quyết vấn đề gì?"
      subtitle="Công thức không chỉ để ra điểm, mà để giữ việc chấm điểm công bằng, chống lệch dữ liệu và phản ánh đúng hiệu suất thực tế"
    >
      <motion.div
        variants={createContainerVariants(reducedMotion)}
        initial="hidden"
        animate="visible"
        style={{ display: 'grid', gap: '14px' }}
      >
        {visibleItems.map((item) => (
          <motion.div
            key={item.tex}
            variants={createItemVariants(reducedMotion)}
            style={{ display: 'grid', gridTemplateColumns: '400px minmax(0, 1fr)', gap: '16px', alignItems: 'start' }}
          >
            <div className="math-panel math-panel-purpose" style={{ padding: '16px 18px' }}>
              <MathBlock tex={item.tex} className="math-inline" />
            </div>
            <div style={{ display: 'grid', gap: '8px' }}>
              <p className="text-body">{item.purpose}</p>
              <p className="text-small">{item.meaning}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SlideLayout>
  )
}
