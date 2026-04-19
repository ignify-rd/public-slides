import type { ReactNode } from 'react'

type SlideWrapperProps = {
  children: ReactNode
  className?: string
}

export function SlideWrapper({ children, className = '' }: SlideWrapperProps) {
  return (
    <div
      className={`w-full h-full bg-white text-gray-900 flex flex-col p-12 animate-fade-in ${className}`}
    >
      {children}
    </div>
  )
}
