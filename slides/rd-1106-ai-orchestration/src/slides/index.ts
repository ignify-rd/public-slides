import { Slide01Title } from './Slide01Title'
import { slidesAIMindset } from './SlidesAIMindset'
import { SlideAIRealWorld } from './SlideAIRealWorld'
import {
  SlideEvolution,
  SlideEvolutionHighlight0,
  SlideEvolutionHighlight1,
  SlideEvolutionHighlight2,
  SlideEvolutionHighlight3,
  SlideEvolutionHighlight4,
} from './SlideEvolution'
import { slidesChatbot } from './SlidesChatbot'
import { slidesAIAgent } from './SlidesAIAgent'
import { slidesPersonalAssistant } from './SlidesPersonalAssistant'
import { slidesOrchestration } from './SlidesOrchestration'
import { slidesReveal } from './SlidesReveal'
import {
  SlideTransitionToChatbot,
  SlideTransitionToAIAgent,
  SlideTransitionToPersonalAssistant,
  SlideTransitionToOrchestration,
  SlideTransitionToReveal,
} from './SlidesTransition'

export const slides = [
  Slide01Title,
  ...slidesAIMindset,
  SlideAIRealWorld,
  SlideEvolution,
  SlideTransitionToChatbot,
  SlideEvolutionHighlight0,
  ...slidesChatbot,
  SlideTransitionToAIAgent,
  SlideEvolutionHighlight1,
  ...slidesAIAgent,
  SlideTransitionToPersonalAssistant,
  SlideEvolutionHighlight2,
  ...slidesPersonalAssistant,
  SlideTransitionToOrchestration,
  SlideEvolutionHighlight3,
  ...slidesOrchestration,
  SlideTransitionToReveal,
  SlideEvolutionHighlight4,
  ...slidesReveal,
]
