import { useEffect, useState } from 'react'
import { slides } from './slides'

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.code === 'Space') {
        e.preventDefault()
        setCurrentSlide((s) => Math.min(s + 1, slides.length - 1))
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentSlide((s) => Math.max(s - 1, 0))
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  function handleClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement
    if (target.closest('button') || target.closest('a') || target.closest('[data-interactive]')) return
    if (e.clientX > window.innerWidth / 2) {
      setCurrentSlide((s) => Math.min(s + 1, slides.length - 1))
    } else {
      setCurrentSlide((s) => Math.max(s - 1, 0))
    }
  }

  const ActiveSlide = slides[currentSlide]

  return (
    <div className="w-full h-full flex flex-col" onClick={handleClick}>
      <div className="flex-1 overflow-hidden transition-all duration-300">
        <div key={currentSlide} className="w-full h-full">
          <ActiveSlide />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-2 bg-white border-t border-gray-200">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setCurrentSlide((s) => Math.max(s - 1, 0)) }}
          disabled={currentSlide === 0}
          className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Trước
        </button>
        <div className="flex items-center gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { e.stopPropagation(); setCurrentSlide(i) }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentSlide ? 'bg-blue-600 w-4' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-400 min-w-[3rem] text-center">
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setCurrentSlide((s) => Math.min(s + 1, slides.length - 1)) }}
          disabled={currentSlide === slides.length - 1}
          className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Tiếp
        </button>
      </div>
    </div>
  )
}
