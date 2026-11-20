export const TOOL_IDS = [
  'color',
  'number',
  'letter',
  'shape',
  'animal',
  'yoga',
  'story',
  'dice',
  'commands',
  'dance',
  'rhythm',
  'breath',
  'treasure',
  'draw',
  'monster',
  'explain',
  'term',
] as const

export type ToolId = (typeof TOOL_IDS)[number]
