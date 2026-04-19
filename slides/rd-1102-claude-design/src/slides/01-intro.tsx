import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp } from '../lib/animations'

export function Slide01Intro() {
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
      {/* Dot pattern background */}
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
          background: `linear-gradient(90deg, ${theme.colors.accent} 0%, rgba(201, 100, 66, 0.3) 100%)`,
          transformOrigin: 'left',
          zIndex: 2,
        }}
      />

      {/* Decorative circle top-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 360,
          height: 360,
          borderRadius: '50%',
          border: `1.5px solid ${theme.colors.borderAccent}`,
          opacity: 0.4,
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
          width: 240,
          height: 240,
          borderRadius: '50%',
          background: theme.colors.accentLight,
          opacity: 0.6,
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
        <motion.div
          variants={fadeInUp}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: theme.colors.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L10 6H14L11 9L12 13L8 11L4 13L5 9L2 6H6L8 2Z" fill="white" fillOpacity="0.9"/>
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
            Anthropic - 2025
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            color: theme.colors.text,
            marginBottom: 32,
            letterSpacing: '-0.02em',
          }}
        >
          Claude Design
          <br />
          <span style={{ color: theme.colors.accent }}>là gì?</span>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          style={{
            width: 52,
            height: 3,
            background: theme.colors.accent,
            borderRadius: 2,
            marginBottom: 32,
          }}
        />

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            lineHeight: 1.75,
            maxWidth: 580,
            marginBottom: 40,
          }}
        >
          Claude Design là hệ thống ngữ pháp thiết kế và bộ công cụ UI chính thức của Anthropic,
          được xây dựng để các nhà phát triển và nhà thiết kế có thể tạo ra sản phẩm tích hợp AI
          một cách nhất quán, đẹp mắt và dễ sử dụng.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          {['Hệ thống thiết kế', 'Component library', 'AI-native UX'].map((tag) => (
            <span
              key={tag}
              style={{
                padding: '6px 14px',
                borderRadius: 20,
                background: theme.colors.accentDim,
                color: theme.colors.accent,
                fontSize: theme.sizes.small,
                fontWeight: 600,
                letterSpacing: '0.03em',
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Large decorative text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          position: 'absolute',
          right: 60,
          bottom: 50,
          fontSize: 'clamp(6rem, 12vw, 10rem)',
          fontWeight: 800,
          color: 'rgba(201, 100, 66, 0.05)',
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        Design
      </motion.div>

      {/* Bottom label */}
      <div
        style={{
          position: 'absolute',
          bottom: 28,
          left: 90,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: theme.colors.accent,
            opacity: 0.7,
          }}
        />
        <span
          style={{
            fontSize: theme.sizes.label,
            color: theme.colors.textDim,
            letterSpacing: '0.1em',
            fontWeight: 500,
          }}
        >
          Slide 1 / 3
        </span>
      </div>
    </div>
  )
}
