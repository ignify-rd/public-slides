import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, scaleIn } from '../lib/animations'

const steps = [
  {
    step: 'Buoc 1',
    title: 'Ao hoa (Virtualization)',
    desc: 'Ban khong can tai du lieu ve may. Data Fabric tao ra cac "pipelines" ket noi truc tiep den 3 nguon nay: SQL Server, Excel SharePoint, va SaaS.',
    color: theme.colors.accent,
    icon: '🔌',
  },
  {
    step: 'Buoc 2',
    title: 'Thau hieu / AI',
    desc: 'Bo nao AI cua Fabric nhan dien: "Du ten cot khac nhau va dinh gia tien te khac nhau, nhung tat ca deu mang nhan (tag) la #Salary". No tu dong quy doi USD ve VND dua tren ty gia moi nhat.',
    color: '#7C3AED',
    icon: '🤖',
  },
  {
    step: 'Buoc 3',
    title: 'Ket noi Power BI',
    desc: 'Ban chi can mo Power BI, chon mot nguon duy nhat la "Data Fabric - Employee View". Moi su sai lech da duoc Fabric xu ly. Bieu do hien ra ngay chieu nay.',
    color: theme.colors.accentGreen,
    icon: '📊',
  },
]

export function Slide19ExampleContent() {
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
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Request quote */}
        <motion.div
          variants={fadeInUp}
          style={{
            background: `linear-gradient(90deg, ${theme.colors.accentDim}, ${theme.colors.accentLight})`,
            border: `1.5px solid ${theme.colors.borderAccent}`,
            borderRadius: 12,
            padding: '14px 20px',
            marginBottom: 24,
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start',
          }}
        >
          <div style={{ fontSize: '1.4rem', flexShrink: 0 }}>💬</div>
          <div>
            <div style={{ fontSize: '0.65rem', color: theme.colors.accent, fontWeight: 700, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Yeu cau tu Manager
            </div>
            <p
              style={{
                fontSize: '0.82rem',
                color: theme.colors.text,
                fontStyle: 'italic',
                fontWeight: 500,
                lineHeight: 1.55,
              }}
            >
              "Hay cho toi xem bieu do luong trung binh toan tap doan tren Power BI ngay chieu nay."
            </p>
          </div>
        </motion.div>

        {/* Context */}
        <motion.div
          variants={fadeInUp}
          style={{
            marginBottom: 20,
            padding: '10px 14px',
            background: '#FFFBEB',
            border: '1px solid #D9770630',
            borderRadius: 8,
            fontSize: '0.72rem',
            color: '#92400E',
            lineHeight: 1.6,
          }}
        >
          <strong>Kich ban:</strong> Phong Sales luu luong trong SQL Server (cot{' '}
          <code style={{ background: '#FEF3C7', padding: '1px 4px', borderRadius: 3 }}>base_pay</code>),
          phong Tech luu trong file Excel tren SharePoint (cot{' '}
          <code style={{ background: '#FEF3C7', padding: '1px 4px', borderRadius: 3 }}>Salary_USD</code>),
          phong Marketing dung phan mem SaaS (cot{' '}
          <code style={{ background: '#FEF3C7', padding: '1px 4px', borderRadius: 3 }}>Income</code>).
        </motion.div>

        {/* Steps */}
        <div style={{ display: 'flex', gap: 14 }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              style={{
                flex: 1,
                background: theme.colors.bgCard,
                border: `1.5px solid ${step.color}30`,
                borderRadius: 12,
                padding: '16px 16px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: theme.colors.shadowCard,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: step.color,
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: `${step.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}
                >
                  {step.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.6rem', color: step.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {step.step}
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: theme.colors.text, lineHeight: 1.2 }}>
                    {step.title}
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: '0.65rem',
                  color: theme.colors.textMuted,
                  lineHeight: 1.6,
                }}
              >
                {step.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result */}
        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: 16,
            padding: '10px 16px',
            background: `linear-gradient(90deg, ${theme.colors.accentGreen}12, ${theme.colors.accentGreen}06)`,
            border: `1px solid ${theme.colors.accentGreen}30`,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>✅</span>
          <span style={{ fontSize: '0.78rem', color: theme.colors.accentGreen, fontWeight: 600 }}>
            Ket qua: Bieu do hien len ngay, du lieu nhat quan, chinh xac - va ban da lam xong truoc chieu!
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
