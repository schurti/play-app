import type { ComponentType } from 'react'
import type { ToolId } from './ids'
import type { ToolProps } from './ToolProps'
import ColorTool from './color/ColorTool'
import NumberTool from './number/NumberTool'
import LetterTool from './letter/LetterTool'
import ShapeTool from './shape/ShapeTool'
import AnimalTool from './animal/AnimalTool'
import YogaTool from './yoga/YogaTool'
import StoryTool from './story/StoryTool'
import DiceTool from './dice/DiceTool'
import CommandsTool from './commands/CommandsTool'
import DanceTool from './dance/DanceTool'
import RhythmTool from './rhythm/RhythmTool'
import BreathTool from './breath/BreathTool'
import DrawTool from './draw/DrawTool'
import TreasureTool from './treasure/TreasureTool'
import MonsterTool from './monster/MonsterTool'
import ExplainTool from './explain/ExplainTool'
import TermTool from './term/TermTool'

/** Alle Werkzeuge statisch gebündelt (offline-sicher); ein fehlendes Werkzeug ist ein Typfehler. */
export const TOOLS: Record<ToolId, ComponentType<ToolProps>> = {
  color: ColorTool,
  number: NumberTool,
  letter: LetterTool,
  shape: ShapeTool,
  animal: AnimalTool,
  yoga: YogaTool,
  story: StoryTool,
  dice: DiceTool,
  commands: CommandsTool,
  dance: DanceTool,
  rhythm: RhythmTool,
  breath: BreathTool,
  draw: DrawTool,
  treasure: TreasureTool,
  monster: MonsterTool,
  explain: ExplainTool,
  term: TermTool,
}
