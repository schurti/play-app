export const TOOL_IDS = [
  'color',
  'number',
  'letter',
  'shape',
  'animal',
  'yoga',
  'story',
  'panto',
  'dice',
  'commands',
  'dance',
  'rhythm',
  'breath',
  'treasure',
  'draw',
] as const

export type ToolId = (typeof TOOL_IDS)[number]
