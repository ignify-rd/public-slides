import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { container } from '../lib/animations'

type SlideLayoutProps = {
  children: ReactNode
  /** terminal path shown top-left, e.g. "~/pipeline/harness" */
  path?: string
  /** small index label top-right, e.g. "08 / 22" */
  badge?: string
  className?: string
  /** override default padding */
  pad?: number
}

/**
 * Every slide is authored inside the fixed 1280x720 stage.
 * SlideLayout paints a subtle terminal chrome and orchestrates the
 * staggered entrance of its children via the shared `container` variant.
 */
export function SlideLayout({
  children,
  path = '~',
  badge,
  className = '',
  pad = 72,
}: SlideLayoutProps) {
  return (
    <div className="w-full h-full relative flex flex-col">
      {/* top chrome bar */}
      <div
        className="flex items-center justify-between shrink-0"
        style={{ padding: '14px 24px', borderBottom: '1px solid var(--line)' }}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#f85149' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#d29922' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#39d353' }} />
          </div>
          <span
            style={{ fontSize: '0.72rem', color: 'var(--text-faint)', letterSpacing: '0.05em' }}
          >
            agent@harness:
            <span style={{ color: 'var(--cyan)' }}>{path}</span>
            <span style={{ color: 'var(--text-faint)' }}>$</span>
          </span>
        </div>
        {badge && (
          <span
            className="tag-mono"
            style={{ color: 'var(--text-faint)', letterSpacing: '0.2em' }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* body */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`flex-1 min-h-0 flex flex-col ${className}`}
        style={{ padding: pad }}
      >
        {children}
      </motion.div>
    </div>
  )
}
