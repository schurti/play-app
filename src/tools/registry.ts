import { lazy, type ComponentType, type LazyExoticComponent } from 'react'
import type { ToolId } from './ids'
import type { ToolProps } from './ToolProps'

/** Lazy geladene Werkzeuge; Task 8 ergänzt die restlichen und macht daraus ein vollständiges Record. */
export const TOOLS: Partial<Record<ToolId, LazyExoticComponent<ComponentType<ToolProps>>>> = {
  color: lazy(() => import('./color/ColorTool')),
  number: lazy(() => import('./number/NumberTool')),
  letter: lazy(() => import('./letter/LetterTool')),
  shape: lazy(() => import('./shape/ShapeTool')),
  animal: lazy(() => import('./animal/AnimalTool')),
  yoga: lazy(() => import('./yoga/YogaTool')),
  story: lazy(() => import('./story/StoryTool')),
  panto: lazy(() => import('./panto/PantoTool')),
  dice: lazy(() => import('./dice/DiceTool')),
  treasure: lazy(() => import('./treasure/TreasureTool')),
}
