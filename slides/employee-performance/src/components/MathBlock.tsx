import { useMemo } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

type MathBlockProps = {
  tex: string
  inline?: boolean
  className?: string
}

export function MathBlock({ tex, inline = false, className }: MathBlockProps) {
  const html = useMemo(
    () =>
      katex.renderToString(tex, {
        displayMode: !inline,
        throwOnError: false,
        strict: 'ignore',
      }),
    [tex, inline],
  )

  return (
    <div
      data-interactive="true"
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
