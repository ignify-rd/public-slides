import { motion, useReducedMotion } from 'framer-motion'
import { MathBlock } from '../components/MathBlock'
import { SlideLayout } from '../components/SlideLayout'
import { scoreWeights } from '../data/performance'
import { createContainerVariants, createItemVariants } from '../lib/animations'

const efficiencyTex = String.raw`Efficiency=\min\left(\frac{Est_{hours}}{logged_{hours}},\;eff_{threshold}\right)`
const scoreTex = String.raw`\begin{aligned}
Score &= 100\times\Bigg(
\omega_{SP}\times\frac{SP}{\max(SP)}
 \omega_{eff}\times\frac{Efficiency}{\max(Efficiency)} \\
&\quad + \omega_{power}\times\frac{\min(power_{coeff})}{power_{coeff}}
\Bigg) \\
&\quad \times\left(1-\frac{Missed_{hours}}{Est_{hours}}\right)
\end{aligned}`
const lowActivityRuleTex = String.raw`logged_{hours}<0.5\times median(logged_{hours})\Rightarrow Score\times=0.7`

export function FormulaSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Công thức gốc trong module"
      title="Công thức tính điểm"
      subtitle="Nếu bạn không quen công thức, chỉ cần nhớ 4 ý: làm được bao nhiêu, làm hiệu quả đến đâu, có trễ deadline không, và dữ liệu log có hợp lý không"
    >
      <motion.div variants={createContainerVariants(reducedMotion)} initial="hidden" animate="visible" style={{ display: 'grid', gap: '18px' }}>
        <motion.div
          variants={createItemVariants(reducedMotion)}
          className="math-panel"
          style={{ padding: '22px 26px', display: 'grid', gap: '10px' }}
        >
          <MathBlock tex={efficiencyTex} />
          <p className="text-small">
            <strong>eff_threshold</strong> là ngưỡng trần của Efficiency trong phần Settings
            {' '}(`Max Efficiency Threshold`, mặc định 2.0).
          </p>
          <p className="text-small">
            Hiểu đơn giản: cùng một lượng việc, nếu bạn dùng ít giờ hơn thì Efficiency cao hơn, nhưng hệ thống chỉ tính đến một mức tối đa.
          </p>
        </motion.div>

        <motion.div variants={createItemVariants(reducedMotion)} className="math-panel math-panel-score" style={{ padding: '22px 26px' }}>
          <MathBlock tex={scoreTex} />
          <p className="text-small">
            Hiểu đơn giản: điểm tổng gồm phần khối lượng công việc, phần hiệu quả làm việc và phần điều chỉnh theo level/vị trí, sau đó bị kéo xuống nếu có giờ trễ deadline.
          </p>
        </motion.div>

        <motion.div variants={createItemVariants(reducedMotion)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
          <div className="math-panel" style={{ padding: '20px 24px' }}>
            <MathBlock tex={lowActivityRuleTex} className="math-inline" />
            <p className="text-small">Hiểu đơn giản: log giờ quá thấp so với mặt bằng tháng thì điểm bị giảm còn 70%.</p>
          </div>
          <div style={{ display: 'grid', gap: '8px' }}>
            <p className="text-small">
              <strong>ω</strong> là trọng số. Số nào lớn hơn thì phần đó ảnh hưởng nhiều hơn tới điểm tổng.
            </p>
            {scoreWeights.map((item) => (
              <div key={item.label} style={{ display: 'grid', gap: '2px' }}>
                <MathBlock tex={`${item.label}=${item.weight.toFixed(2)}`} className="math-inline" />
                <p className="text-small">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
