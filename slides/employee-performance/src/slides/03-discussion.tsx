import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircleQuestion } from 'lucide-react'
import { SlideLayout } from '../components/SlideLayout'
import { createContainerVariants, createItemVariants } from '../lib/animations'

const pointsToKnow = [
  'Bạn đang được chấm theo dữ liệu nào trong tháng?',
  'Trọng số nào đang ảnh hưởng điểm của bạn nhiều nhất?',
  'Bạn cần cải thiện biến số nào để tăng điểm tháng sau?',
]

export function DiscussionSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Trước khi xem bảng điểm"
      title="3 điều nhân viên cần nắm rõ"
      subtitle="Nếu hiểu 3 điều này, bạn có thể đọc dashboard nhanh và tự hành động theo dữ liệu"
    >
      <motion.div
        variants={createContainerVariants(reducedMotion)}
        initial="hidden"
        animate="visible"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '46px', height: '100%' }}
      >
        <motion.div variants={createItemVariants(reducedMotion)} style={{ alignSelf: 'start', display: 'grid', gap: '18px' }}>
          <MessageCircleQuestion size={58} strokeWidth={1.6} color="var(--accent)" />
          <p className="text-body" style={{ maxWidth: '480px' }}>
            Trong buổi phổ biến, HR sẽ đi từng phần: dữ liệu đầu vào, công thức chuẩn và ví dụ tính điểm thực tế.
          </p>
        </motion.div>

        <motion.ol variants={createItemVariants(reducedMotion)} style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '18px' }}>
          {pointsToKnow.map((point, index) => (
            <li key={point} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '14px', alignItems: 'start' }}>
              <p className="metric-label" style={{ color: 'var(--accent)', marginTop: '4px' }}>
                0{index + 1}
              </p>
              <p className="text-body">{point}</p>
            </li>
          ))}
        </motion.ol>
      </motion.div>
    </SlideLayout>
  )
}
