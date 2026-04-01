import { motion, useReducedMotion } from 'framer-motion'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartFrame } from '../components/ChartFrame'
import { SlideLayout } from '../components/SlideLayout'
import { monthlyTrend } from '../data/performance'
import { createContainerVariants, createItemVariants } from '../lib/animations'
import { theme } from '../lib/theme'

const tickStyle = {
  fill: theme.colors.muted,
  fontSize: 'clamp(0.75rem, 0.95vw, 0.9rem)',
}

export function TrendChartSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Example"
      title="Xu hướng điểm trung bình đang tăng"
      subtitle="Khi theo dõi đúng biến số, điểm trung bình toàn team cải thiện ổn định theo từng tháng"
    >
      <motion.div variants={createContainerVariants(reducedMotion)} initial="hidden" animate="visible" style={{ height: '100%' }}>
        <motion.div variants={createItemVariants(reducedMotion)} style={{ height: '100%' }}>
          <ChartFrame title="Điểm trung bình theo tháng" note="Nguồn dữ liệu: Dashboard Employee Performance treen Odoo">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTrend} margin={{ top: 10, right: 24, left: 6, bottom: 8 }}>
                <CartesianGrid stroke={theme.colors.grid} strokeDasharray="4 6" />
                <XAxis dataKey="month" tick={tickStyle} axisLine={{ stroke: theme.colors.border }} tickLine={false} />
                <YAxis domain={[72, 90]} tick={tickStyle} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    border: `1px solid ${theme.colors.border}`,
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '12px 16px',
                    fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke={theme.colors.accent}
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 0, fill: theme.colors.accent }}
                  activeDot={{ r: 6, stroke: '#ffffff', strokeWidth: 1 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartFrame>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}

