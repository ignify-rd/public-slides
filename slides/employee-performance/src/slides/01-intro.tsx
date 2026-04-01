import { motion, useReducedMotion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { createContainerVariants, createItemVariants } from '../lib/animations'

export function IntroSlide() {
  const reducedMotion = Boolean(useReducedMotion())
  const container = createContainerVariants(reducedMotion)
  const item = createItemVariants(reducedMotion)

  return (
    <SlideLayout
      kicker="Employee Briefing"
      title="Cách tính điểm Performance hàng tháng"
      subtitle="Buổi phổ biến dành cho nhân viên: hiểu rõ cách điểm được tính và cách chủ động cải thiện"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '56px', alignItems: 'end', height: '100%' }}
      >
        <motion.div variants={item} style={{ display: 'grid', gap: '22px', alignSelf: 'start' }}>
          <p className="text-body" style={{ maxWidth: '620px' }}>
            Sau buổi này, mỗi nhân viên có thể tự đọc điểm của mình trên dashboard và biết chính xác yếu tố nào đang kéo điểm lên hoặc xuống.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <span className="accent-dot" />
            <p className="text-muted">Kỳ minh họa: Tháng 03/2026</p>
          </div>
        </motion.div>

        <motion.div variants={item} style={{ justifySelf: 'end', display: 'grid', gap: '12px' }}>
          <p className="metric-label">Mục tiêu buổi phổ biến</p>
          <p className="metric-number">Rõ ràng</p>
          <p className="text-muted">Công thức thống nhất • Dữ liệu minh bạch • Cách nâng điểm cụ thể</p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
