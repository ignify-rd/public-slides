export const theme = {
  colors: {
    bg: '#FAFAF8',
    bgCard: '#FFFFFF',
    accent: '#C96442',
    accentDim: 'rgba(201, 100, 66, 0.12)',
    accentLight: 'rgba(201, 100, 66, 0.06)',
    text: '#1C1917',
    textMuted: '#57534E',
    textDim: '#A8A29E',
    border: 'rgba(0, 0, 0, 0.08)',
    borderAccent: 'rgba(201, 100, 66, 0.3)',
    shadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)',
    shadowCard: '0 2px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.04)',
  },
  fonts: {
    family: "'Inter', sans-serif",
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
      'radial-gradient(ellipse at 10% 90%, rgba(201, 100, 66, 0.07) 0%, transparent 55%), ' +
      'radial-gradient(ellipse at 90% 10%, rgba(201, 100, 66, 0.04) 0%, transparent 55%), ' +
      '#FAFAF8',
    alt:
      'radial-gradient(ellipse at 85% 85%, rgba(201, 100, 66, 0.06) 0%, transparent 50%), ' +
      'radial-gradient(ellipse at 15% 15%, rgba(201, 100, 66, 0.04) 0%, transparent 50%), ' +
      '#FAFAF8',
    dots:
      'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
  },
} as const
