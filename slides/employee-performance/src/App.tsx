import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState, type MouseEvent } from 'react'
import { createSlideVariants } from './lib/animations'
import { useSlideScale } from './lib/useSlideScale'
import { slides } from './slides'

const STAGE_WIDTH = 1280
const STAGE_HEIGHT = 720
const SKIP_NAV_SELECTOR = '[data-interactive],button,a,input,textarea,select,label'

function App() {
  const [{ slideIndex, stepIndex }, setPosition] = useState({
    slideIndex: 0,
    stepIndex: 0,
  })
  const scale = useSlideScale(STAGE_WIDTH, STAGE_HEIGHT, 56)
  const prefersReducedMotion = useReducedMotion()

  const activeSlide = slides[slideIndex]
  const totalSteps = activeSlide.steps ?? 1
  const slideVariants = useMemo(
    () => createSlideVariants(Boolean(prefersReducedMotion)),
    [prefersReducedMotion],
  )

  const goNext = useCallback(() => {
    setPosition((current) => {
      const currentSlide = slides[current.slideIndex]
      const currentSteps = currentSlide.steps ?? 1

      if (current.stepIndex < currentSteps - 1) {
        return {
          slideIndex: current.slideIndex,
          stepIndex: current.stepIndex + 1,
        }
      }

      if (current.slideIndex >= slides.length - 1) {
        return current
      }

      return {
        slideIndex: current.slideIndex + 1,
        stepIndex: 0,
      }
    })
  }, [])

  const goPrevious = useCallback(() => {
    setPosition((current) => {
      if (current.stepIndex > 0) {
        return {
          slideIndex: current.slideIndex,
          stepIndex: current.stepIndex - 1,
        }
      }

      if (current.slideIndex === 0) {
        return current
      }

      const previousSlide = slides[current.slideIndex - 1]
      const previousStepCount = previousSlide.steps ?? 1
      return {
        slideIndex: current.slideIndex - 1,
        stepIndex: previousStepCount - 1,
      }
    })
  }, [])

  const onDeckClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement | null
      if (target?.closest(SKIP_NAV_SELECTOR)) {
        return
      }

      if (event.clientX >= window.innerWidth / 2) {
        goNext()
      } else {
        goPrevious()
      }
    },
    [goNext, goPrevious],
  )

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLElement && event.target.closest(SKIP_NAV_SELECTOR)) {
        return
      }

      if (event.key === 'ArrowRight' || event.key === 'Enter' || event.code === 'Space') {
        event.preventDefault()
        goNext()
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goPrevious()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrevious])

  const progressPercent = ((slideIndex + (stepIndex + 1) / totalSteps) / slides.length) * 100
  const ActiveComponent = activeSlide.Component

  return (
    <div className="deck-root" onClick={onDeckClick}>
      <div
        className="deck-stage"
        style={{
          width: `${STAGE_WIDTH}px`,
          height: `${STAGE_HEIGHT}px`,
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSlide.id}-${slideIndex}`}
            className="slide-frame"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ActiveComponent step={stepIndex} totalSteps={totalSteps} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="deck-progress" role="presentation">
        <span style={{ width: `${progressPercent}%` }} />
      </div>

      <div className="deck-controls" data-interactive="true">
        <button
          type="button"
          className="deck-button"
          style={{ padding: '16px 32px' }}
          onClick={goPrevious}
        >
          <ChevronLeft size={18} />
          <span>Trước</span>
        </button>

        <p className="deck-counter">
          {slideIndex + 1} / {slides.length}
        </p>

        <button
          type="button"
          className="deck-button"
          style={{ padding: '16px 32px' }}
          onClick={goNext}
        >
          <span>Tiếp</span>
          <ChevronRight size={18} />
        </button>
      </div>

      {totalSteps > 1 && (
        <div className="step-indicator" data-interactive="true">
          {Array.from({ length: totalSteps }, (_, dotIndex) => (
            <span key={`step-${dotIndex}`} className={dotIndex <= stepIndex ? 'is-active' : ''} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App

