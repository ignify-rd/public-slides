import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, scaleIn, fadeInUp } from '../lib/animations'

const layers = [
  {
    label: 'Business Applications Layer',
    sublabel: 'Power BI / AI / Analytics / Apps',
    color: theme.colors.accentGreen,
    bg: '#F0FDF4',
    height: 60,
  },
  {
    label: 'Data Fabric Layer',
    sublabel: 'Unified semantics, governance, virtualization',
    color: theme.colors.accent,
    bg: `${theme.colors.accent}10`,
    height: 80,
    highlight: true,
  },
  {
    label: 'Data Integration Layer',
    sublabel: 'ETL / ELT pipelines, streaming, batch',
    color: theme.colors.accentAlt,
    bg: '#F0F9FF',
    height: 60,
  },
  {
    label: 'Data Sources Layer',
    sublabel: 'SQL, NoSQL, Cloud, Files, SaaS, APIs',
    color: '#D97706',
    bg: '#FFFBEB',
    height: 60,
  },
]

export function Slide10DiagramLayers() {
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
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 80px',
      }}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        style={{ textAlign: 'center', marginBottom: 40 }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
            fontWeight: 800,
            color: theme.colors.text,
            letterSpacing: '-0.02em',
          }}
        >
          Kien truc phan tang cua Data Fabric
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ width: '100%', maxWidth: 900, display: 'flex', flexDirection: 'column', gap: 10 }}
      >
        {layers.map((layer, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            style={{
              height: layer.height,
              background: layer.highlight
                ? `linear-gradient(90deg, ${theme.colors.accent}18, ${theme.colors.accentAlt}12)`
                : layer.bg,
              border: `2px solid ${layer.color}${layer.highlight ? '' : '30'}`,
              borderLeft: `6px solid ${layer.color}`,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              padding: '0 24px',
              gap: 16,
              boxShadow: layer.highlight
                ? `0 4px 20px ${theme.colors.accent}20`
                : theme.colors.shadow,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: `${layer.color}18`,
                border: `1.5px solid ${layer.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: layer.color,
                }}
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: layer.highlight ? '0.95rem' : '0.85rem',
                  fontWeight: layer.highlight ? 800 : 700,
                  color: layer.color,
                  marginBottom: 3,
                }}
              >
                {layer.label}
              </div>
              <div
                style={{
                  fontSize: '0.68rem',
                  color: theme.colors.textMuted,
                }}
              >
                {layer.sublabel}
              </div>
            </div>
            {layer.highlight && (
              <div
                style={{
                  marginLeft: 'auto',
                  padding: '4px 12px',
                  background: theme.colors.accent,
                  color: 'white',
                  borderRadius: 20,
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                }}
              >
                CORE
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
