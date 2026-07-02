import { SectionDivider } from '../components/SectionDivider'
import type { SlideProps } from './types'

export default function S38DivAdvice(_: SlideProps) {
  return (
    <SectionDivider
      no="06"
      title="Lời khuyên thực chiến & bẫy cần né"
      sub="Pattern là công cụ, không phải huân chương. Ba nguyên tắc để dùng đúng liều."
      items={[
        'Over-engineering — con dao hai lưỡi',
        'Microservices không phải mặc định đúng',
        'Bắt đầu từ vấn đề, không phải từ tên pattern',
      ]}
    />
  )
}
