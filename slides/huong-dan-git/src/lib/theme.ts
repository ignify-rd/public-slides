export const theme = {
  colors: {
    bg: '#f8fafc',
    accent: '#2563eb',
    accentDim: 'rgba(37, 99, 235, 0.15)',
    accentGlow: 'rgba(37, 99, 235, 0.1)',
    text: '#111827',
    textMuted: 'rgba(17, 24, 39, 0.6)',
    textDim: 'rgba(17, 24, 39, 0.3)',
    border: 'rgba(17, 24, 39, 0.1)',
    borderAccent: 'rgba(37, 99, 235, 0.35)',
    positive: 'rgba(5, 150, 105, 0.85)',
    negative: 'rgba(220, 38, 38, 0.85)',
    warning: 'rgba(217, 119, 6, 0.85)',
    codeBg: '#1e293b',
    codeText: '#e2e8f0',
    codeKeyword: '#93c5fd',
    codeString: '#86efac',
    codeComment: '#94a3b8',
  },
  fonts: {
    family: "'Manrope', sans-serif",
    mono: "'JetBrains Mono', 'Courier New', monospace",
  },
  sizes: {
    title: 'clamp(2.5rem, 5vw, 4.5rem)',
    heading: 'clamp(1.75rem, 3.5vw, 3rem)',
    subheading: 'clamp(1.25rem, 2.2vw, 2rem)',
    body: 'clamp(0.875rem, 1.4vw, 1.1rem)',
    small: 'clamp(0.75rem, 1.1vw, 0.875rem)',
    label: 'clamp(0.6rem, 0.85vw, 0.7rem)',
    code: 'clamp(0.75rem, 1.2vw, 0.95rem)',
  },
  backgrounds: {
    default:
      'radial-gradient(ellipse at 15% 85%, rgba(37, 99, 235, 0.07) 0%, transparent 55%), ' +
      'radial-gradient(ellipse at 85% 15%, rgba(37, 99, 235, 0.04) 0%, transparent 55%), ' +
      '#f8fafc',
    alt:
      'radial-gradient(ellipse at 80% 80%, rgba(37, 99, 235, 0.06) 0%, transparent 50%), ' +
      'radial-gradient(ellipse at 20% 20%, rgba(37, 99, 235, 0.04) 0%, transparent 50%), ' +
      '#f1f5f9',
    grid:
      'linear-gradient(rgba(17,24,39,0.04) 1px, transparent 1px), ' +
      'linear-gradient(90deg, rgba(17,24,39,0.04) 1px, transparent 1px)',
  },
} as const
