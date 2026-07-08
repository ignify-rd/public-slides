import type { Variants } from 'framer-motion'

// Animations always on — không tôn trọng OS prefers-reduced-motion
const reduce = false

const ease = [0.25, 0.1, 0.25, 1] as const

export const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 },
  },
}

export const item: Variants = reduce
  ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
  : {
      hidden: { opacity: 0, y: 18 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
    }

export const itemX: Variants = reduce
  ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
  : {
      hidden: { opacity: 0, x: -24 },
      show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
    }

export const scaleIn: Variants = reduce
  ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
  : {
      hidden: { opacity: 0, scale: 0.96 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
    }

// Slide-level enter/exit for AnimatePresence
export const slideVariants: Variants = reduce
  ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
  : {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
      exit: { opacity: 0, transition: { duration: 0.2 } },
    }

export const prefersReducedMotion = reduce
export { ease }
