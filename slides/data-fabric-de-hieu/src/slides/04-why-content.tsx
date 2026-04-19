import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, scaleIn } from '../lib/animations'

const locations = [
  { icon: '📊', label: 'trong file Excel' },
  { icon: '☁', label: 'trên cloud' },
  { icon: '🗄', label: 'trong cơ sở dữ liệu cũ' },
  { icon: '🏢', label: 'ở các phòng ban khác nhau' },
]

export function Slide04WhyContent() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: theme.backgrounds.default,
        fontFamily: theme.fonts.family,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 70px',
      }}
    >
      {/* Left accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: `linear-gradient(180deg, ${theme.colors.accent} 0%, ${theme.colors.accentAlt} 100%)`,
          transformOrigin: 'top',
        }}
      />

      <div style={{ display: 'flex', gap: 60, alignItems: 'stretch' }}>
        {/* Left column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ flex: '0 0 460px' }}
        >
          <motion.div variants={fadeInUp} style={{ marginBottom: 28 }}>
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
              Vấn đề
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
                fontWeight: 800,
                color: theme.colors.text,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Tại sao cần{' '}
              <span style={{ color: theme.colors.accent }}>Data Fabric?</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p
              style={{
                fontSize: theme.sizes.body,
                fontWeight: 600,
                color: theme.colors.text,
                marginBottom: 16,
              }}
            >
              Dữ liệu của bạn nằm rải rác khắp nơi:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {locations.map((loc, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '8px 14px',
                    background: theme.colors.bgCard,
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: 8,
                    boxShadow: theme.colors.shadow,
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{loc.icon}</span>
                  <span style={{ fontSize: theme.sizes.small, color: theme.colors.textMuted, fontWeight: 500 }}>
                    {loc.label}
                  </span>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: theme.sizes.small,
                color: '#DC2626',
                fontWeight: 600,
                fontStyle: 'italic',
              }}
            >
              Thường thì rất lộn xộn.
            </p>
            <p
              style={{
                fontSize: theme.sizes.small,
                color: theme.colors.textMuted,
                lineHeight: 1.65,
                marginTop: 10,
              }}
            >
              Mọi người mất thời gian tìm dữ liệu đúng, sao chép qua lại,
              và sửa cho lệch nhau.
            </p>
          </motion.div>
        </motion.div>

        {/* Right column - solution */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          style={{
            flex: 1,
            background: `linear-gradient(135deg, ${theme.colors.accent}10 0%, ${theme.colors.accentAlt}08 100%)`,
            border: `1.5px solid ${theme.colors.borderAccent}`,
            borderRadius: 16,
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 20,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: `linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.accentAlt})`,
            }}
          />
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: theme.colors.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div>
            <div
              style={{
                fontSize: theme.sizes.label,
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: theme.colors.accent,
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              Giải pháp
            </div>
            <p
              style={{
                fontSize: theme.sizes.body,
                color: theme.colors.text,
                lineHeight: 1.7,
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              Data fabric giống như một <em>smart layer</em> phủ lên các hệ thống đó.
            </p>
            <p
              style={{
                fontSize: theme.sizes.small,
                color: theme.colors.textMuted,
                lineHeight: 1.7,
              }}
            >
              Nó giúp kết nối, sắp xếp, và làm dữ liệu dễ tìm, dễ dùng hơn.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
