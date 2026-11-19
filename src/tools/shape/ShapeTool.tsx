import { useState } from 'react'
import { pick } from '../../lib/random'
import NewButton from '../NewButton'
import type { ToolProps } from '../ToolProps'
import t from '../tool.module.css'
import { SHAPES } from './shapes'

const NAMES = Object.keys(SHAPES)

export default function ShapeTool({ color }: ToolProps) {
  const [name, setName] = useState(() => pick(NAMES))
  return (
    <>
      <svg viewBox="0 0 120 120" width="120" height="120" style={{ fill: color }} aria-hidden="true">
        {SHAPES[name]}
      </svg>
      <div className={t.big}>Finde etwas mit der Form: {name}!</div>
      <NewButton label="Neue Aufgabe" onNew={() => setName(pick(NAMES))} />
    </>
  )
}
