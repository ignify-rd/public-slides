import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, scaleIn, fadeInUp } from '../lib/animations'

const rings = [
  {
    label: 'Business Users & Apps',
    items: ['Power BI', 'Excel', 'Tableau', 'AI/ML'],
    color: theme.colors.accentGreen,
    radius: 280,
  },
  {
    label: 'Data Consumers',
    items: ['Data Science', 'Analytics', 'Reporting', 'APIs'],
    color: theme.colors.accentAlt,
    radius: 200,
  },
]

const coreCapabilities = ['AI Metadata', 'Virtualization', 'Governance', 'Lineage', 'Catalog']

export function Slide22DiagramEcosystem() {
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
        alignItems: 'center',
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
          Hệ sinh thái Data Fabric
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          gap: 48,
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left: layers */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <motion.div variants={scaleIn}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: theme.colors.accentGreen, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>
              Tầng ứng dụng
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {rings[0].items.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: '6px 12px',
                    background: `${theme.colors.accentGreen}12`,
                    border: `1px solid ${theme.colors.accentGreen}30`,
                    borderRadius: 6,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: theme.colors.accentGreen,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div
            style={{
              height: 2,
              background: `linear-gradient(90deg, ${theme.colors.accentGreen}40, ${theme.colors.accentAlt}40)`,
              borderRadius: 1,
              margin: '4px 0',
            }}
          />

          <motion.div variants={scaleIn}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: theme.colors.accentAlt, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>
              Tầng tiêu thụ dữ liệu
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {rings[1].items.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: '6px 12px',
                    background: `${theme.colors.accentAlt}12`,
                    border: `1px solid ${theme.colors.accentAlt}30`,
                    borderRadius: 6,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: theme.colors.accentAlt,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center: core */}
        <motion.div
          variants={scaleIn}
          style={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentAlt} 100%)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 8px 32px ${theme.colors.accent}30`,
            flexShrink: 0,
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: 6 }}>🕸</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'white', marginBottom: 6 }}>DATA FABRIC</div>
            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
              {coreCapabilities.join(' · ')}
            </div>
          </div>
        </motion.div>

        {/* Right: sources */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <motion.div variants={scaleIn}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>
              Nguồn dữ liệu
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['SQL / NoSQL Databases', 'Cloud Storage (S3, Azure Blob)', 'SaaS Applications', 'Streaming / Kafka', 'Legacy Systems'].map((src) => (
                <div
                  key={src}
                  style={{
                    padding: '7px 12px',
                    background: '#FFFBEB',
                    border: '1px solid #D9770630',
                    borderRadius: 6,
                    fontSize: '0.68rem',
                    color: '#92400E',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#D97706', flexShrink: 0 }} />
                  {src}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
