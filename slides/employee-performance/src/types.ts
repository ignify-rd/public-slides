import type { ReactElement } from 'react'

export type SlideProps = {
  step: number
  totalSteps: number
}

export type SlideDefinition = {
  id: string
  title: string
  steps?: number
  Component: (props: SlideProps) => ReactElement
}

