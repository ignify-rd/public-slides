import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, scaleIn, fadeInUp } from '../lib/animations'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Data Audit & Catalog',
    duration: 'Thang 1-2',
    tasks: [
      'Kiem ke toan bo nguon du lieu hien co',
      'Xac dinh cac silo du lieu quan trong',
      'Danh gia chat luong va do tin cay',
      'Chon cong cu Data Catalog phu hop',
    ],
    color: '#DC2626',
    status: 'Nen lam truoc',
  },
  {
    phase: 'Phase 2',
    title: 'Foundation & Connectivity',
    duration: 'Thang 3-4',
    tasks: [
      'Trien khai Data Fabric platform',
      'Ket noi cac nguon du lieu chinh',
      'Cau hinh basic metadata tagging',
      'Thiet lap chinh sach truy cap co ban',
    ],
    color: '#D97706',
    status: 'Nen tang',
  },
  {
    phase: 'Phase 3',
    title: 'Intelligence & Governance',
    duration: 'Thang 5-8',
    tasks: [
      'Bat AI tu dong hoa metadata',
      'Cau hinh Data Lineage day du',
      'Trien khai Data Quality monitoring',
      'Training user va data steward',
    ],
    color: theme.colors.accent,
    status: 'Mo rong',
  },
  {
    phase: 'Phase 4',
    title: 'Scale & Optimize',
    duration: 'Thang 9+',
    tasks: [
      'Mo rong ra toan to chuc',
      'Tich hop voi AI/ML workloads',
      'Tu dong hoa quy trinh Data Ops',
      'Do luong va toi uu ROI',
    ],
    color: theme.colors.accentGreen,
    status: 'Tang truong',
  },
]

export function Slide24DiagramRoadmap() {
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
        padding: '28px 50px',
      }}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        style={{ textAlign: 'center', marginBottom: 24 }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
            fontWeight: 800,
            color: theme.colors.text,
            letterSpacing: '-0.02em',
          }}
        >
          Lo trinh trien khai Data Fabric
        </h2>
      </motion.div>

      {/* Timeline line */}
      <div
        style={{
          position: 'relative',
          marginBottom: 16,
        }}
      >
        <div
          style={{
            height: 4,
            background: `linear-gradient(90deg, #DC2626, #D97706, ${theme.colors.accent}, ${theme.colors.accentGreen})`,
            borderRadius: 2,
            margin: '0 0 0 0',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 14,
        }}
      >
        {phases.map((phase, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            style={{
              background: theme.colors.bgCard,
              border: `1.5px solid ${phase.color}30`,
              borderTop: `4px solid ${phase.color}`,
              borderRadius: '0 0 12px 12px',
              padding: '16px 16px',
              boxShadow: theme.colors.shadowCard,
              position: 'relative',
            }}
          >
            {/* Phase number */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <div>
                <div
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    color: phase.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: 3,
                  }}
                >
                  {phase.phase}
                </div>
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: theme.colors.text,
                    lineHeight: 1.2,
                  }}
                >
                  {phase.title}
                </div>
              </div>
              <div
                style={{
                  padding: '3px 8px',
                  background: `${phase.color}15`,
                  borderRadius: 4,
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  color: phase.color,
                  whiteSpace: 'nowrap',
                }}
              >
                {phase.duration}
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                padding: '3px 10px',
                background: `${phase.color}10`,
                borderRadius: 20,
                fontSize: '0.6rem',
                fontWeight: 600,
                color: phase.color,
                marginBottom: 12,
              }}
            >
              {phase.status}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {phase.tasks.map((task, j) => (
                <div
                  key={j}
                  style={{
                    display: 'flex',
                    gap: 7,
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: phase.color,
                      flexShrink: 0,
                      marginTop: 4,
                    }}
                  />
                  <span style={{ fontSize: '0.65rem', color: theme.colors.textMuted, lineHeight: 1.5 }}>
                    {task}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: 16,
          textAlign: 'center',
          fontSize: '0.65rem',
          color: theme.colors.textDim,
          fontStyle: 'italic',
        }}
      >
        Lo trinh co the dieu chinh tuy theo quy mo to chuc va he thong hien co.
        Nen bat dau voi pilot project nho de chung minh gia tri truoc khi scale up.
      </motion.div>
    </div>
  )
}
