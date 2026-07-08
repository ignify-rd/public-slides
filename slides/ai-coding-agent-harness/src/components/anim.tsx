import { useEffect, useState } from 'react'

/**
 * Reveal N items one-by-one như terminal đang "in" từng dòng.
 * Trả về số dòng đã hiện. Chạy lại mỗi khi slide remount (AnimatePresence key).
 */
export function useReveal(
  count: number,
  { delay = 520, step = 130 }: { delay?: number; step?: number } = {},
) {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    setShown(0)
    let n = 0
    let interval: ReturnType<typeof setInterval> | undefined
    const begin = setTimeout(() => {
      interval = setInterval(() => {
        n += 1
        setShown(n)
        if (n >= count && interval) clearInterval(interval)
      }, step)
    }, delay)
    return () => {
      clearTimeout(begin)
      if (interval) clearInterval(interval)
    }
  }, [count, delay, step])

  return shown
}

/** Số đếm tăng dần (count-up) với easing, chạy 1 lần lúc mount. */
export function CountUp({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1100,
  delay = 500,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  delay?: number
}) {
  const [v, setV] = useState(0)

  useEffect(() => {
    let raf = 0
    let startTs: number | null = null
    const begin = setTimeout(() => {
      const tick = (ts: number) => {
        if (startTs === null) startTs = ts
        const p = Math.min(1, (ts - startTs) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setV(value * eased)
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(begin)
      cancelAnimationFrame(raf)
    }
  }, [value, duration, delay])

  return (
    <>
      {prefix}
      {v.toFixed(decimals)}
      {suffix}
    </>
  )
}

/** Thanh progress mọc dần tới `pct` (0–100). */
export function ProgressBar({
  pct,
  delay = 600,
  duration = 1.1,
  height = 6,
}: {
  pct: number
  delay?: number
  duration?: number
  height?: number
}) {
  const [w, setW] = useState(0)
  useEffect(() => {
    setW(0)
    const id = setTimeout(() => setW(pct), delay)
    return () => clearTimeout(id)
  }, [pct, delay])
  return (
    <div
      style={{
        width: '100%',
        height,
        background: 'rgba(255,255,255,0.06)',
        overflow: 'hidden',
        borderRadius: 2,
      }}
    >
      <div
        style={{
          width: `${w}%`,
          height: '100%',
          background: 'var(--green)',
          boxShadow: '0 0 10px rgba(57,211,83,0.7)',
          transition: `width ${duration}s cubic-bezier(0.25,0.1,0.25,1)`,
        }}
      />
    </div>
  )
}
