import { motion, useReducedMotion } from 'framer-motion'
import { ClipboardCheck, MessageSquareText, Target } from 'lucide-react'
import { SlideLayout } from '../components/SlideLayout'
import { createContainerVariants, createItemVariants } from '../lib/animations'

const employeeActions = [
  {
    icon: ClipboardCheck,
    title: 'Kiểm tra dữ liệu cá nhân hàng tuần',
    detail: 'Đối chiếu SP, logged_hours, missed_hours để tránh lệch dữ liệu cuối tháng.',
  },
  {
    icon: Target,
    title: 'Chọn 1 biến số để cải thiện',
    detail: 'Ví dụ: giảm Missed_hours hoặc tăng Story Points hoàn thành đúng hạn.',
  },
  {
    icon: MessageSquareText,
    title: 'Gửi câu hỏi sớm cho HR/Quản lý',
    detail: 'Nếu thấy bất thường ở công thức hoặc dữ liệu, hỏi ngay trong tháng thay vì đợi chốt điểm.',
  },
]

export function HRRolloutSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Sau buổi phổ biến"
      title="Nhân viên cần làm gì ngay"
      subtitle="Mục tiêu là mỗi người chủ động với điểm của mình, không chờ đến lúc có kết quả cuối kỳ"
    >
      <motion.div
        variants={createContainerVariants(reducedMotion)}
        initial="hidden"
        animate="visible"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '26px' }}
      >
        {employeeActions.map(({ icon: Icon, title, detail }) => (
          <motion.div key={title} variants={createItemVariants(reducedMotion)} style={{ display: 'grid', gap: '12px' }}>
            <Icon size={34} strokeWidth={1.7} color="var(--accent)" />
            <p className="metric-label" style={{ color: 'var(--accent)' }}>{title}</p>
            <p className="text-body">{detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </SlideLayout>
  )
}
