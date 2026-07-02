import { SectionDivider } from '../components/SectionDivider'
import type { SlideProps } from './types'

export default function S19DivFe(_: SlideProps) {
  return (
    <SectionDivider
      no="03"
      title="Patterns trong kiến trúc Frontend"
      sub="Cùng một tư duy pattern, nâng cấp độ: từ class & object lên cách tổ chức cả một ứng dụng giao diện."
      items={[
        'Monolith → Modular → Component-based',
        'Microfrontend — chia frontend thành các dự án độc lập',
        'Flux / Redux — luồng dữ liệu một chiều',
      ]}
    />
  )
}
