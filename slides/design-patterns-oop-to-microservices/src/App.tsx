import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SLIDES } from './slides'
import { SLIDE_H, SLIDE_W, useSlideScale } from './lib/useSlideScale'
import { EASE, REDUCED } from './lib/animations'
import { T } from './lib/theme'

const INTERACTIVE = '[data-interactive], button, input, textarea, select, a'

function initialIndex() {
  const n = parseInt(window.location.hash.slice(1), 10)
  return Number.isFinite(n) && n >= 1 && n <= SLIDES.length ? n - 1 : 0
}

export default function App() {
  const scale = useSlideScale()
  const [pos, setPos] = useState(() => ({ i: initialIndex(), step: 0 }))
  const total = SLIDES.length
  const slide = SLIDES[pos.i]
  const steps = slide.steps ?? 1

  useEffect(() => {
    window.history.replaceState(null, '', `#${pos.i + 1}`)
  }, [pos.i])

  const next = useCallback(() => {
    setPos((p) => {
      const s = SLIDES[p.i].steps ?? 1
      if (p.step < s - 1) return { i: p.i, step: p.step + 1 }
      return p.i < total - 1 ? { i: p.i + 1, step: 0 } : p
    })
  }, [total])

  const prev = useCallback(() => {
    setPos((p) => {
      if (p.step > 0) return { i: p.i, step: p.step - 1 }
      return p.i > 0 ? { i: p.i - 1, step: 0 } : p
    })
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter' || e.key === 'PageDown') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') {
        setPos({ i: 0, step: 0 })
      } else if (e.key === 'End') {
        setPos({ i: total - 1, step: 0 })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, total])

  const onClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(INTERACTIVE)) return
    if (e.clientX > window.innerWidth / 2) next()
    else prev()
  }

  const C = slide.C
  return (
    <div
      onClick={onClick}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          width: SLIDE_W,
          height: SLIDE_H,
          transform: `scale(${scale})`,
          flexShrink: 0,
          boxShadow: '0 0 120px rgba(0,0,0,0.8)',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={REDUCED ? { opacity: 0 } : { opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
            style={{ width: SLIDE_W, height: SLIDE_H }}
          >
            <C step={pos.step} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* progress bar */}
      <div style={{ position: 'fixed', left: 0, bottom: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.07)' }}>
        <motion.div
          animate={{ width: `${((pos.i + 1) / total) * 100}%` }}
          transition={{ duration: 0.3 }}
          style={{ height: '100%', background: T.accent }}
        />
      </div>

      {/* counter */}
      <div
        style={{
          position: 'fixed',
          right: 18,
          bottom: 12,
          fontFamily: T.mono,
          fontSize: 12,
          color: 'rgba(139,147,167,0.75)',
        }}
      >
        {pos.i + 1} / {total}
      </div>

      {/* step dots */}
      {steps > 1 && (
        <div style={{ position: 'fixed', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
          {Array.from({ length: steps }, (_, s) => (
            <div
              key={s}
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: s <= pos.step ? T.accentBright : 'rgba(255,255,255,0.18)',
                transition: 'background .2s',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
