import { motion, useReducedMotion } from 'framer-motion'
import { MathBlock } from '../components/MathBlock'
import { SlideLayout } from '../components/SlideLayout'
import { scoreWeights } from '../data/performance'
import { createContainerVariants, createItemVariants } from '../lib/animations'

const efficiencyTex = String.raw`Efficiency=\min\left(\frac{Est_{hours}}{logged_{hours}},\;eff_{threshold}\right)`
const scoreTex = String.raw`Score=100\times\left(\omega_{SP}\times\frac{SP}{\max(SP)}+\omega_{eff}\times\frac{Efficiency}{\max(Efficiency)}+\omega_{power}\times\frac{\min(power_{coeff})}{power_{coeff}}\right)\times\left(1-\frac{Missed_{hours}}{Est_{hours}}\right)`
const lowActivityRuleTex = String.raw`logged_{hours}<0.5\times median(logged_{hours})\Rightarrow Score\times=0.7`

export function FormulaSlide() {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <SlideLayout
      kicker="Công thức gốc trong module"
      title="Công thức tính điểm (dạng toán học)"
      subtitle="Ký hiệu bên dưới được giữ đúng theo module employee_performance để bạn đối chiếu trực tiếp"
    >
      <motion.div variants={createContainerVariants(reducedMotion)} initial="hidden" animate="visible" style={{ display: 'grid', gap: '18px' }}>
        <motion.div variants={createItemVariants(reducedMotion)} className="math-panel" style={{ padding: '22px 26px' }}>
          <MathBlock tex={efficiencyTex} />
        </motion.div>

        <motion.div variants={createItemVariants(reducedMotion)} className="math-panel" style={{ padding: '22px 26px' }}>
          <MathBlock tex={scoreTex} />
        </motion.div>

        <motion.div variants={createItemVariants(reducedMotion)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
          <div className="math-panel" style={{ padding: '20px 24px' }}>
            <MathBlock tex={lowActivityRuleTex} className="math-inline" />
          </div>
          <div style={{ display: 'grid', gap: '8px' }}>
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
