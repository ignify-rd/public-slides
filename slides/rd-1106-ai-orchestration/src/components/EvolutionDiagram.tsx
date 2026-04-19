type EvolutionDiagramProps = {
  activeIndex?: number
}

const STEPS = [
  'Chatbot',
  'AI Agent',
  'Personal AI Assistant',
  'AI Orchestration',
  '?',
]

export function EvolutionDiagram({ activeIndex = -1 }: EvolutionDiagramProps) {
  return (
    <div className="flex items-center gap-2 w-full">
      {STEPS.map((label, i) => {
        const isActive = i === activeIndex
        return (
          <div key={label} className="flex items-center gap-2 flex-1">
            <div
              className={`flex-1 flex items-center justify-center rounded-lg px-3 py-4 text-center text-sm leading-snug transition-all
                ${isActive
                  ? 'border-2 border-blue-500 bg-blue-50 font-bold text-blue-700'
                  : 'border border-gray-300 bg-white font-medium text-gray-700'
                }`}
            >
              {label}
            </div>
            {i < STEPS.length - 1 && (
              <span className="text-gray-400 text-lg font-semibold select-none">-&gt;</span>
            )}
          </div>
        )
      })}
    </div>
  )
}
