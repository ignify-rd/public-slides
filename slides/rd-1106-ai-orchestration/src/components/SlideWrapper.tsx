import type { ReactNode } from 'react'

type SlideWrapperProps = {
  children: ReactNode
  className?: string
}

export function SlideWrapper({ children, className = '' }: SlideWrapperProps) {
  return (
    <div
      className={`w-full h-full bg-gray-50 text-gray-900 flex flex-col p-12 ${className}`}
    >
      {children}
    </div>
  )
}
