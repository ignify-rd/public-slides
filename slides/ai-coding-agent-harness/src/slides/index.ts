import type { ComponentType } from 'react'
import { SlideTitle } from './01-title'
import { SlideThesis } from './02-thesis'
import { SlideLoop } from './03-loop'
import { SlideClaudeMd } from './04-claude-md'
import { SlideContextEng } from './05-context'
import { SlideToolsIntro } from './06-tools-intro'
import {
  SlideSpecKit,
  SlideMCP,
  SlidePlaywright,
  SlideCodegraph,
  SlideImpeccable,
} from './tools'
import { SlideOrchestration } from './08-orchestration'
import { SlideVerification } from './14-verification'
import { SlideEval } from './07-eval'
import { SlideDemo1, SlideDemo2 } from './demo'
import { SlideDo, SlideDont } from './best-practices'
import { SlideClosing } from './10-closing'

export const slides: ComponentType[] = [
  SlideTitle,
  SlideThesis,
  SlideLoop,
  SlideClaudeMd,
  SlideContextEng,
  SlideToolsIntro,
  SlideSpecKit,
  SlideMCP,
  SlidePlaywright,
  SlideCodegraph,
  SlideImpeccable,
  SlideOrchestration,
  SlideVerification,
  SlideEval,
  SlideDemo1,
  SlideDemo2,
  SlideDo,
  SlideDont,
  SlideClosing,
]
