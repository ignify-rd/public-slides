import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide01Title() {
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
      }}
    >
      {/* Dot pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: theme.backgrounds.dots,
          backgroundSize: '24px 24px',
          opacity: 0.5,
        }}
      />

      {/* Top accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${theme.colors.accent} 0%, ${theme.colors.accentAlt} 100%)`,
          transformOrigin: 'left',
          zIndex: 2,
        }}
      />

      {/* Decorative circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: '50%',
          border: `1.5px solid ${theme.colors.borderAccent}`,
          opacity: 0.35,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          position: 'absolute',
          top: -20,
          right: -20,
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: theme.colors.accentLight,
          opacity: 0.7,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 90,
          paddingRight: 90,
          position: 'relative',
          zIndex: 1,
          maxWidth: 820,
        }}
      >
        {/* Label */}
        <motion.div
          variants={fadeInUp}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: theme.colors.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3"/>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
            </svg>
          </div>
          <span
            style={{
              fontSize: theme.sizes.label,
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: theme.colors.accent,
              textTransform: 'uppercase',
            }}
          >
            Skymap Hightech
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            color: theme.colors.text,
            marginBottom: 24,
            letterSpacing: '-0.025em',
          }}
        >
          Data
          <br />
          <span style={{ color: theme.colors.accent }}>Fabric</span>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 32,
            padding: '8px 16px',
            background: `linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.accentAlt})`,
            borderRadius: 6,
            width: 'fit-content',
          }}
        >
          <span style={{ color: 'white', fontSize: theme.sizes.body, fontWeight: 600 }}>
            Dễ hiểu - Thực tế - Ứng dụng ngay
          </span>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.small,
            color: theme.colors.textDim,
            lineHeight: 1.7,
            maxWidth: 540,
            fontStyle: 'italic',
          }}
        >
          Tài liệu này thuộc phạm vi lưu hành nội bộ và không được phép sao chép,
          cung cấp, tiết lộ hoặc chia sẻ cho bất kỳ bên thứ ba nào ngoài tổ chức,
          trừ trường hợp đã được cấp phép trước bằng văn bản.
        </motion.p>
      </motion.div>

      {/* Large decorative text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          position: 'absolute',
          right: 60,
          bottom: 60,
          fontSize: 'clamp(5rem, 10vw, 9rem)',
          fontWeight: 800,
          color: 'rgba(29, 78, 216, 0.04)',
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        DATA
      </motion.div>
    </div>
  )
}
