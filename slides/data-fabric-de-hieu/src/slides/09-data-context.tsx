import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, scaleIn } from '../lib/animations'

export function Slide09DataContext() {
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
        padding: '40px 70px',
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeInUp} style={{ marginBottom: 40, textAlign: 'center' }}>
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
            Diem manh nhất
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Diem "dat" nhat cua Data Fabric:
            <br />
            <span style={{ color: theme.colors.accent }}>Data</span>
            {' -> '}
            <span style={{ color: theme.colors.accentGreen }}>Context</span>
          </h2>
        </motion.div>

        {/* Flow diagram */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          {[
            {
              label: 'Raw Data',
              sublabel: 'Du lieu tho',
              icon: '📦',
              bg: theme.colors.accentDim,
              border: theme.colors.borderAccent,
              textColor: theme.colors.accent,
            },
            null,
            {
              label: 'Metadata',
              sublabel: 'Sieu du lieu',
              icon: '🏷',
              bg: '#FEF3C720',
              border: '#D97706',
              textColor: '#D97706',
            },
            null,
            {
              label: 'Knowledge Graph',
              sublabel: 'Do thi tri thuc',
              icon: '🕸',
              bg: '#F0FDF430',
              border: theme.colors.accentGreen,
              textColor: theme.colors.accentGreen,
            },
            null,
            {
              label: 'Context',
              sublabel: 'Ngu canh / Y nghia',
              icon: '💡',
              bg: '#F0F9FF30',
              border: theme.colors.accentAlt,
              textColor: theme.colors.accentAlt,
              highlight: true,
            },
          ].map((item, i) =>
            item === null ? (
              <motion.div
                key={i}
                variants={scaleIn}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: theme.colors.textDim,
                  fontSize: '1.4rem',
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key={i}
                variants={scaleIn}
                style={{
                  flex: 1,
                  background: item.highlight
                    ? `linear-gradient(135deg, ${theme.colors.accent}15, ${theme.colors.accentAlt}15)`
                    : item.bg,
                  border: `2px solid ${item.border}`,
                  borderRadius: 14,
                  padding: '20px 16px',
                  textAlign: 'center',
                  boxShadow: item.highlight
                    ? `0 4px 20px ${theme.colors.accent}20`
                    : theme.colors.shadow,
                  transform: item.highlight ? 'scale(1.04)' : 'none',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: 10 }}>{item.icon}</div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: item.textColor,
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: '0.65rem',
                    color: theme.colors.textMuted,
                    fontStyle: 'italic',
                  }}
                >
                  {item.sublabel}
                </div>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: 36,
            padding: '16px 24px',
            background: theme.colors.accentDim,
            borderRadius: 10,
            textAlign: 'center',
            border: `1px solid ${theme.colors.borderAccent}`,
          }}
        >
          <p
            style={{
              fontSize: theme.sizes.small,
              color: theme.colors.accent,
              fontWeight: 600,
              lineHeight: 1.6,
            }}
          >
            Data Fabric khong chi luu tru du lieu - no hieu du lieu do co y nghia gi,
            lien quan den cai gi, va co the su dung nhu the nao.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
