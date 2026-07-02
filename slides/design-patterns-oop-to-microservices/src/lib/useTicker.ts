import { useEffect, useRef, useState } from 'react'
import { REDUCED } from './animations'

/**
 * Cycles 0..durations.length-1 forever; phase i lasts durations[i] ms.
 * Drives the looping mechanism animations on diagram slides.
 * With prefers-reduced-motion, freezes on the final phase (full picture).
 */
export function useTicker(durations: number[]): number {
  const [phase, setPhase] = useState(0)
  const durRef = useRef(durations)
  durRef.current = durations
  useEffect(() => {
    if (REDUCED) return
    const t = setTimeout(
      () => setPhase((p) => (p + 1) % durRef.current.length),
      durRef.current[phase],
    )
    return () => clearTimeout(t)
  }, [phase])
  return REDUCED ? durations.length - 1 : phase
}
