import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, scaleIn } from '../lib/animations'

const vendors = [
  {
    vendor: 'Microsoft',
    logo: '🪟',
    solution: 'Microsoft Fabric',
    philosophy: 'Sự đơn giản: Mọi thứ trong một (All-in-one).',
    strength: 'Tích hợp sâu với Azure, Power BI, Office 365',
    color: '#0078D4',
  },
  {
    vendor: 'IBM',
    logo: '🔵',
    solution: 'Cloud Pak for Data',
    philosophy: 'Sự thông minh: Dùng AI quản trị metadata cực sâu.',
    strength: 'AI Governance, Watson, độ chín muồi cho enterprise',
    color: '#1F70C1',
  },
  {
    vendor: 'AWS',
    logo: '🟠',
    solution: 'Amazon DataZone',
    philosophy: 'Sự linh hoạt: Kết nối mọi dịch vụ AWS không cần copy.',
    strength: 'Phù hợp khi đã dùng nhiều dịch vụ AWS',
    color: '#FF9900',
  },
  {
    vendor: 'SAP',
    logo: '🟦',
    solution: 'SAP Datasphere',
    philosophy: 'Ngữ cảnh kinh doanh: Giữ nguyên ý nghĩa dữ liệu kế toán/ERP.',
    strength: 'Tốt nhất khi công ty đang dùng SAP ERP',
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
            Trên thị trường
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
            Các giải pháp Data Fabric hàng đầu
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
            {['Nhà cung cấp', 'Giải pháp chính', 'Triết lý', 'Điểm mạnh'].map((h) => (
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
