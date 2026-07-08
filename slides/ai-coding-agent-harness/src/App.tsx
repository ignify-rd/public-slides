import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from './slides'
import { slideVariants } from './lib/animations'
import { useSlideScale } from './lib/useSlideScale'

export default function App() {
  const [i, setI] = useState(0)
  const scale = useSlideScale()

  const go = useCallback((n: number) => {
    setI(Math.max(0, Math.min(n, slides.length - 1)))
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault()
        go(i + 1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(i - 1)
      } else if (e.key === 'Home') {
        go(0)
      } else if (e.key === 'End') {
        go(slides.length - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [i, go])

  function onClick(e: React.MouseEvent) {
    const t = e.target as HTMLElement
    if (t.closest('button, a, [data-interactive]')) return
    if (e.clientX > window.innerWidth / 2) go(i + 1)
    else go(i - 1)
  }

  const Active = slides[i]

  return (
    <div className="deck-viewport" onClick={onClick}>
      <div
        className="deck-stage scanlines"
        style={{ transform: `scale(${scale})` }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full"
          >
            <Active />
          </motion.div>
        </AnimatePresence>

        {/* progress bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            height: 3,
            width: `${((i + 1) / slides.length) * 100}%`,
            background: 'var(--green)',
            boxShadow: '0 0 10px rgba(57,211,83,0.7)',
            transition: 'width 0.4s cubic-bezier(0.25,0.1,0.25,1)',
            zIndex: 50,
          }}
        />
        {/* counter */}
        <div
          style={{
            position: 'absolute',
            right: 18,
            bottom: 14,
            fontSize: '0.7rem',
            color: 'var(--text-faint)',
            letterSpacing: '0.15em',
            zIndex: 50,
          }}
        >
          {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  )
}
