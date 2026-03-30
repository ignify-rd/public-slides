const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

export const fadeInUp = prefersReducedMotion
  ? {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.2 } },
    }
  : {
      hidden: { opacity: 0, y: 18 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    }

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
}

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

export const containerFast = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

export const slideFromLeft = prefersReducedMotion
  ? {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.3 } },
    }
  : {
      hidden: { opacity: 0, x: -24 },
      show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    }

export const slideFromRight = prefersReducedMotion
  ? {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.3 } },
    }
  : {
      hidden: { opacity: 0, x: 24 },
      show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    }

export const scaleIn = prefersReducedMotion
  ? {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.3 } },
    }
  : {
      hidden: { opacity: 0, scale: 0.95 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    }
