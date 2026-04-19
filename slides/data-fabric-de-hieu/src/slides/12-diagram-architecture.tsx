import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, scaleIn, fadeInUp } from '../lib/animations'

const departments = [
  { name: 'Phong Sales', color: '#7C3AED', data: ['SQL Server', 'base_pay'] },
  { name: 'Phong Tech', color: '#0EA5E9', data: ['Excel SharePoint', 'Salary_USD'] },
  { name: 'Phong Marketing', color: '#059669', data: ['SaaS Platform', 'Income'] },
  { name: 'Phong Finance', color: '#D97706', data: ['ERP System', 'gross_salary'] },
]

export function Slide12DiagramArchitecture() {
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
          Cong ty su dung Data Fabric - Truoc va Sau
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ display: 'flex', gap: 40, width: '100%', alignItems: 'flex-start' }}
      >
        {/* Before */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              textAlign: 'center',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#DC2626',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Truoc (Khong co Fabric)
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {departments.map((dept, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                style={{
                  padding: '12px 16px',
                  background: `${dept.color}10`,
                  border: `1.5px solid ${dept.color}30`,
                  borderRadius: 10,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: dept.color }}>{dept.name}</div>
                  <div style={{ fontSize: '0.65rem', color: theme.colors.textMuted }}>{dept.data[0]}</div>
                </div>
                <div
                  style={{
                    padding: '3px 10px',
                    background: `${dept.color}20`,
                    borderRadius: 4,
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    color: dept.color,
                  }}
                >
                  {dept.data[1]}
                </div>
              </motion.div>
            ))}
          </div>
          <div
            style={{
              marginTop: 14,
              textAlign: 'center',
              fontSize: '0.65rem',
              color: '#DC2626',
              fontStyle: 'italic',
            }}
          >
            Moi phong ban dung ten cot khac nhau - khong noi chuyen duoc!
          </div>
        </div>

        {/* Arrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 80,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div
              style={{
                padding: '8px 14px',
                background: `linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentAlt})`,
                borderRadius: 8,
                fontSize: '0.65rem',
                fontWeight: 700,
                color: 'white',
                textAlign: 'center',
              }}
            >
              DATA FABRIC
            </div>
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
              <path d="M4 12h24M20 5l8 7-8 7" stroke={theme.colors.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* After */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              textAlign: 'center',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: theme.colors.accentGreen,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Sau (Co Data Fabric)
          </div>
          <motion.div
            variants={scaleIn}
            style={{
              padding: '20px',
              background: `linear-gradient(135deg, ${theme.colors.accent}10, ${theme.colors.accentAlt}08)`,
              border: `2px solid ${theme.colors.accent}40`,
              borderRadius: 14,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.8rem', marginBottom: 10 }}>🔗</div>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: theme.colors.accent,
                marginBottom: 8,
              }}
            >
              Unified View: "salary"
            </div>
            <div
              style={{
                fontSize: '0.65rem',
                color: theme.colors.textMuted,
                lineHeight: 1.6,
                marginBottom: 12,
              }}
            >
              base_pay = Salary_USD = Income = gross_salary
              <br />
              Fabric nhan dang tat ca la mot truong du lieu
            </div>
            {departments.map((dept, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  justifyContent: 'center',
                  marginBottom: 4,
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: dept.color }} />
                <span style={{ fontSize: '0.62rem', color: theme.colors.textMuted }}>{dept.name}</span>
              </div>
            ))}
          </motion.div>
          <div
            style={{
              marginTop: 14,
              textAlign: 'center',
              fontSize: '0.65rem',
              color: theme.colors.accentGreen,
              fontStyle: 'italic',
            }}
          >
            Mot nguon nhin thong nhat - nhat quan, chinh xac!
          </div>
        </div>
      </motion.div>
    </div>
  )
}
