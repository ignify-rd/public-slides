import { motion, useReducedMotion } from 'framer-motion'
import { Radar, RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { ChartFrame } from '../components/ChartFrame'
import { SlideLayout } from '../components/SlideLayout'
import { kpiHealth } from '../data/performance'
import { createContainerVariants, createItemVariants } from '../lib/animations'
import { theme } from '../lib/theme'

export function DashboardSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Cách đọc dashboard"
      title="4 chỉ số bạn nên kiểm tra mỗi tuần"
      subtitle="Đọc dashboard theo tuần giúp phát hiện sớm rủi ro trước khi điểm bị kéo xuống ở cuối tháng"
    >
      <motion.div
        variants={createContainerVariants(reducedMotion)}
        initial="hidden"
        animate="visible"
        style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '24px', height: '100%' }}
      >
        <motion.div variants={createItemVariants(reducedMotion)} style={{ alignSelf: 'center', display: 'grid', gap: '20px' }}>
          <div>
            <p className="metric-label" style={{ color: 'var(--accent)' }}>Checklist tự kiểm tra</p>
            <p className="text-body">Nếu một chỉ số giảm liên tục 2 tuần, bạn nên trao đổi sớm với quản lý để có kế hoạch cải thiện.</p>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '10px' }}>
            <li className="text-body">1. Story Points hoàn thành</li>
            <li className="text-body">2. Efficiency</li>
            <li className="text-body">3. Missed_hours / Est_hours</li>
            <li className="text-body">4. Power coefficient theo level hiện tại</li>
          </ul>
        </motion.div>

        <motion.div variants={createItemVariants(reducedMotion)}>
          <ChartFrame title="Trạng thái chỉ số hiện tại">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="72%" data={kpiHealth}>
                <PolarGrid stroke={theme.colors.grid} />
                <PolarAngleAxis dataKey="metric" tick={{ fill: theme.colors.muted, fontSize: 'clamp(0.7rem, 0.86vw, 0.86rem)' }} />
                <PolarRadiusAxis axisLine={false} tickLine={false} tick={false} domain={[0, 100]} />
                <Radar dataKey="value" stroke={theme.colors.accent} fill={theme.colors.accent} fillOpacity={0.22} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartFrame>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
