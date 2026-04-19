import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, scaleIn, fadeInUp } from '../lib/animations'

const problems = [
  {
    icon: '⚠',
    title: 'Du lieu mai thuan',
    scenario: 'Phong Sales: luong = 15M VND, Phong Ke toan: luong = 18M VND',
    cause: 'Hai he thong dung don vi khac nhau (gross vs net)',
    color: '#DC2626',
  },
  {
    icon: '🕒',
    title: 'Tre do - Du lieu cu',
    scenario: 'Bao cao hom nay dung du lieu cua... tuan truoc',
    cause: 'Pipeline ETL chay batch hang dem, khong phai real-time',
    color: '#D97706',
  },
  {
    icon: '🚫',
    title: 'Truy cap sai pham',
    scenario: 'Nhan vien co the xem luong cua toan cong ty',
    cause: 'Chua co chinh sach phan quyen du lieu theo phong ban',
    color: '#7C3AED',
  },
  {
    icon: '❓',
    title: 'Khong biet du lieu den tu dau',
    scenario: 'Con so "doanh thu Q3" nay lay tu bao cao nao?',
    cause: 'Khong co Data Lineage de truy vet nguon goc',
    color: '#0EA5E9',
  },
]

export function Slide15DiagramProblems() {
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
        padding: '32px 60px',
      }}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        style={{ marginBottom: 28 }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
            fontWeight: 800,
            color: theme.colors.text,
            letterSpacing: '-0.02em',
          }}
        >
          Cac van de thuong gap trong thuc te
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
      >
        {problems.map((prob, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            style={{
              background: theme.colors.bgCard,
              border: `1.5px solid ${theme.colors.border}`,
              borderRadius: 12,
              padding: '20px',
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
                bottom: 0,
                width: 4,
                background: prob.color,
              }}
            />
            <div style={{ paddingLeft: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: `${prob.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}
                >
                  {prob.icon}
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: prob.color,
                  }}
                >
                  {prob.title}
                </div>
              </div>
              <div
                style={{
                  padding: '8px 12px',
                  background: `${prob.color}08`,
                  borderRadius: 6,
                  marginBottom: 8,
                }}
              >
                <div style={{ fontSize: '0.68rem', color: theme.colors.textMuted, fontStyle: 'italic', lineHeight: 1.5 }}>
                  "{prob.scenario}"
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                <span style={{ color: prob.color, fontSize: '0.75rem', flexShrink: 0 }}>Nguyen nhan:</span>
                <span style={{ fontSize: '0.68rem', color: theme.colors.textMuted, lineHeight: 1.5 }}>
                  {prob.cause}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
