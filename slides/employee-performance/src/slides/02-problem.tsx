import { motion, useReducedMotion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { createContainerVariants, createItemVariants } from '../lib/animations'

const painPoints = [
  { value: '42%', label: 'Nhân viên chưa hiểu vì sao điểm thay đổi theo tháng' },
  { value: '31%', label: 'Mất hơn 3 ngày để giải thích thắc mắc điểm' },
  { value: '18%', label: 'Tranh luận do hiểu sai biến số trong công thức' },
]

export function ProblemSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Vì sao cần phổ biến"
      title="Điểm chỉ có ý nghĩa khi mọi người hiểu cách tính"
      subtitle="Mục tiêu của hệ thống không phải để xếp hạng đơn thuần, mà để mỗi người biết cách cải thiện hiệu suất"
    >
      <motion.div
        variants={createContainerVariants(reducedMotion)}
        initial="hidden"
        animate="visible"
        style={{ display: 'grid', gap: '34px' }}
      >
        <motion.div variants={createItemVariants(reducedMotion)} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '28px' }}>
          {painPoints.map((item) => (
            <div key={item.label} style={{ display: 'grid', gap: '12px' }}>
              <p className="metric-number">{item.value}</p>
              <p className="text-body">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={createItemVariants(reducedMotion)} style={{ display: 'grid', gridTemplateColumns: '8px 1fr', gap: '20px', maxWidth: '760px' }}>
          <span style={{ background: 'var(--accent)' }} />
          <p className="text-body">
            Sau phần công thức, bạn có thể tự kiểm tra dữ liệu cá nhân và tự ước lượng điểm trước khi hệ thống chốt tháng.
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
