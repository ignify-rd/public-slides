import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, scaleIn } from '../lib/animations'

const silos = [
  { label: 'Excel Files', icon: '📊', color: '#059669' },
  { label: 'Cloud Storage', icon: '☁', color: '#0EA5E9' },
  { label: 'SQL Database', icon: '🗄', color: '#7C3AED' },
  { label: 'SaaS Apps', icon: '🔧', color: '#D97706' },
  { label: 'API Services', icon: '🔌', color: '#DC2626' },
]

export function Slide03DiagramSilos() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.alt,
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 70px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: 'center',
          marginBottom: 48,
        }}
      >
        <div
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          Thực trạng hiện tại
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 800,
            color: theme.colors.text,
            letterSpacing: '-0.02em',
          }}
        >
          Dữ liệu phân tán - không kết nối
        </h2>
      </motion.div>

      {/* Silos visualization */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          gap: 24,
          alignItems: 'flex-end',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {silos.map((silo, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 100,
                height: 120 + i * 10,
                background: `${silo.color}18`,
                border: `2px solid ${silo.color}40`,
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: `${30 + i * 8}%`,
                  background: `${silo.color}22`,
                  borderTop: `1px solid ${silo.color}30`,
                }}
              />
              <span style={{ fontSize: '2rem' }}>{silo.icon}</span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  color: silo.color,
                  textAlign: 'center',
                  padding: '0 8px',
                  letterSpacing: '0.02em',
                }}
              >
                {silo.label}
              </span>
            </div>
            {/* Disconnected indicator */}
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#EF4444',
                opacity: 0.7,
              }}
            />
          </motion.div>
        ))}

        {/* No connection lines - showing disconnection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            position: 'absolute',
            bottom: -40,
            fontSize: theme.sizes.small,
            color: '#EF4444',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Không "nói chuyện" được với nhau
        </motion.div>
      </motion.div>
    </div>
  )
}
