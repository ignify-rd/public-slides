import type { Variants } from 'framer-motion'

export const EASE = [0.25, 0.1, 0.25, 1] as const

// Motion always on — OS "reduce motion" setting intentionally ignored.
export const REDUCED = false

export const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export const item: Variants = REDUCED
  ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
  : {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
    }

export const itemX: Variants = REDUCED
  ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
  : {
      hidden: { opacity: 0, x: -24 },
      show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
    }

export const fadeScale: Variants = REDUCED
  ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
  : {
      hidden: { opacity: 0, scale: 0.96 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
    }
