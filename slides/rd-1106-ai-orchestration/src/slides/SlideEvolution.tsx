import { SlideWrapper } from '../components/SlideWrapper'
import { EvolutionDiagram } from '../components/EvolutionDiagram'

export function SlideEvolution() {
  return (
    <SlideWrapper>
      <div className="mb-3">
        <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded">
          Lộ trình tiến hóa
        </span>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
        AI trong doanh nghiệp phát triển qua từng giai đoạn
      </h2>
      <p className="text-base text-gray-500 mb-10 max-w-2xl leading-relaxed">
        Mỗi bước tiến mở ra khả năng mới - từ trả lời câu hỏi đơn giản đến điều phối hàng trăm tác nhân AI làm việc cùng nhau.
      </p>
      <div className="flex-1 flex flex-col justify-center">
        <EvolutionDiagram />
      </div>
      <div className="mt-8 grid grid-cols-5 gap-2 text-xs text-gray-400 text-center">
        {[
          'Phản hồi theo lệnh',
          'Tự chủ từng nhiệm vụ',
          'Hỗ trợ cá nhân hóa',
          'Điều phối đa tác nhân',
          'Tương lai mở',
        ].map((desc) => (
          <span key={desc} className="leading-snug">{desc}</span>
        ))}
      </div>
    </SlideWrapper>
  )
}
