import { SectionDivider } from '../components/SectionDivider'
import type { SlideProps } from './types'

export default function S06DivOop(_: SlideProps) {
  return (
    <SectionDivider
      no="02"
      title={<>3 nhóm pattern cốt lõi trong OOP</>}
      sub="23 patterns của GoF quy về 3 câu hỏi: tạo đối tượng thế nào, ghép chúng ra sao, và chúng nói chuyện với nhau kiểu gì."
      items={[
        'Creational — khởi tạo đối tượng linh hoạt',
        'Structural — lắp ghép class & object thành cấu trúc lớn',
        'Behavioral — phân công trách nhiệm & giao tiếp',
      ]}
    />
  )
}
