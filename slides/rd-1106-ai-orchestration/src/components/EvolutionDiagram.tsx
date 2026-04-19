type EvolutionDiagramProps = {
  highlightedStage?: number
}

const STEPS = [
  {
    label: 'Chatbot',
    icon: '💬',
    gradientFrom: 'from-sky-500',
    gradientTo: 'to-sky-700',
    borderHighlight: 'border-sky-500',
  },
  {
    label: 'AI Agent',
    icon: '🤖',
    gradientFrom: 'from-violet-500',
    gradientTo: 'to-violet-700',
    borderHighlight: 'border-violet-500',
  },
  {
    label: 'Personal AI',
    icon: '🧑‍💼',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-emerald-700',
    borderHighlight: 'border-emerald-500',
  },
  {
    label: 'AI Orchestration',
    icon: '🎼',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-orange-700',
    borderHighlight: 'border-orange-500',
  },
  {
    label: '?',
    icon: '✨',
    gradientFrom: 'from-amber-400',
    gradientTo: 'to-yellow-600',
    borderHighlight: 'border-amber-400',
  },
]

export function EvolutionDiagram({ highlightedStage }: EvolutionDiagramProps) {
  const hasHighlight = highlightedStage !== undefined && highlightedStage >= 0
  return (
    <div className="flex items-center gap-2 w-full">
      {STEPS.map((step, i) => {
        const isHighlighted = hasHighlight && i === highlightedStage
        const isDimmed = hasHighlight && !isHighlighted
        return (
          <div key={step.label} className="flex items-center gap-2 flex-1">
            <div
              className={`flex-1 flex flex-col items-center justify-center rounded-xl px-2 py-3 text-center transition-all duration-200
                ${isHighlighted
                  ? `bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} border-2 ${step.borderHighlight} text-white font-bold shadow-lg`
                  : isDimmed
                    ? 'border border-gray-200 bg-gray-50 opacity-40'
                    : 'border border-gray-300 bg-white font-medium text-gray-700 hover:border-gray-400'
                }`}
            >
              <span className="text-base mb-0.5">{step.icon}</span>
              <span className={`text-xs leading-snug ${isHighlighted ? 'text-white' : 'text-gray-700'}`}>
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span className={`text-base font-semibold select-none flex-none ${isDimmed ? 'text-gray-200' : 'text-gray-400'}`}>
                →
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}
