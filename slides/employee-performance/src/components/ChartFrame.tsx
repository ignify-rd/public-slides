import type { ReactNode } from 'react'

type ChartFrameProps = {
  title: string
  note?: string
  children: ReactNode
}

export function ChartFrame({ title, note, children }: ChartFrameProps) {
  return (
    <div
      data-interactive="true"
      className="surface-panel"
      style={{ height: '100%', padding: '24px 28px', display: 'grid', gap: '18px' }}
    >
      <div style={{ display: 'grid', gap: '8px' }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(1.15rem, 1.9vw, 1.7rem)', fontFamily: 'var(--font-display)' }}>
          {title}
        </h2>
        {note ? <p className="text-small">{note}</p> : null}
      </div>
      <div style={{ minHeight: 0 }}>{children}</div>
    </div>
  )
}

