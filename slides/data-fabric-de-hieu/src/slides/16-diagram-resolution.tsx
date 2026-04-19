import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, scaleIn, fadeInUp } from '../lib/animations'

const resolutions = [
  {
    problem: 'Du lieu mai thuan',
    before: 'Sales: 15M, Ke toan: 18M',
    after: 'Fabric chuan hoa: gross = 18M, net = 15M',
    solution: 'Business Rules Engine',
    color: '#DC2626',
  },
  {
    problem: 'Du lieu tre do',
    before: 'Bao cao dung du lieu tuan truoc',
    after: 'Truy cap real-time tu nguon goc',
    solution: 'Data Virtualization',
    color: '#D97706',
  },
  {
    problem: 'Truy cap sai pham',
    before: 'Moi nguoi xem duoc tat ca',
    after: 'Phan quyen theo vai tro (RBAC)',
    solution: 'Data Governance Layer',
    color: '#7C3AED',
  },
  {
    problem: 'Khong biet nguon goc',
    before: 'Con so tu dau ra khong ro',
    after: 'Truy vet duoc toan bo hanh trinh du lieu',
    solution: 'Data Lineage Tracking',
    color: '#0EA5E9',
  },
]

export function Slide16DiagramResolution() {
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
        padding: '32px 60px',
      }}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        style={{ marginBottom: 24 }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
            fontWeight: 800,
            color: theme.colors.text,
            letterSpacing: '-0.02em',
          }}
        >
          Data Fabric giai quyet nhu the nao?
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
      >
        {resolutions.map((res, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr 36px 1fr',
              gap: 12,
              alignItems: 'center',
              background: theme.colors.bgCard,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 10,
              padding: '12px 16px',
              boxShadow: theme.colors.shadow,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: res.color,
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: res.color }}>{res.problem}</span>
            </div>
            <div
              style={{
                padding: '6px 10px',
                background: '#FEF2F2',
                borderRadius: 6,
                fontSize: '0.65rem',
                color: '#DC2626',
                lineHeight: 1.4,
              }}
            >
              <span style={{ fontWeight: 600 }}>Truoc: </span>{res.before}
            </div>
            <div style={{ textAlign: 'center', color: theme.colors.accentGreen, fontWeight: 700 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <div
              style={{
                padding: '6px 10px',
                background: '#F0FDF4',
                borderRadius: 6,
                fontSize: '0.65rem',
                color: theme.colors.accentGreen,
                lineHeight: 1.4,
              }}
            >
              <span style={{ fontWeight: 600 }}>Sau: </span>{res.after}
              <div style={{ marginTop: 4, color: theme.colors.accent, fontWeight: 600 }}>
                via {res.solution}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
