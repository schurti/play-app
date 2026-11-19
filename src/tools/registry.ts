import { lazy, type ComponentType, type LazyExoticComponent } from 'react'
import type { ToolId } from './ids'
import type { ToolProps } from './ToolProps'

/** Lazy geladene Werkzeuge; ein fehlendes Werkzeug ist ein Typfehler. */
export const TOOLS: Record<
  ToolId,
  LazyExoticComponent<ComponentType<ToolProps>>
> = {
  color: lazy(() => import('./color/ColorTool')),
  number: lazy(() => import('./number/NumberTool')),
  letter: lazy(() => import('./letter/LetterTool')),
  shape: lazy(() => import('./shape/ShapeTool')),
  animal: lazy(() => import('./animal/AnimalTool')),
  yoga: lazy(() => import('./yoga/YogaTool')),
  story: lazy(() => import('./story/StoryTool')),
  panto: lazy(() => import('./panto/PantoTool')),
  dice: lazy(() => import('./dice/DiceTool')),
  commands: lazy(() => import('./commands/CommandsTool')),
  dance: lazy(() => import('./dance/DanceTool')),
  rhythm: lazy(() => import('./rhythm/RhythmTool')),
  breath: lazy(() => import('./breath/BreathTool')),
  draw: lazy(() => import('./draw/DrawTool')),
  treasure: lazy(() => import('./treasure/TreasureTool')),
}
