import { SlideWrapper } from '../components/SlideWrapper'

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
    </SlideWrapper>
  )
}

export const slidesReveal = [SlideReveal01, SlideReveal02]
