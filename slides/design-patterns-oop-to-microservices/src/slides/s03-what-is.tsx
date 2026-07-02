import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { item, fadeScale } from '../lib/animations'
import { T, clamp } from '../lib/theme'
import { SlideLayout, Bullets } from '../components/SlideLayout'
import type { SlideProps } from './types'

function Card({
  good,
  title,
  lines,
}: {
  good?: boolean
  title: string
  lines: string[]
}) {
  const c = good ? T.ok : T.danger
  return (
    <motion.div
      variants={fadeScale}
      style={{
        flex: 1,
        border: `1px solid ${good ? 'rgba(46,194,126,0.4)' : 'rgba(255,82,82,0.4)'}`,
        borderRadius: 14,
        background: good ? 'rgba(46,194,126,0.06)' : 'rgba(255,82,82,0.05)',
        padding: '26px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            border: `1.5px solid ${c}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: c,
            flexShrink: 0,
          }}
        >
          {good ? <Check size={18} /> : <X size={18} />}
        </div>
        <span style={{ fontSize: clamp('0.95rem', '1.5vw', '1.15rem'), fontWeight: 800 }}>{title}</span>
      </div>
      {lines.map((l, i) => (
        <div key={i} style={{ fontSize: clamp('0.8rem', '1.25vw', '0.95rem'), color: 'rgba(242,245,250,0.8)', lineHeight: 1.5 }}>
          {l}
        </div>
      ))}
    </motion.div>
  )
}

export default function S03WhatIs(_: SlideProps) {
  return (
    <SlideLayout kicker="PHẦN 01 · TỔNG QUAN" title="Design Pattern là gì?">
      <div style={{ marginTop: 26 }}>
        <Bullets
          width={1050}
          items={[
            {
              t: 'Khuôn mẫu giải pháp có thể tái sử dụng',
              d: 'cho các vấn đề thiết kế lặp đi lặp lại trong phần mềm',
            },
          ]}
        />
      </div>
      <div style={{ display: 'flex', gap: 28, marginTop: 32, maxWidth: 1100 }}>
        <Card
          title="KHÔNG phải là…"
          lines={[
            'Một đoạn code cụ thể để copy-paste vào dự án',
            'Một thư viện hay framework cài đặt sẵn',
            'Liều thuốc chữa bách bệnh cho mọi thiết kế',
          ]}
        />
        <Card
          good
          title="MÀ là…"
          lines={[
            'Bản thiết kế khái niệm: vai trò, quan hệ, cách phối hợp giữa các thành phần',
            'Được điều chỉnh theo ngữ cảnh của từng bài toán',
            'Kinh nghiệm đã được kiểm chứng qua hàng nghìn hệ thống',
          ]}
        />
      </div>
      <motion.p
        variants={item}
        style={{
          marginTop: 30,
          fontFamily: T.mono,
          fontSize: clamp('0.78rem', '1.2vw', '0.95rem'),
          color: T.accentBright,
        }}
      >
        Vấn đề lặp lại + Ngữ cảnh → Giải pháp đã kiểm chứng
      </motion.p>
    </SlideLayout>
  )
}
