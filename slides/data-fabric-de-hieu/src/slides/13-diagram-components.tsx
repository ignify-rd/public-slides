import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, scaleIn, fadeInUp } from '../lib/animations'

const components = [
  {
    icon: '🔮',
    title: 'Data Virtualization',
    desc: 'Truy cap du lieu tai nguon goc, khong can sao chep vat ly',
    color: theme.colors.accent,
  },
  {
    icon: '🏷',
    title: 'Metadata Management',
    desc: 'Quan ly sieu du lieu, phan loai va tag tu dong bang AI',
    color: '#7C3AED',
  },
  {
    icon: '🔗',
    title: 'Data Lineage',
    desc: 'Truy vet nguon goc du lieu: den tu dau, qua nhung buoc nao',
    color: theme.colors.accentAlt,
  },
  {
    icon: '🛡',
    title: 'Data Governance',
    desc: 'Chinh sach truy cap, bao mat, va tuan thu quy dinh phap ly',
    color: '#059669',
  },
  {
    icon: '🤖',
    title: 'AI/ML Orchestration',
    desc: 'Ket hop AI de tu dong hoa cac quy trinh quan ly du lieu',
    color: '#D97706',
  },
  {
    icon: '📡',
    title: 'Real-time Integration',
    desc: 'Dong bo du lieu theo thoi gian thuc tu nhieu nguon',
    color: '#DC2626',
  },
]

export function Slide13DiagramComponents() {
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
        style={{ textAlign: 'center', marginBottom: 32 }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
            fontWeight: 800,
            color: theme.colors.text,
            letterSpacing: '-0.02em',
          }}
        >
          Cac thanh phan cot loi cua Data Fabric
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}
      >
        {components.map((comp, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            style={{
              background: theme.colors.bgCard,
              border: `1.5px solid ${theme.colors.border}`,
              borderRadius: 12,
              padding: '18px 20px',
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
              boxShadow: theme.colors.shadowCard,
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
                background: comp.color,
                opacity: 0.8,
              }}
            />
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: `${comp.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                flexShrink: 0,
              }}
            >
              {comp.icon}
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: comp.color,
                  marginBottom: 5,
                }}
              >
                {comp.title}
              </div>
              <div
                style={{
                  fontSize: '0.68rem',
                  color: theme.colors.textMuted,
                  lineHeight: 1.55,
                }}
              >
                {comp.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
