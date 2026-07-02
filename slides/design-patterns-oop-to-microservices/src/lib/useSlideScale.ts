import { useEffect, useState } from 'react'

export const SLIDE_W = 1280
export const SLIDE_H = 720

export function useSlideScale() {
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const onResize = () =>
      setScale(Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H))
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return scale
}
