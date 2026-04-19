import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, slideFromLeft } from '../lib/animations'

const useCases = [
  {
    role: 'Developer',
    color: '#3B82F6',
    colorDim: 'rgba(59, 130, 246, 0.1)',
    points: [
      'Scaffold nhanh giao diện chat, prompt builder với component có sẵn',
      'Tích hợp Tailwind tokens để đảm bảo brand nhất quán mà không cần thiết kế từ đầu',
      'Sử dụng streaming UI pattern để hiển thị phản hồi Claude theo thời gian thực',
    ],
  },
  {
    role: 'Designer',
    color: '#8B5CF6',
    colorDim: 'rgba(139, 92, 246, 0.1)',
    points: [
      'Figma kit chính thức: kéo component, thay nội dung, xuất code có ngay',
      'Motion guideline giúp animate trạng thái đang nghĩ của AI một cách tự nhiên',
      'Accessibility checklist đảm bảo sản phẩm AI đến được với tất cả người dùng',
    ],
  },
  {
    role: 'Product team',
    color: theme.colors.accent,
    colorDim: theme.colors.accentDim,
    points: [
      'Giảm thời gian thiết kế-code gấp đôi nhờ dùng ngôn ngữ chung (shared tokens)',
      'A/B test nhanh hơn khi mọi thành viên dùng cùng một bộ công cụ',
      'Ra sản phẩm nhanh, nhất quán, dữ liệu UX tốt hơn để cải thiện',
    ],
  },
]

export function Slide03Applications() {
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

      {/* Bottom accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${theme.colors.accent} 0%, rgba(201, 100, 66, 0.2) 100%)`,
          transformOrigin: 'left',
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
        <motion.div variants={fadeInUp} style={{ marginBottom: 36 }}>
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
            Ứng dụng thực tế
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
            Claude Design mang lại gì
            <span style={{ color: theme.colors.accent }}> cho từng vai trò?</span>
          </h2>
        </motion.div>

        {/* Use cases */}
        <div style={{ display: 'flex', gap: 16 }}>
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              variants={slideFromLeft}
              style={{
                flex: 1,
                background: theme.colors.bgCard,
                border: `1.5px solid ${theme.colors.border}`,
                borderRadius: 14,
                padding: '22px 22px 24px',
                boxShadow: theme.colors.shadowCard,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Card top accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: uc.color,
                  borderRadius: '14px 14px 0 0',
                }}
              />

              {/* Role badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '4px 12px',
                  borderRadius: 20,
                  background: uc.colorDim,
                  color: uc.color,
                  fontSize: theme.sizes.small,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  marginBottom: 18,
                  marginTop: 4,
                }}
              >
                {uc.role}
              </div>

              {/* Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {uc.points.map((pt, j) => (
                  <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: uc.color,
                        flexShrink: 0,
                        marginTop: 6,
                      }}
                    />
                    <span
                      style={{
                        fontSize: theme.sizes.small,
                        color: theme.colors.textMuted,
                        lineHeight: 1.6,
                      }}
                    >
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA note */}
        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: 24,
            padding: '14px 20px',
            background: theme.colors.accentDim,
            borderRadius: 10,
            border: `1px solid ${theme.colors.borderAccent}`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: theme.colors.accent,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: theme.sizes.small,
              color: theme.colors.accent,
              fontWeight: 600,
            }}
          >
            Bắt đầu:
          </span>
          <span
            style={{
              fontSize: theme.sizes.small,
              color: theme.colors.textMuted,
            }}
          >
            docs.anthropic.com/design - tải Figma kit, đọc guideline, và tích hợp component vào dự án ngay hôm nay.
          </span>
        </motion.div>
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
          Slide 3 / 3
        </span>
      </div>
    </div>
  )
}
