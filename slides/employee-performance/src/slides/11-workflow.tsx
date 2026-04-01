import { motion, useReducedMotion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { createContainerVariants, createItemVariants } from '../lib/animations'

const timeline = [
  { phase: 'Ngày 01-03', action: 'Hệ thống mở kỳ tháng mới và ghi nhận dữ liệu Jira.' },
  { phase: 'Ngày 10-25', action: 'Bạn theo dõi dashboard để xử lý sớm chỉ số đang thấp.' },
  { phase: 'Ngày 26-28', action: 'Quản lý xác nhận dữ liệu công việc và phần trễ deadline.' },
  { phase: 'Ngày 29-30', action: 'Hệ thống chốt điểm tháng và công bố kết quả.' },
]

export function WorkflowSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Lịch chốt điểm"
      title="Quy trình tháng mà nhân viên cần biết"
      subtitle="Nắm timeline giúp bạn chủ động kiểm tra dữ liệu đúng thời điểm"
    >
      <motion.div variants={createContainerVariants(reducedMotion)} initial="hidden" animate="visible" style={{ display: 'grid', gap: '24px' }}>
        <motion.div variants={createItemVariants(reducedMotion)} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '16px' }}>
          {timeline.map((item, index) => (
            <div key={item.phase} style={{ display: 'grid', gap: '10px' }}>
              <p className="metric-label" style={{ color: 'var(--accent)' }}>Bước {index + 1}</p>
              <p className="text-body">{item.phase}</p>
              <p className="text-small">{item.action}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={createItemVariants(reducedMotion)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
          <p className="text-body">Trước ngày 28, bạn nên kiểm tra lại logged_hours, SP hoàn thành và Missed_hours.</p>
          <p className="text-body">Nếu dữ liệu bất thường, gửi trao đổi với quản lý/HR ngay trong kỳ để tránh lệch điểm khi chốt.</p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
