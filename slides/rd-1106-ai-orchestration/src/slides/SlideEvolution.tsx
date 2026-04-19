import { SlideWrapper } from '../components/SlideWrapper'
import { EvolutionDiagram } from '../components/EvolutionDiagram'

const STAGE_CARDS = [
  {
    icon: '💬',
    label: 'Chatbot',
    desc: 'Hỏi - đáp theo kịch bản định sẵn',
    gradient: 'from-sky-50 to-sky-100',
    border: 'border-sky-200',
    accent: 'text-sky-700',
    badge: 'bg-sky-500',
  },
  {
    icon: '🤖',
    label: 'AI Agent',
    desc: 'Tự lên kế hoạch và thực hiện nhiệm vụ',
    gradient: 'from-violet-50 to-violet-100',
    border: 'border-violet-200',
    accent: 'text-violet-700',
    badge: 'bg-violet-500',
  },
  {
    icon: '🧑‍💼',
    label: 'Personal AI',
    desc: 'Trợ lý cá nhân hóa sâu cho từng người',
    gradient: 'from-emerald-50 to-emerald-100',
    border: 'border-emerald-200',
    accent: 'text-emerald-700',
    badge: 'bg-emerald-500',
  },
  {
    icon: '🎼',
    label: 'AI Orchestration',
    desc: 'Phối hợp nhiều AI Agent làm việc cùng nhau',
    gradient: 'from-orange-50 to-orange-100',
    border: 'border-orange-200',
    accent: 'text-orange-700',
    badge: 'bg-orange-500',
  },
  {
    icon: '✨',
    label: '?',
    desc: 'Giai đoạn tiếp theo - chưa ai biết trước',
    gradient: 'from-amber-50 to-yellow-100',
    border: 'border-amber-300',
    accent: 'text-amber-700',
    badge: 'bg-amber-400',
  },
]

type SlideEvolutionProps = {
  highlightedStage?: number
}

export function SlideEvolution({ highlightedStage }: SlideEvolutionProps) {
  const hasHighlight = highlightedStage !== undefined && highlightedStage >= 0
  return (
    <SlideWrapper>
      <div className="mb-3">
        <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded">
          Lộ trình tiến hóa
        </span>
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
        AI trong doanh nghiệp phát triển qua từng giai đoạn
      </h2>
      <p className="text-base text-gray-500 mb-6 max-w-2xl leading-relaxed">
        Mỗi bước tiến mở ra khả năng mới - từ trả lời câu hỏi đơn giản đến điều phối hàng trăm tác nhân AI làm việc cùng nhau.
      </p>
      <div className="flex gap-3 flex-1 items-stretch">
        {STAGE_CARDS.map((stage, i) => {
          const isHighlighted = hasHighlight && i === highlightedStage
          const isDimmed = hasHighlight && !isHighlighted
          return (
            <div
              key={stage.label}
              className={`flex-1 flex flex-col items-center justify-center rounded-2xl p-5 border-2 transition-all duration-200
                ${isHighlighted
                  ? `bg-gradient-to-br ${stage.gradient} ${stage.border} shadow-xl scale-105`
                  : isDimmed
                    ? `bg-gray-50 border-gray-200 opacity-40`
                    : `bg-gradient-to-br ${stage.gradient} ${stage.border}`
                }`}
            >
              <span className="text-4xl mb-3">{stage.icon}</span>
              <span className={`w-2 h-2 rounded-full ${stage.badge} mb-3`} />
              <p className={`text-base font-extrabold text-center mb-2 ${isHighlighted ? stage.accent : 'text-gray-800'}`}>
                {stage.label}
              </p>
              <p className={`text-xs text-center leading-snug ${isHighlighted ? stage.accent : 'text-gray-500'}`}>
                {stage.desc}
              </p>
            </div>
          )
        })}
      </div>
    </SlideWrapper>
  )
}

export function SlideEvolutionHighlight0() { return <SlideEvolution highlightedStage={0} /> }
export function SlideEvolutionHighlight1() { return <SlideEvolution highlightedStage={1} /> }
export function SlideEvolutionHighlight2() { return <SlideEvolution highlightedStage={2} /> }
export function SlideEvolutionHighlight3() { return <SlideEvolution highlightedStage={3} /> }
export function SlideEvolutionHighlight4() { return <SlideEvolution highlightedStage={4} /> }
