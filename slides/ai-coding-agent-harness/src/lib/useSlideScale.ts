import { useEffect, useState } from 'react'

const STAGE_W = 1280
const STAGE_H = 720

/** Uniform scale so the 1280x720 stage fits the viewport, like reveal.js. */
export function useSlideScale() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    function recompute() {
      const s = Math.min(
        window.innerWidth / STAGE_W,
        window.innerHeight / STAGE_H,
      )
      setScale(s)
    }
    recompute()
    window.addEventListener('resize', recompute)
    return () => window.removeEventListener('resize', recompute)
  }, [])

  return scale
}
