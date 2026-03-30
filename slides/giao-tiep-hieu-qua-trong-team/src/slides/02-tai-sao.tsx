import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, containerFast } from '../lib/animations'

const stats = [
  { value: '86%', label: 'that bai cua cac du an la do giao tiep kem' },
  { value: '4x', label: 'hieu suat khi team giao tiep tot hon' },
  { value: '#1', label: 'ky nang nha tuyen dung tim kiem o junior dev' },
]

export function Slide02TaiSao() {
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
        padding: '60px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: theme.backgrounds.grid,
          backgroundSize: '60px 60px',
          opacity: 0.8,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.label,
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Slide 02
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.heading,
            fontWeight: 800,
            color: theme.colors.text,
            marginBottom: 12,
          }}
        >
          Tai sao giao tiep <span style={{ color: theme.colors.accent }}>quan trong?</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: theme.sizes.body,
            color: theme.colors.textMuted,
            marginBottom: 48,
            maxWidth: 600,
            lineHeight: 1.6,
          }}
        >
          Ky nang ky thuat chi la mot phan - giao tiep la thu tao ra su khac biet giua nguoi binh thuong va nguoi xuat sac.
        </motion.p>

        <motion.div
          variants={containerFast}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={fadeInUp}
              style={{
                background: 'white',
                border: `1px solid ${theme.colors.border}`,
                borderTop: `3px solid ${theme.colors.accent}`,
                borderRadius: 12,
                padding: '28px 24px',
                boxShadow: '0 2px 12px rgba(37,99,235,0.06)',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 800,
                  color: theme.colors.accent,
                  marginBottom: 10,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: theme.sizes.small,
                  color: theme.colors.textMuted,
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: 36,
            padding: '16px 24px',
            background: theme.colors.accentDim,
            border: `1px solid ${theme.colors.borderAccent}`,
            borderRadius: 10,
            fontSize: theme.sizes.body,
            color: theme.colors.text,
            maxWidth: 700,
          }}
        >
          <strong style={{ color: theme.colors.accent }}>Key insight:</strong> Code tot nhung giao tiep kem = blocker cho ca team. Code trung binh nhung giao tiep tot = contributor gia tri.
        </motion.div>
      </motion.div>
    </div>
  )
}
