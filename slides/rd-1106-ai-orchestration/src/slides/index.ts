import { Slide01Title } from './Slide01Title'
import { slidesAIMindset } from './SlidesAIMindset'
import { SlideEvolution } from './SlideEvolution'
import { slidesChatbot } from './SlidesChatbot'
import { slidesAIAgent } from './SlidesAIAgent'
import { slidesPersonalAssistant } from './SlidesPersonalAssistant'
import { slidesOrchestration } from './SlidesOrchestration'
import { slidesReveal } from './SlidesReveal'

export const slides = [
  Slide01Title,
  ...slidesAIMindset,
  SlideEvolution,
  ...slidesChatbot,
  ...slidesAIAgent,
  ...slidesPersonalAssistant,
  ...slidesOrchestration,
  ...slidesReveal,
]
