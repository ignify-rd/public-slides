import { useEffect, useState } from 'react'

export function useSlideScale(width: number, height: number, safeMargin = 48) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const availableWidth = window.innerWidth - safeMargin * 2
      const availableHeight = window.innerHeight - safeMargin * 2
      const nextScale = Math.min(availableWidth / width, availableHeight / height)
      setScale(Math.max(0.34, Number.isFinite(nextScale) ? nextScale : 1))
    }

    updateScale()
    window.addEventListener('resize', updateScale)

    return () => window.removeEventListener('resize', updateScale)
  }, [height, safeMargin, width])

  return scale
}

