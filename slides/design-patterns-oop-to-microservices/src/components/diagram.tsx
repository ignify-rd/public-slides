import React, { useId } from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { T } from '../lib/theme'
import { REDUCED } from '../lib/animations'

export interface Pt {
  x: number
  y: number
}

export interface WireDef {
  pts: Pt[]
  dashed?: boolean
  color?: string
  width?: number
  arrow?: boolean
  opacity?: number
}

/* ------------------------------------------------------------------ */
/* Canvas: relative stage; SVG wire layer under absolute-positioned nodes */
export function FlowCanvas({
  w,
  h,
  wires = [],
  children,
  style,
}: {
  w: number
  h: number
  wires?: WireDef[]
  children?: React.ReactNode
  style?: React.CSSProperties
}) {
  const mid = useId().replace(/:/g, '')
  return (
    <div style={{ position: 'relative', width: w, height: h, flexShrink: 0, ...style }}>
      <svg width={w} height={h} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <defs>
          <marker
            id={`arr-${mid}`}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 9 5 L 0 9" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.6" />
          </marker>
        </defs>
        {wires.map((wire, i) => (
          <path
            key={i}
            d={wire.pts.map((p, j) => `${j === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}
            fill="none"
            stroke={wire.color ?? 'rgba(255,255,255,0.13)'}
            strokeWidth={wire.width ?? 2}
            strokeDasharray={wire.dashed ? '5 8' : undefined}
            strokeLinejoin="round"
            opacity={wire.opacity ?? 1}
            markerEnd={wire.arrow ? `url(#arr-${mid})` : undefined}
          />
        ))}
      </svg>
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
const TONES = {
  default: { border: 'rgba(255,255,255,0.16)', bg: 'rgba(255,255,255,0.04)', text: T.ink },
  accent: { border: 'rgba(109,140,255,0.75)', bg: 'rgba(67,97,238,0.16)', text: T.ink },
  ok: { border: 'rgba(46,194,126,0.7)', bg: 'rgba(46,194,126,0.12)', text: T.ink },
  danger: { border: 'rgba(255,82,82,0.75)', bg: 'rgba(255,82,82,0.13)', text: T.ink },
  warn: { border: 'rgba(240,168,50,0.7)', bg: 'rgba(240,168,50,0.12)', text: T.ink },
} as const

export type Tone = keyof typeof TONES

const GLOW: Record<Tone, string> = {
  default: '0 0 22px rgba(255,255,255,0.16)',
  accent: '0 0 26px rgba(67,97,238,0.55)',
  ok: '0 0 26px rgba(46,194,126,0.45)',
  danger: '0 0 26px rgba(255,82,82,0.5)',
  warn: '0 0 26px rgba(240,168,50,0.45)',
}

/* Node: absolute box on the canvas. `active` lights it up, `dimmed` fades it. */
export function FNode({
  x,
  y,
  w,
  h,
  label,
  sub,
  icon: Icon,
  tone = 'default',
  active = false,
  dimmed = false,
  children,
  style,
}: {
  x: number
  y: number
  w: number
  h: number
  label?: React.ReactNode
  sub?: React.ReactNode
  icon?: LucideIcon
  tone?: Tone
  active?: boolean
  dimmed?: boolean
  children?: React.ReactNode
  style?: React.CSSProperties
}) {
  const t = TONES[tone]
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: dimmed ? 0.28 : 1,
        boxShadow: active ? GLOW[tone] : '0 0 0 rgba(0,0,0,0)',
        scale: active && !REDUCED ? 1.03 : 1,
      }}
      transition={{ duration: 0.35 }}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        height: h,
        borderRadius: 10,
        border: `1px solid ${t.border}`,
        background: t.bg,
        color: t.text,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        padding: '6px 10px',
        textAlign: 'center',
        ...style,
      }}
    >
      {Icon && <Icon size={Math.min(22, h * 0.32)} strokeWidth={1.8} style={{ opacity: 0.9 }} />}
      {label && (
        <div style={{ fontSize: 14.5, fontWeight: 700, lineHeight: 1.15 }}>{label}</div>
      )}
      {sub && (
        <div style={{ fontSize: 11, color: T.muted, lineHeight: 1.2, fontFamily: T.mono }}>
          {sub}
        </div>
      )}
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Packet: a data dot travelling along waypoints, looping forever. */
export function Packet({
  pts,
  dur,
  delay = 0,
  repeatDelay = 0,
  color = T.accentBright,
  size = 13,
  label,
  square = false,
  visible = true,
}: {
  pts: Pt[]
  dur: number
  delay?: number
  repeatDelay?: number
  color?: string
  size?: number
  label?: string
  square?: boolean
  visible?: boolean
}) {
  if (REDUCED || !visible || pts.length < 2) return null
  // distance-proportional keyframe times, with a fade in/out margin
  const dists: number[] = [0]
  for (let i = 1; i < pts.length; i++) {
    dists.push(dists[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y))
  }
  const total = dists[dists.length - 1] || 1
  const inner = dists.map((d) => 0.05 + (d / total) * 0.88)
  const xs = [pts[0].x, ...pts.map((p) => p.x), pts[pts.length - 1].x]
  const ys = [pts[0].y, ...pts.map((p) => p.y), pts[pts.length - 1].y]
  const times = [0, ...inner, 1]
  const op = times.map((_, i) => (i === 0 || i === times.length - 1 ? 0 : 1))
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: xs.map((v) => v - size / 2), y: ys.map((v) => v - size / 2), opacity: op }}
      transition={{ duration: dur, times, delay, repeat: Infinity, repeatDelay, ease: 'linear' }}
      style={{ position: 'absolute', left: 0, top: 0, zIndex: 5, pointerEvents: 'none' }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: square ? 3 : '50%',
          background: color,
          boxShadow: `0 0 12px ${color}`,
        }}
      />
      {label && (
        <div
          style={{
            position: 'absolute',
            left: size / 2,
            top: -(size + 8),
            transform: 'translateX(-50%)',
            fontFamily: T.mono,
            fontSize: 10.5,
            fontWeight: 700,
            color,
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </div>
      )}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Pulse: expanding ring for "an event happened here" emphasis. */
export function Pulse({
  x,
  y,
  color = T.accentBright,
  size = 46,
  visible = true,
}: {
  x: number
  y: number
  color?: string
  size?: number
  visible?: boolean
}) {
  if (REDUCED || !visible) return null
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ scale: [0.35, 1.5], opacity: [0.65, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        borderRadius: '50%',
        border: `2px solid ${color}`,
        pointerEvents: 'none',
      }}
    />
  )
}

/* ------------------------------------------------------------------ */
/* Small mono status chip, used as legends / state labels on diagrams. */
export function Chip({
  x,
  y,
  text,
  tone = 'default',
  visible = true,
}: {
  x: number
  y: number
  text: string
  tone?: Tone
  visible?: boolean
}) {
  const t = TONES[tone]
  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: 'translateX(-50%)',
        border: `1px solid ${t.border}`,
        background: 'rgba(10,10,12,0.85)',
        color: tone === 'default' ? T.muted : t.border,
        borderRadius: 999,
        padding: '4px 14px',
        fontFamily: T.mono,
        fontSize: 11,
        fontWeight: 700,
        whiteSpace: 'nowrap',
        zIndex: 6,
      }}
    >
      {text}
    </motion.div>
  )
}
