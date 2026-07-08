export const theme = {
  bg: '#0d1117',
  bg2: '#0a0e14',
  panel: '#10161f',
  green: '#39d353',
  greenDim: '#26a641',
  greenDeep: '#0e4429',
  amber: '#d29922',
  red: '#f85149',
  cyan: '#39c5cf',
  text: '#c9d1d9',
  textDim: '#7d8590',
  textFaint: '#484f58',
  line: 'rgba(57, 211, 83, 0.14)',
} as const

export type Theme = typeof theme
