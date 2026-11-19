import type { ComponentType, LazyExoticComponent } from 'react'
import type { ToolId } from './ids'
import type { ToolProps } from './ToolProps'

/** Wird in den Tasks 7/8 mit lazy geladenen Werkzeugen gefüllt. */
export const TOOLS: Partial<Record<ToolId, LazyExoticComponent<ComponentType<ToolProps>>>> = {}
