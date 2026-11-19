import { useState } from 'react'
import { pick } from '../../lib/random'
import NewButton from '../NewButton'
import t from '../tool.module.css'
import { COLORS } from './colors'

export default function ColorTool() {
  const [[name, hex], setColor] = useState(() => pick(COLORS))
  return (
    <>
      <div className={t.sw} style={{ background: hex }} />
      <div className={t.big}>Finde etwas in {name}!</div>
      <NewButton label="Neue Aufgabe" onNew={() => setColor(pick(COLORS))} />
    </>
  )
}
