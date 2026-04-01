import { motion, useReducedMotion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { createContainerVariants, createItemVariants } from '../lib/animations'

const takeaways = [
  'Điểm được tính từ công thức cố định trong module, không chấm cảm tính.',
  'Bạn có thể tự kiểm tra biến số đầu vào để dự đoán điểm trước khi chốt tháng.',
  'Muốn tăng điểm bền vững: tăng SP hoàn thành đúng hạn và giảm Missed_hours.',
]

export function ClosingSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Kết luận"
      title="Thông điệp chốt cho nhân viên"
      subtitle="Hiểu công thức để chủ động kết quả, thay vì chỉ chờ nhận điểm"
    >
      <motion.div
        variants={createContainerVariants(reducedMotion)}
        initial="hidden"
        animate="visible"
        style={{ display: 'grid', gap: '24px', maxWidth: '900px' }}
      >
        {takeaways.map((item) => (
          <motion.p key={item} variants={createItemVariants(reducedMotion)} className="text-body">
            {item}
          </motion.p>
        ))}

        <motion.div variants={createItemVariants(reducedMotion)} style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginTop: '14px' }}>
          <p className="metric-label" style={{ color: 'var(--accent)' }}>Next Action</p>
          <p className="text-body">Tuần này, mỗi nhân viên tự kiểm tra dữ liệu tháng hiện tại và đặt 1 mục tiêu cải thiện cụ thể.</p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
