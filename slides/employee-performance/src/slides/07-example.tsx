import { motion, useReducedMotion } from 'framer-motion'
import { MathBlock } from '../components/MathBlock'
import { SlideLayout } from '../components/SlideLayout'
import { sampleCase } from '../data/performance'
import { createContainerVariants, createItemVariants } from '../lib/animations'
import type { SlideProps } from '../types'

const spComponent = sampleCase.weightSp * (sampleCase.storyPoints / sampleCase.maxStoryPoints)
const effComponent = sampleCase.weightEfficiency * (sampleCase.efficiency / sampleCase.efficiencyMax)
const powerComponent = sampleCase.weightPower * (sampleCase.minPowerCoeff / sampleCase.powerCoeff)
const baseScore = 100 * (spComponent + effComponent + powerComponent)
const missedFactor = Math.max(0, 1 - (sampleCase.missedHours / sampleCase.estHours))
const finalScore = baseScore * missedFactor

const baseTex = String.raw`BaseScore=100\times\left(\omega_{SP}\times\frac{SP}{\max(SP)}+\omega_{eff}\times\frac{Efficiency}{\max(Efficiency)}+\omega_{power}\times\frac{\min(power_{coeff})}{power_{coeff}}\right)`
const finalTex = String.raw`Score=BaseScore\times\left(1-\frac{Missed_{hours}}{Est_{hours}}\right)`

export function ExampleSlide({ step }: SlideProps) {
  const reducedMotion = Boolean(useReducedMotion())
  const spRatio = (sampleCase.storyPoints / sampleCase.maxStoryPoints) * 100
  const effRatio = (sampleCase.efficiency / sampleCase.efficiencyMax) * 100
  const deadlineRatio = (sampleCase.missedHours / sampleCase.estHours) * 100
  const stepSubtitles = [
    `${sampleCase.employee} • ${sampleCase.role} • Bước 1/3: nhìn các số đầu vào`,
    `${sampleCase.employee} • ${sampleCase.role} • Bước 2/3: đổi SP và Efficiency thành tỷ lệ so với mốc cao nhất tháng`,
    `${sampleCase.employee} • ${sampleCase.role} • Bước 3/3: trừ phần deadline để ra điểm cuối`,
  ]

  return (
    <SlideLayout
      kicker="Ví dụ thực tế"
      title="Ví dụ tính điểm"
      subtitle={stepSubtitles[step]}
    >
      <motion.div variants={createContainerVariants(reducedMotion)} initial="hidden" animate="visible" style={{ display: 'grid', gap: '14px' }}>
        <motion.div variants={createItemVariants(reducedMotion)} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: '8px' }}>
          <div>
            <p className="metric-label">SP</p>
            <p className="metric-number">{sampleCase.storyPoints}</p>
          </div>
          <div>
            <p className="metric-label">max(SP)</p>
            <p className="metric-number">{sampleCase.maxStoryPoints}</p>
          </div>
          <div>
            <p className="metric-label">Efficiency</p>
            <p className="metric-number">{sampleCase.efficiency}</p>
          </div>
          <div>
            <p className="metric-label">Est_hours</p>
            <p className="metric-number">{sampleCase.estHours}</p>
          </div>
          <div>
            <p className="metric-label">Missed_hours</p>
            <p className="metric-number">{sampleCase.missedHours}</p>
          </div>
        </motion.div>

        {step >= 1 ? (
          <motion.div variants={createItemVariants(reducedMotion)} className="math-panel math-panel-example" style={{ padding: '16px 20px' }}>
            <MathBlock tex={baseTex} />
            <p className="text-small">
              Phần SP: {sampleCase.storyPoints}/{sampleCase.maxStoryPoints} = {spRatio.toFixed(0)}% mốc cao nhất tháng.
              {' '}Phần Efficiency: {sampleCase.efficiency}/{sampleCase.efficiencyMax} = {effRatio.toFixed(0)}% mốc cao nhất tháng.
            </p>
            <p className="text-small">
              BaseScore = 100 × ({spComponent.toFixed(3)} + {effComponent.toFixed(3)} + {powerComponent.toFixed(3)}) = <strong>{baseScore.toFixed(2)}</strong>
            </p>
          </motion.div>
        ) : null}

        {step >= 2 ? (
          <motion.div variants={createItemVariants(reducedMotion)} className="math-panel math-panel-example" style={{ padding: '16px 20px' }}>
            <MathBlock tex={finalTex} />
            <p className="text-small">
              Do có {sampleCase.missedHours} giờ trễ trên tổng {sampleCase.estHours} giờ ước lượng, điểm bị giữ lại khoảng {deadlineRatio.toFixed(1)}%.
            </p>
            <p className="text-small">
              Score = {baseScore.toFixed(2)} × (1 - {sampleCase.missedHours}/{sampleCase.estHours}) = <strong>{finalScore.toFixed(2)}</strong>
            </p>
            <p className="text-body">Kết luận: muốn tăng điểm tháng sau, cần giảm Missed_hours và tăng SP hoàn thành.</p>
          </motion.div>
        ) : null}
      </motion.div>
    </SlideLayout>
  )
}
