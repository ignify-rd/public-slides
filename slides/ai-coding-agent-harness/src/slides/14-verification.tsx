import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { Tag, item } from '../components/primitives'

const gates = [
  { cmd: 'npm run typecheck', d: 'TS báo sai kiểu → agent tự sửa' },
  { cmd: 'npm test', d: 'test đỏ = chưa xong, xanh = done' },
  { cmd: 'npm run lint', d: 'style/bug tĩnh, bắt trước khi review' },
  { cmd: 'playwright screenshot', d: 'nhìn UI thật, không đoán mù' },
]

export function SlideVerification() {
  return (
    <SlideLayout path="~/harness/verify" badge="VÒNG LẶP KIỂM CHỨNG">
      <div className="grid flex-1 min-h-0" style={{ gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div className="flex flex-col justify-center">
          <Tag>Bí quyết quan trọng nhất</Tag>
          <motion.h2
            variants={item}
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: 12, lineHeight: 1.06 }}
          >
            Cho agent “sự thật nền” để tự chấm
          </motion.h2>
          <motion.p variants={item} style={{ fontSize: 'var(--body-size)', color: 'var(--text-dim)', marginTop: 18, lineHeight: 1.65, maxWidth: '46ch' }}>
            Agent đoán giỏi nhưng hay ảo tưởng “đã xong”. Nối nó với lệnh trả kết quả khách quan →
            nó tự thấy sai, tự sửa, lặp đến khi <span style={{ color: 'var(--green)' }}>xanh hết</span>.
          </motion.p>
          <motion.div variants={item} style={{ marginTop: 24, padding: '16px 20px', borderLeft: '2px solid var(--green)', background: 'rgba(57,211,83,0.05)' }}>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', color: 'var(--text-faint)', textTransform: 'uppercase' }}>
              Nguyên tắc
            </div>
            <div style={{ fontSize: 'var(--body-size)', color: '#fff', marginTop: 6, lineHeight: 1.5 }}>
              Không có test/verify = agent làm mù. Vòng lặp verify là thứ biến “demo ấn tượng” thành “code ship được”.
            </div>
          </motion.div>
        </div>

        {/* right: gates terminal */}
        <motion.div variants={item} className="flex flex-col self-center" style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'var(--bg-2)', width: '100%' }}>
          <div className="flex items-center gap-2" style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: '#f85149' }} />
            <span className="w-2 h-2 rounded-full" style={{ background: '#d29922' }} />
            <span className="w-2 h-2 rounded-full" style={{ background: '#39d353' }} />
            <span style={{ fontSize: '0.6rem', color: 'var(--text-faint)', marginLeft: 6 }}>verify gates</span>
          </div>
          <div style={{ padding: '16px 18px' }}>
            {gates.map((g, i) => (
              <div key={i} style={{ marginBottom: i === gates.length - 1 ? 0 : 16 }}>
                <div style={{ fontSize: '0.74rem' }}>
                  <span style={{ color: 'var(--green-dim)' }}>$ </span>
                  <span style={{ color: 'var(--text)' }}>{g.cmd}</span>
                </div>
                <div style={{ fontSize: '0.64rem', color: 'var(--text-faint)', marginTop: 3, paddingLeft: 14 }}>
                  ↳ {g.d}
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: '10px 18px', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '0.66rem', color: 'var(--green)' }}>
            ✓ all green → an toàn để review
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
