export const theme = {
  colors: {
    bg: '#0a0a0a',
    accent: '#4361ee',
    accentDim: 'rgba(67, 97, 238, 0.2)',
    accentGlow: 'rgba(67, 97, 238, 0.15)',
    text: '#ffffff',
    textMuted: 'rgba(255, 255, 255, 0.5)',
    textDim: 'rgba(255, 255, 255, 0.25)',
    border: 'rgba(255, 255, 255, 0.1)',
    borderAccent: 'rgba(67, 97, 238, 0.4)',
    positive: 'rgba(52, 211, 153, 0.85)',
    negative: 'rgba(248, 113, 113, 0.85)',
  },
  fonts: {
    family: "'Manrope', sans-serif",
  },
  sizes: {
    title: 'clamp(2.5rem, 5vw, 4.5rem)',
    heading: 'clamp(1.75rem, 3.5vw, 3rem)',
    subheading: 'clamp(1.25rem, 2.2vw, 2rem)',
    body: 'clamp(0.875rem, 1.4vw, 1.1rem)',
    small: 'clamp(0.75rem, 1.1vw, 0.875rem)',
    label: 'clamp(0.6rem, 0.85vw, 0.7rem)',
  },
  backgrounds: {
    default:
      'radial-gradient(ellipse at 15% 85%, rgba(67, 97, 238, 0.18) 0%, transparent 55%), ' +
      'radial-gradient(ellipse at 85% 15%, rgba(67, 97, 238, 0.06) 0%, transparent 55%), ' +
      '#0a0a0a',
    alt:
      'radial-gradient(ellipse at 80% 80%, rgba(67, 97, 238, 0.15) 0%, transparent 50%), ' +
      'radial-gradient(ellipse at 20% 20%, rgba(67, 97, 238, 0.08) 0%, transparent 50%), ' +
      '#0a0a0a',
    grid:
      'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), ' +
      'linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
  },
} as const
