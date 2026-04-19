import { useEffect, useState } from 'react'
import { SlideWrapper } from './components/SlideWrapper'

const PlaceholderSlide = ({ label }: { label: string }) => (
  <SlideWrapper>
    <div className="flex items-center justify-center w-full h-full">
      <p className="text-2xl font-medium text-gray-400">{label}</p>
    </div>
  </SlideWrapper>
)

const slides = [
  () => <PlaceholderSlide label="Slide 1" />,
]

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

  const ActiveSlide = slides[currentSlide]

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 overflow-hidden">
        <ActiveSlide />
      </div>
      <div className="flex items-center justify-center gap-4 py-3 bg-white border-t border-gray-200">
        <button
          type="button"
          onClick={() => setCurrentSlide((s) => Math.max(s - 1, 0))}
          disabled={currentSlide === 0}
          className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Truoc
        </button>
        <span className="text-sm text-gray-500">
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          type="button"
          onClick={() => setCurrentSlide((s) => Math.min(s + 1, slides.length - 1))}
          disabled={currentSlide === slides.length - 1}
          className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Tiep
        </button>
      </div>
    </div>
  )
}
