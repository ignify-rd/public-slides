import { motion } from 'framer-motion'
import { SlideLayout } from './SlideLayout'
import { Tag, item } from './primitives'

export type ToolData = {
  name: string
  tagline: string
  layer: string // pipeline layer
  what: string
  points: string[]
  snippet: { title: string; lines: { t?: string; c?: string }[] }
  url: string
  badge: string
  note?: string
}

/** color per line comment vs command */
export function ToolSlide(d: ToolData) {
  return (
    <SlideLayout path="~/harness/tools" badge={d.badge}>
      <div className="grid flex-1 min-h-0" style={{ gridTemplateColumns: '1.05fr 0.95fr', gap: 48 }}>
        {/* left */}
        <div className="flex flex-col justify-center">
          <Tag>Lớp: {d.layer}</Tag>
          <motion.h2
            variants={item}
            className="glow-text"
            style={{
              fontSize: 'clamp(1.7rem, 3.4vw, 2.8rem)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginTop: 12,
              lineHeight: 1.02,
            }}
          >
            {d.name}
          </motion.h2>
          <motion.p
            variants={item}
            style={{ fontSize: 'var(--subtitle-size)', color: 'var(--green)', marginTop: 8 }}
          >
            {d.tagline}
          </motion.p>
          <motion.p
            variants={item}
            style={{ fontSize: 'var(--body-size)', color: 'var(--text-dim)', marginTop: 18, lineHeight: 1.6, maxWidth: '48ch' }}
          >
            {d.what}
          </motion.p>

          <div className="flex flex-col" style={{ gap: 9, marginTop: 20 }}>
            {d.points.map((p, i) => (
              <motion.div key={i} variants={item} className="flex items-start gap-3">
                <span style={{ color: 'var(--green-dim)', fontSize: '0.78rem', marginTop: 2 }}>▸</span>
                <span style={{ fontSize: 'var(--body-size)', color: 'var(--text-dim)', lineHeight: 1.5 }}>{p}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            variants={item}
            href={d.url}
            target="_blank"
            rel="noreferrer"
            data-interactive
            style={{
              marginTop: 22,
              fontSize: '0.72rem',
              color: 'var(--cyan)',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
              letterSpacing: '0.03em',
            }}
          >
            → {d.url}
          </motion.a>
        </div>

        {/* right: terminal snippet */}
        <motion.div
          variants={item}
          className="flex flex-col self-center"
          style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'var(--bg-2)' }}
        >
          <div
            className="flex items-center gap-2"
            style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: '#f85149' }} />
            <span className="w-2 h-2 rounded-full" style={{ background: '#d29922' }} />
            <span className="w-2 h-2 rounded-full" style={{ background: '#39d353' }} />
            <span style={{ fontSize: '0.6rem', color: 'var(--text-faint)', marginLeft: 6 }}>{d.snippet.title}</span>
          </div>
          <div style={{ padding: '18px 18px', fontSize: '0.72rem', lineHeight: 1.85 }}>
            {d.snippet.lines.map((l, i) => (
              <div key={i} style={{ whiteSpace: 'pre-wrap', minHeight: '1.2em' }}>
                {l.c !== undefined ? (
                  <span style={{ color: 'var(--text-faint)' }}>{l.c || ' '}</span>
                ) : (
                  <>
                    <span style={{ color: 'var(--green-dim)' }}>$ </span>
                    <span style={{ color: 'var(--text)' }}>{l.t}</span>
                  </>
                )}
              </div>
            ))}
          </div>
          {d.note && (
            <div
              style={{
                padding: '10px 18px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                fontSize: '0.62rem',
                color: 'var(--amber)',
                lineHeight: 1.5,
              }}
            >
              ⚠ {d.note}
            </div>
          )}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
