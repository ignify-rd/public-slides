import React from 'react'
import { motion } from 'framer-motion'
import { fadeScale } from '../lib/animations'
import { T } from '../lib/theme'

const KW =
  /\b(class|new|return|if|else|interface|implements|extends|const|let|var|function|async|await|import|from|export|this|private|public|static|throw|try|catch|type|readonly|void|for|of|while|switch|case|break|default|null|undefined|true|false|super|get|set)\b/

const TOKEN = new RegExp(`(\\/\\/.*$)|('[^']*'|"[^"]*"|\`[^\`]*\`)|(${KW.source})`, 'gm')

function renderLine(line: string, key: number) {
  const out: React.ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  TOKEN.lastIndex = 0
  while ((m = TOKEN.exec(line))) {
    if (m.index > last) out.push(line.slice(last, m.index))
    if (m[1]) out.push(<span key={out.length} style={{ color: '#5d6675', fontStyle: 'italic' }}>{m[1]}</span>)
    else if (m[2]) out.push(<span key={out.length} style={{ color: T.ok }}>{m[2]}</span>)
    else out.push(<span key={out.length} style={{ color: T.accentBright, fontWeight: 500 }}>{m[0]}</span>)
    last = m.index + m[0].length
  }
  if (last < line.length) out.push(line.slice(last))
  return <React.Fragment key={key}>{out.length ? out : ' '}</React.Fragment>
}

export function CodeBlock({
  code,
  fs = 13,
  title,
  highlights = [],
  bad = [],
  width,
  style,
}: {
  code: string
  fs?: number
  title?: string
  highlights?: number[]
  bad?: number[]
  width?: number | string
  style?: React.CSSProperties
}) {
  const lines = code.replace(/^\n/, '').trimEnd().split('\n')
  return (
    <motion.div
      variants={fadeScale}
      style={{
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 12,
        background: 'rgba(8,9,12,0.72)',
        overflow: 'hidden',
        width,
        ...style,
      }}
    >
      {title && (
        <div
          style={{
            padding: '9px 18px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            fontFamily: T.mono,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: T.muted,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: T.accent, display: 'inline-block' }} />
          {title}
        </div>
      )}
      <pre
        style={{
          margin: 0,
          padding: '14px 0',
          fontFamily: T.mono,
          fontSize: fs,
          lineHeight: 1.6,
          color: 'rgba(242,245,250,0.88)',
          overflow: 'hidden',
        }}
      >
        {lines.map((l, i) => {
          const hi = highlights.includes(i)
          const isBad = bad.includes(i)
          return (
            <div
              key={i}
              style={{
                padding: '0 18px',
                background: hi ? 'rgba(67,97,238,0.14)' : isBad ? 'rgba(255,82,82,0.12)' : undefined,
                borderLeft: hi
                  ? `3px solid ${T.accent}`
                  : isBad
                    ? `3px solid ${T.danger}`
                    : '3px solid transparent',
              }}
            >
              {renderLine(l, i)}
            </div>
          )
        })}
      </pre>
    </motion.div>
  )
}
