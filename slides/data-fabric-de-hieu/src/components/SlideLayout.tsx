import { useEffect, useState, type ReactNode } from 'react'
import { theme } from '../lib/theme'

interface SlideLayoutProps {
  children: ReactNode
}

export function SlideLayout({ children }: SlideLayoutProps) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    function updateScale() {
      const scaleX = window.innerWidth / 1280
      const scaleY = window.innerHeight / 720
      setScale(Math.min(scaleX, scaleY))
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.colors.bg,
      }}
    >
      <div
        style={{
          width: 1280,
          height: 720,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {children}
      </div>
    </div>
  )
}
