import { motion } from 'framer-motion'
import { container, item, EASE, REDUCED } from '../lib/animations'
import { T, clamp } from '../lib/theme'
import { FlowCanvas, FNode, Packet } from '../components/diagram'
import type { SlideProps } from './types'

export default function S01Title(_: SlideProps) {
  return (
    <div className="slide-bg slide-grid" style={{ width: 1280, height: 720, display: 'flex', overflow: 'hidden' }}>
      {/* left: title stack */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: '1 1 60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 48px 0 84px',
        }}
      >
        <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
          <div style={{ width: 44, height: 4, background: T.accent }} />
          <span
            style={{
              fontFamily: T.mono,
              fontSize: clamp('0.68rem', '1vw', '0.82rem'),
              fontWeight: 700,
              letterSpacing: '0.26em',
              color: T.accentBright,
            }}
          >
            SEMINAR · KỸ THUẬT PHẦN MỀM
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          style={{
            margin: 0,
            fontSize: clamp('3rem', '6.4vw', '5rem'),
            fontWeight: 800,
            lineHeight: 0.98,
            letterSpacing: '-0.035em',
          }}
        >
          DESIGN
          <br />
          PATTERNS
        </motion.h1>

        <motion.p
          variants={item}
          style={{
            margin: '26px 0 0',
            fontSize: clamp('1rem', '1.8vw', '1.35rem'),
            fontWeight: 500,
            color: 'rgba(242,245,250,0.85)',
            lineHeight: 1.45,
            maxWidth: 480,
          }}
        >
          Từ OOP truyền thống đến kiến trúc{' '}
          <span style={{ color: T.accentBright, fontWeight: 700 }}>Microservices</span>
        </motion.p>

        <motion.div
          variants={item}
          style={{
            marginTop: 46,
            display: 'flex',
            gap: 26,
            fontFamily: T.mono,
            fontSize: 12.5,
            color: T.muted,
          }}
        >
          <span>145 PHÚT</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span>7 PHẦN</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span>07 / 2026</span>
        </motion.div>
      </motion.div>

      {/* right: live pattern motif on accent edge */}
      <motion.div
        initial={REDUCED ? { opacity: 0 } : { opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        style={{
          flex: '1 1 40%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderLeft: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 6, background: T.accent }} />
        <FlowCanvas
          w={400}
          h={430}
          wires={[
            { pts: [{ x: 60, y: 60 }, { x: 60, y: 215 }, { x: 140, y: 215 }], arrow: true },
            { pts: [{ x: 60, y: 370 }, { x: 60, y: 215 }] },
            { pts: [{ x: 260, y: 215 }, { x: 340, y: 215 }, { x: 340, y: 90 }], arrow: true },
            { pts: [{ x: 340, y: 215 }, { x: 340, y: 340 }], arrow: true },
          ]}
        >
          <FNode x={20} y={30} w={80} h={60} label="⌘" tone="default" sub="problem" />
          <FNode x={20} y={340} w={80} h={60} label="⌘" tone="default" sub="problem" />
          <FNode x={140} y={178} w={120} h={74} label="PATTERN" tone="accent" active sub="template" />
          <FNode x={300} y={60} w={80} h={60} label="✓" tone="ok" sub="solution" />
          <FNode x={300} y={310} w={80} h={60} label="✓" tone="ok" sub="solution" />
          <Packet pts={[{ x: 60, y: 60 }, { x: 60, y: 215 }, { x: 140, y: 215 }]} dur={2.2} repeatDelay={2.4} />
          <Packet pts={[{ x: 60, y: 370 }, { x: 60, y: 215 }, { x: 140, y: 215 }]} dur={2.2} delay={1.1} repeatDelay={2.4} />
          <Packet
            pts={[{ x: 260, y: 215 }, { x: 340, y: 215 }, { x: 340, y: 90 }]}
            dur={2}
            delay={2.3}
            repeatDelay={2.6}
            color={T.ok}
          />
          <Packet
            pts={[{ x: 260, y: 215 }, { x: 340, y: 215 }, { x: 340, y: 340 }]}
            dur={2}
            delay={3.4}
            repeatDelay={2.6}
            color={T.ok}
          />
        </FlowCanvas>
      </motion.div>
    </div>
  )
}
