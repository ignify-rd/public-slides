import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SlideLayout } from './components/SlideLayout'
import { slides } from './slides'
import { theme } from './lib/theme'

export default function App() {
  const [current, setCurrent] = useState(0)

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, slides.length - 1))
  }, [])

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0))
  }, [])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  function handleClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement
    if (
      target.closest('[data-interactive]') ||
      target.closest('button') ||
      target.closest('input') ||
      target.closest('a')
    ) {
      return
    }
    if (e.clientX > window.innerWidth / 2) {
      goNext()
    } else {
      goPrev()
    }
  }

  const SlideComponent = slides[current]
  const progress = ((current + 1) / slides.length) * 100

  return (
    <div
      style={{ width: '100vw', height: '100vh', cursor: 'default', userSelect: 'none' }}
      onClick={handleClick}
    >
      <SlideLayout>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ width: '100%', height: '100%' }}
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </SlideLayout>

      {/* Progress bar */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 2,
          background: 'rgba(255,255,255,0.06)',
          zIndex: 100,
        }}
      >
        <motion.div
          style={{ height: '100%', background: theme.colors.accent, originX: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>

      {/* Slide counter */}
      <div
        style={{
          position: 'fixed',
          bottom: 10,
          right: 18,
          fontSize: 'clamp(0.6rem, 1vw, 0.7rem)',
          color: 'rgba(255,255,255,0.3)',
          fontFamily: theme.fonts.family,
          letterSpacing: '0.08em',
          zIndex: 100,
        }}
      >
        {current + 1} / {slides.length}
      </div>
    </div>
  )
}
