import { motion, useReducedMotion } from 'framer-motion'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartFrame } from '../components/ChartFrame'
import { SlideLayout } from '../components/SlideLayout'
import { ratingDistribution } from '../data/performance'
import { createContainerVariants, createItemVariants } from '../lib/animations'
import { theme } from '../lib/theme'

const tickStyle = {
  fill: theme.colors.muted,
  fontSize: 'clamp(0.75rem, 0.95vw, 0.9rem)',
}

export function DistributionChartSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Example"
      title="Phân bố xếp loại theo band điểm"
      subtitle="Bạn có thể dùng band điểm để tự định vị và chọn mục tiêu cải thiện tháng kế tiếp"
    >
      <motion.div
        variants={createContainerVariants(reducedMotion)}
        initial="hidden"
        animate="visible"
        style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '26px', height: '100%' }}
      >
        <motion.div variants={createItemVariants(reducedMotion)}>
          <ChartFrame title="Số lượng nhân viên theo xếp loại">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ratingDistribution} margin={{ top: 10, right: 14, left: 0, bottom: 4 }}>
                <CartesianGrid stroke={theme.colors.grid} strokeDasharray="3 5" />
                <XAxis dataKey="band" tick={tickStyle} axisLine={{ stroke: theme.colors.border }} tickLine={false} />
                <YAxis tick={tickStyle} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    border: `1px solid ${theme.colors.border}`,
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '12px 16px',
                    fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                  }}
                />
                <Bar dataKey="people" fill={theme.colors.accent} radius={[0, 0, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartFrame>
        </motion.div>

        <motion.div variants={createItemVariants(reducedMotion)} style={{ alignSelf: 'center', display: 'grid', gap: '18px' }}>
          <p className="text-body">Band B đang chiếm tỷ trọng cao nhất. Đây là nhóm có thể đẩy lên A nhanh nhất nếu nâng kỷ luật và chất lượng đầu ra.</p>
          <div style={{ display: 'grid', gap: '8px' }}>
            <p className="metric-label">Gợi ý hành động</p>
            <p className="text-body">Nếu bạn đang ở band B, ưu tiên giảm Missed_hours và tăng SP hoàn thành đúng hạn để bứt lên band A.</p>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}

