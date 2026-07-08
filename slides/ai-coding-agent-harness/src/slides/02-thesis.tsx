import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'
import { Tag, item } from '../components/primitives'

const layers = [
  { k: 'weight', t: 'Weight', d: 'Model thô — bạn không đụng', you: false },
  { k: 'prompt', t: 'Prompt', d: 'Câu lệnh — cần, nhưng chưa đủ', you: true },
  { k: 'context', t: 'Context', d: 'Cho agent thấy đúng thứ', you: true },
  { k: 'harness', t: 'Harness', d: 'Dựng môi trường + vòng lặp', you: true },
]

export function SlideThesis() {
  return (
    <SlideLayout path="~/mindset" badge="KHUNG TƯ DUY">
      <div className="flex-1 min-h-0 flex flex-col justify-center">
        <Tag>Việc của dev đã đổi</Tag>

        <motion.h2
          variants={item}
          style={{
            fontSize: 'clamp(1.5rem, 3.4vw, 2.8rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: '#fff',
            marginTop: 18,
            maxWidth: '22ch',
          }}
        >
          Bạn không còn gõ từng dòng —{' '}
          <span style={{ color: 'var(--green)' }}>bạn điều phối agent</span>.
        </motion.h2>

        <motion.p
          variants={item}
          style={{ fontSize: 'var(--body-size)', color: 'var(--text-dim)', marginTop: 16, maxWidth: '70ch', lineHeight: 1.6 }}
        >
          Model đứng yên. Đòn bẩy của bạn nằm ở 3 lớp phía trên nó — và lớp càng ngoài, càng quyết định kết quả thực chiến.
        </motion.p>

        {/* 4 layers */}
        <motion.div
          variants={item}
          className="grid"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginTop: 34 }}
        >
          {layers.map((l, i) => (
            <div
              key={l.k}
              style={{
                padding: '18px 18px 20px',
                border: `1px solid ${l.k === 'harness' ? 'var(--green)' : 'rgba(255,255,255,0.08)'}`,
                background: l.k === 'harness' ? 'rgba(57,211,83,0.07)' : 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                position: 'relative',
              }}
            >
              <span style={{ fontSize: '0.56rem', color: 'var(--text-faint)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: '1.05rem', fontWeight: 700, color: l.k === 'harness' ? 'var(--green)' : '#fff' }}>
                {l.t}
              </span>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)', lineHeight: 1.45 }}>{l.d}</span>
              <span
                style={{
                  marginTop: 6,
                  fontSize: '0.55rem',
                  letterSpacing: '0.12em',
                  color: l.you ? 'var(--green)' : 'var(--text-faint)',
                }}
              >
                {l.you ? '◉ BẠN KIỂM SOÁT' : '○ KHÔNG ĐỤNG'}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          variants={item}
          style={{ fontSize: '0.72rem', color: 'var(--text-faint)', marginTop: 22, letterSpacing: '0.04em' }}
        >
          → Phần còn lại của deck: workflow + tool để làm chủ 3 lớp này.
        </motion.p>
      </div>
    </SlideLayout>
  )
}
