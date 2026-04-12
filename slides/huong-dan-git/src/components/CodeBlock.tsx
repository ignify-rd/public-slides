import { theme } from '../lib/theme'

interface CodeBlockProps {
  lines: string[]
  fontSize?: string
}

export function CodeBlock({ lines, fontSize }: CodeBlockProps) {
  return (
    <div
      style={{
        background: theme.colors.codeBg,
        borderRadius: 10,
        padding: '16px 20px',
        fontFamily: theme.fonts.mono,
        fontSize: fontSize ?? theme.sizes.code,
        lineHeight: 1.65,
        overflowX: 'auto',
      }}
    >
      {lines.map((line, i) => {
        const isComment = line.trim().startsWith('#')
        const isPrompt = line.startsWith('$ ')
        const displayLine = isPrompt ? line.slice(2) : line
        return (
          <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            {isPrompt && (
              <span style={{ color: theme.colors.codeKeyword, userSelect: 'none', flexShrink: 0 }}>$</span>
            )}
            <span
              style={{
                color: isComment
                  ? theme.colors.codeComment
                  : isPrompt
                  ? theme.colors.codeText
                  : theme.colors.codeString,
                whiteSpace: 'pre',
              }}
            >
              {isComment ? line : displayLine}
            </span>
          </div>
        )
      })}
    </div>
  )
}
