// Electric Studio preset — dark stage, electric blue accent.
export const T = {
  base: '#0a0a0a',
  panel: '#10131a',
  accent: '#4361ee',
  accentBright: '#6d8cff',
  ink: '#f2f5fa',
  muted: '#8b93a7',
  ok: '#2ec27e',
  danger: '#ff5252',
  warn: '#f0a832',
  mono: "'JetBrains Mono', ui-monospace, monospace",
} as const

export const clamp = (min: string, pref: string, max: string) => `clamp(${min}, ${pref}, ${max})`
