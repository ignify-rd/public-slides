import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { createItemVariants } from '../lib/animations'

type AnimatedTextProps = {
  reducedMotion: boolean
  children: ReactNode
  className?: string
}

export function AnimatedText({ reducedMotion, children, className }: AnimatedTextProps) {
  return (
    <motion.p className={className} variants={createItemVariants(reducedMotion)}>
      {children}
    </motion.p>
  )
}

