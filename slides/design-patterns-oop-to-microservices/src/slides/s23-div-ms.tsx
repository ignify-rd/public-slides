import { SectionDivider } from '../components/SectionDivider'
import type { SlideProps } from './types'

export default function S23DivMs(_: SlideProps) {
  return (
    <SectionDivider
      no="04"
      title="Patterns trong kiến trúc Microservices"
      sub="Khi hệ thống bị cắt thành hàng chục service chạy qua mạng, các bài toán mới xuất hiện — và cần bộ patterns riêng."
      items={[
        'Phân rã & di chuyển — Strangler Fig, Database per Service',
        'Quản lý dữ liệu — CQRS, Event Sourcing, Saga',
        'Giao tiếp — API Gateway, Service Discovery',
        'Chịu lỗi — Circuit Breaker, Bulkhead',
      ]}
    />
  )
}
