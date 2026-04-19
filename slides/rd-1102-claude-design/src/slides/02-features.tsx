import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, scaleIn } from '../lib/animations'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Component system nhất quán',
    desc: 'Bộ thư viện React component được thiết kế sẵn với Tailwind CSS - kéo vào là dùng, không cần viết lại từ đầu.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'AI-native interaction patterns',
    desc: 'Các pattern UX đặc biệt dành cho trường hợp sử dụng AI: loading trạng thái suy nghĩ, streaming văn bản, phản hồi step-by-step.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Token & typography system',
    desc: 'Hệ thống design token đầy đủ: màu sắc, khoảng cách, bộ chữ, bộ góc - đảm bảo brand identity xuyên suốt mọi sản phẩm.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    title: 'Figma + code đồng bộ',
    desc: 'File Figma chính thức kết nối trực tiếp với code, giảm thiểu khoảng cách giữa thiết kế và lập trình.',
  },
]

export function Slide02Features() {
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
        position: 'relative',
        overflow: 'hidden',
        padding: '0 70px',
      }}
    >
      {/* Dot pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: theme.backgrounds.dots,
          backgroundSize: '24px 24px',
          opacity: 0.4,
        }}
      />

      {/* Left accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: `linear-gradient(180deg, ${theme.colors.accent} 0%, rgba(201, 100, 66, 0.2) 100%)`,
          transformOrigin: 'top',
          zIndex: 2,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} style={{ marginBottom: 40 }}>
          <div
            style={{
              fontSize: theme.sizes.label,
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: theme.colors.accent,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Tính năng nổi bật
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: theme.colors.text,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            4 thành phần cốt lõi
            <span style={{ color: theme.colors.accent }}> của Claude Design</span>
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              style={{
                background: theme.colors.bgCard,
                border: `1.5px solid ${theme.colors.border}`,
                borderRadius: 12,
                padding: '20px 24px',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
                boxShadow: theme.colors.shadowCard,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Card accent top border */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${theme.colors.accent} 0%, transparent 70%)`,
                  opacity: i % 2 === 0 ? 1 : 0.5,
                }}
              />
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: theme.colors.accentDim,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.colors.accent,
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: theme.sizes.body,
                    fontWeight: 700,
                    color: theme.colors.text,
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {f.title}
                </div>
                <div
                  style={{
                    fontSize: theme.sizes.small,
                    color: theme.colors.textMuted,
                    lineHeight: 1.6,
                  }}
                >
                  {f.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
          Slide 2 / 3
        </span>
      </div>
    </div>
  )
}
