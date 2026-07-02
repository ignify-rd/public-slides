import { SectionDivider } from '../components/SectionDivider'
import type { SlideProps } from './types'

export default function S34DivCase(_: SlideProps) {
  return (
    <SectionDivider
      no="05"
      title="Case study: patterns chạy thật trong production"
      sub="Lý thuyết ở trên — giờ soi vào 3 mảnh hạ tầng thật: code NestJS, message broker RabbitMQ và API Gateway Kong."
      items={[
        'CQRS với @nestjs/cqrs — Command · Query · Event · Saga',
        'Pub/Sub với RabbitMQ — Fanout, Manual Ack, Prefetch',
        'Kong Gateway — JWT & Rate Limiting tại tầng Edge',
      ]}
    />
  )
}
