import type { Variants } from 'framer-motion'

const baseEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export function createSlideVariants(reducedMotion: boolean): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
      exit: { opacity: 0, transition: { duration: 0.15 } },
    }
  }

  return {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.46, ease: baseEase },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.22, ease: baseEase },
    },
  }
}

export function createContainerVariants(reducedMotion: boolean, stagger = 0.09): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    }
  }

  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: stagger,
        delayChildren: 0.08,
      },
    },
  }
}

export function createItemVariants(reducedMotion: boolean): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    }
  }

  return {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: baseEase },
    },
  }
}

