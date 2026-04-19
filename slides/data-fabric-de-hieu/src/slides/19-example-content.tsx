import { motion } from 'framer-motion'
import { theme } from '../lib/theme'
import { container, fadeInUp, scaleIn } from '../lib/animations'

const steps = [
  {
    step: 'Bước 1',
    title: 'Ảo hóa (Virtualization)',
    desc: 'Bạn không cần tải dữ liệu về máy. Data Fabric tạo ra các "pipelines" kết nối trực tiếp đến 3 nguồn này: SQL Server, Excel SharePoint, và SaaS.',
    color: theme.colors.accent,
    icon: '🔌',
  },
  {
    step: 'Bước 2',
    title: 'Thấu hiểu / AI',
    desc: 'Bộ não AI của Fabric nhận diện: "Dù tên cột khác nhau và định giá tiền tệ khác nhau, nhưng tất cả đều mang nhãn (tag) là #Salary". Nó tự động quy đổi USD về VND dựa trên tỷ giá mới nhất.',
    color: '#7C3AED',
    icon: '🤖',
  },
  {
    step: 'Bước 3',
    title: 'Kết nối Power BI',
    desc: 'Bạn chỉ cần mở Power BI, chọn một nguồn duy nhất là "Data Fabric - Employee View". Mọi sự sai lệch đã được Fabric xử lý. Biểu đồ hiện ra ngay chiều này.',
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
              Yêu cầu từ Manager
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
              "Hãy cho tôi xem biểu đồ lương trung bình toàn tập đoàn trên Power BI ngay chiều này."
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
          <strong>Kịch bản:</strong> Phòng Sales lưu lương trong SQL Server (cột{' '}
          <code style={{ background: '#FEF3C7', padding: '1px 4px', borderRadius: 3 }}>base_pay</code>),
          phòng Tech lưu trong file Excel trên SharePoint (cột{' '}
          <code style={{ background: '#FEF3C7', padding: '1px 4px', borderRadius: 3 }}>Salary_USD</code>),
          phòng Marketing dùng phần mềm SaaS (cột{' '}
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
            Kết quả: Biểu đồ hiện lên ngay, dữ liệu nhất quán, chính xác - và bạn đã làm xong trước chiều!
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
