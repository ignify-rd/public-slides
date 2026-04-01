import { motion, useReducedMotion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { createContainerVariants, createItemVariants } from '../lib/animations'

const rules = [
  {
    title: 'Chuẩn hóa theo max(SP)',
    detail: 'SP được chia cho max(SP) trong tháng để bảo đảm so sánh công bằng giữa các nhân sự.',
  },
  {
    title: 'Efficiency có ngưỡng trần',
    detail: 'Efficiency bị chặn bởi eff_threshold để tránh điểm tăng quá mức vì log quá thấp.',
  },
  {
    title: 'Hệ số trễ deadline',
    detail: 'Phần (1 - Missed_hours / Est_hours) kéo điểm xuống khi có giờ trễ deadline.',
  },
  {
    title: 'Rule giảm 30% điểm',
    detail: 'Nếu logged_hours < 50% × median(logged_hours), hệ thống nhân Score với 0.7.',
  },
]

export function RulesSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Quy tắc áp dụng"
      title="4 quy tắc điều chỉnh điểm cần nhớ"
      subtitle="Các quy tắc này đã được code trong module và áp dụng thống nhất cho toàn công ty"
    >
      <motion.div variants={createContainerVariants(reducedMotion)} initial="hidden" animate="visible" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '24px' }}>
        {rules.map((rule) => (
          <motion.div key={rule.title} variants={createItemVariants(reducedMotion)} style={{ display: 'grid', gap: '10px' }}>
            <p className="metric-label" style={{ color: 'var(--accent)' }}>{rule.title}</p>
            <p className="text-body">{rule.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </SlideLayout>
  )
}
