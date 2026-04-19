import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, scaleIn } from '../lib/animations'

const vendors = [
  {
    vendor: 'Microsoft',
    logo: '🪟',
    solution: 'Microsoft Fabric',
    philosophy: 'Su don gian: Moi thu trong mot (All-in-one).',
    strength: 'Tich hop sau voi Azure, Power BI, Office 365',
    color: '#0078D4',
  },
  {
    vendor: 'IBM',
    logo: '🔵',
    solution: 'Cloud Pak for Data',
    philosophy: 'Su thong minh: Dung AI quan tri metadata cuc sau.',
    strength: 'AI Governance, Watson, do chin muoi cho enterprise',
    color: '#1F70C1',
  },
  {
    vendor: 'AWS',
    logo: '🟠',
    solution: 'Amazon DataZone',
    philosophy: 'Su linh hoat: Ket noi moi dich vu AWS khong can copy.',
    strength: 'Phu hop khi da dung nhieu dich vu AWS',
    color: '#FF9900',
  },
  {
    vendor: 'SAP',
    logo: '🟦',
    solution: 'SAP Datasphere',
    philosophy: 'Ngu canh kinh doanh: Giu nguyen y nghia du lieu ke toan/ERP.',
    strength: 'Tot nhat khi cong ty dang dung SAP ERP',
    color: '#0FAAFF',
  },
]

export function Slide21VendorsTable() {
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
        padding: '36px 60px',
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeInUp} style={{ marginBottom: 28 }}>
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
            Tren thi truong
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
              fontWeight: 800,
              color: theme.colors.text,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Cac giai phap Data Fabric hang dau
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 200px 1fr 1fr',
              gap: 12,
              padding: '8px 16px',
            }}
          >
            {['Nha cung cap', 'Giai phap chinh', 'Triet ly', 'Diem manh'].map((h) => (
              <div
                key={h}
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: theme.colors.accent,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                }}
              >
                {h}
              </div>
            ))}
          </div>

          {vendors.map((v, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px 200px 1fr 1fr',
                gap: 12,
                background: theme.colors.bgCard,
                border: `1.5px solid ${theme.colors.border}`,
                borderLeft: `4px solid ${v.color}`,
                borderRadius: 10,
                padding: '14px 16px',
                alignItems: 'center',
                boxShadow: theme.colors.shadow,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: '1.4rem' }}>{v.logo}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: v.color }}>{v.vendor}</span>
              </div>
              <div
                style={{
                  padding: '4px 10px',
                  background: `${v.color}12`,
                  borderRadius: 6,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: v.color,
                  width: 'fit-content',
                }}
              >
                {v.solution}
              </div>
              <div style={{ fontSize: '0.7rem', color: theme.colors.textMuted, lineHeight: 1.5 }}>
                {v.philosophy}
              </div>
              <div
                style={{
                  fontSize: '0.68rem',
                  color: theme.colors.textMuted,
                  lineHeight: 1.5,
                  fontStyle: 'italic',
                }}
              >
                {v.strength}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
