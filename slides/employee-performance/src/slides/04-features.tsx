import { motion, useReducedMotion } from 'framer-motion'
import { Activity, BellRing, Gauge, Target } from 'lucide-react'
import { SlideLayout } from '../components/SlideLayout'
import { createContainerVariants, createItemVariants } from '../lib/animations'

const featureCards = [
  {
    icon: Target,
    title: 'Theo dõi Story Points',
    detail: 'Bạn thấy tổng SP đã hoàn thành và SP chưa hoàn thành ngay trong tháng.',
  },
  {
    icon: Gauge,
    title: 'Xem điểm theo công thức chuẩn',
    detail: 'Điểm được tính theo cùng một công thức cho toàn bộ nhân sự.',
  },
  {
    icon: BellRing,
    title: 'Cảnh báo sớm',
    detail: 'Khi Missed_hours tăng hoặc logged_hours bất thường, hệ thống cảnh báo để bạn xử lý sớm.',
  },
  {
    icon: Activity,
    title: 'Minh bạch dữ liệu',
    detail: 'Bạn, quản lý và HR cùng nhìn một nguồn dữ liệu để tránh sai lệch thông tin.',
  },
]

export function FeaturesSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Bạn thấy gì trên dashboard"
      title="4 phần quan trọng nhân viên cần dùng"
      subtitle="Mục tiêu là giúp bạn tự quản trị kết quả của mình theo dữ liệu theo tháng"
    >
      <motion.div
        variants={createContainerVariants(reducedMotion)}
        initial="hidden"
        animate="visible"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '22px' }}
      >
        {featureCards.map(({ icon: Icon, title, detail }) => (
          <motion.div
            key={title}
            variants={createItemVariants(reducedMotion)}
            style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: '16px', alignItems: 'start' }}
          >
            <Icon size={34} strokeWidth={1.7} color="var(--accent)" />
            <div style={{ display: 'grid', gap: '8px' }}>
              <h2 style={{ margin: 0, fontSize: 'clamp(1.1rem, 1.9vw, 1.6rem)', fontFamily: 'var(--font-display)' }}>{title}</h2>
              <p className="text-body">{detail}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SlideLayout>
  )
}
