import type { ReactNode } from 'react'

type SlideLayoutProps = {
  kicker?: string
  title: string
  subtitle?: string
  children: ReactNode
}

export function SlideLayout({ kicker, title, subtitle, children }: SlideLayoutProps) {
  return (
    <section className="slide-layout">
      <header className="slide-header">
        {kicker ? <p className="slide-kicker">{kicker}</p> : null}
        <h1 className="slide-title">{title}</h1>
        {subtitle ? <p className="slide-subtitle">{subtitle}</p> : null}
      </header>
      <div className="slide-body">{children}</div>
    </section>
  )
}

