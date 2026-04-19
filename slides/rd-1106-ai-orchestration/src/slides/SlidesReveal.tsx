import { SlideWrapper } from '../components/SlideWrapper'
import { EvolutionDiagram } from '../components/EvolutionDiagram'

const DIAGRAM_INDEX = 4

function SlideReveal01() {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center justify-center flex-1 text-center gap-6">
        <span className="text-6xl">🤔</span>
        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Vậy... với tất cả những giai đoạn này,
          <br />
          <span className="text-blue-600">AI là gì với chúng ta?</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          Chatbot, Agent, Personal Assistant, Orchestration - tất cả đang hội tụ về một định nghĩa mới.
        </p>
      </div>
      <div className="mt-4">
        <EvolutionDiagram activeIndex={DIAGRAM_INDEX} />
      </div>
    </SlideWrapper>
  )
}

function SlideReveal02() {
  return (
    <SlideWrapper className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
      <div className="relative flex flex-col items-center justify-center flex-1 text-center gap-6">
        <div className="bg-blue-600 text-white rounded-2xl px-8 py-5 shadow-lg max-w-2xl">
          <p className="text-xs font-bold tracking-widest uppercase mb-2 text-blue-200">Định nghĩa mới</p>
          <h2 className="text-4xl font-extrabold leading-tight">
            AI là một đồng nghiệp siêu cấp
          </h2>
        </div>
        <p className="text-base text-gray-600 max-w-2xl leading-relaxed mt-2">
          Không phải công cụ, không phải bot trả lời - AI là thành viên mới của team,
          làm việc 24/7, không biết mệt mỏi, có thể học kỹ năng mới trong vài phút.
        </p>
        <div className="flex gap-6 mt-2">
          {['Không nghỉ', 'Không quên', 'Luôn sẵn sàng', 'Luôn học hỏi'].map((trait) => (
            <div key={trait} className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-600" />
              </div>
              <span className="text-xs text-gray-600 font-medium">{trait}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <EvolutionDiagram activeIndex={DIAGRAM_INDEX} />
      </div>
    </SlideWrapper>
  )
}

function SlideReveal03() {
  const benefits = [
    { icon: '⚡', title: 'Tốc độ x10', body: 'Hoàn thành việc trong vài phút thay vì vài giờ' },
    { icon: '🎯', title: 'Tập trung vào giá trị cao', body: 'Con người giữ sức sáng tạo, phán xét, xây dựng mối quan hệ' },
    { icon: '📈', title: 'Mở rộng không giới hạn', body: 'Một người có thể làm việc bằng cả team nhỏ với sự hỗ trợ của AI' },
    { icon: '🌙', title: 'Làm việc 24/7', body: 'AI không nghỉ lễ, không có vùng giờ - giao việc lúc nào cũng được' },
  ]
  return (
    <SlideWrapper>
      <div className="mb-3">
        <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded">
          Lợi ích thực tế
        </span>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
        Khi AI là "đồng nghiệp siêu cấp" của bạn
      </h2>
      <div className="flex gap-6 flex-1 min-h-0">
        <div className="flex-1 grid grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <span className="text-2xl mb-2 block">{b.icon}</span>
              <p className="font-bold text-gray-900 text-sm mb-1">{b.title}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
        <div className="flex-none w-52 flex items-center justify-center">
          <img
            src={`${import.meta.env.BASE_URL}assets/super-colleague.gif`}
            alt="AI đồng nghiệp siêu cấp"
            className="max-w-full max-h-full object-contain rounded-xl shadow"
          />
        </div>
      </div>
      <div className="mt-6">
        <EvolutionDiagram activeIndex={DIAGRAM_INDEX} />
      </div>
    </SlideWrapper>
  )
}

export const slidesReveal = [SlideReveal01, SlideReveal02, SlideReveal03]
