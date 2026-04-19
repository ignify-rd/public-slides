export const theme = {
  colors: {
    bg: '#F8FAFC',
    bgCard: '#FFFFFF',
    bgSection: '#EFF6FF',
    accent: '#1D4ED8',
    accentAlt: '#0EA5E9',
    accentDim: 'rgba(29, 78, 216, 0.10)',
    accentLight: 'rgba(29, 78, 216, 0.05)',
    accentGreen: '#059669',
    accentGreenDim: 'rgba(5, 150, 105, 0.10)',
    text: '#0F172A',
    textMuted: '#475569',
    textDim: '#94A3B8',
    border: 'rgba(0, 0, 0, 0.08)',
    borderAccent: 'rgba(29, 78, 216, 0.25)',
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
      'radial-gradient(ellipse at 10% 90%, rgba(29, 78, 216, 0.06) 0%, transparent 55%), ' +
      'radial-gradient(ellipse at 90% 10%, rgba(14, 165, 233, 0.04) 0%, transparent 55%), ' +
      '#F8FAFC',
    alt:
      'radial-gradient(ellipse at 85% 85%, rgba(29, 78, 216, 0.05) 0%, transparent 50%), ' +
      'radial-gradient(ellipse at 15% 15%, rgba(14, 165, 233, 0.04) 0%, transparent 50%), ' +
      '#F8FAFC',
    section:
      'linear-gradient(135deg, #EFF6FF 0%, #F0F9FF 100%)',
    dots:
      'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
  },
} as const
