import type { FC } from 'react'

export interface SlideProps {
  step: number
}

export interface SlideDef {
  id: string
  steps?: number
  C: FC<SlideProps>
}
