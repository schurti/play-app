import { useState } from 'react'
import { pick } from '../../lib/random'
import NewButton from '../NewButton'
import t from '../tool.module.css'
import { LETTERS } from './letters'

export default function LetterTool() {
  const [letter, setLetter] = useState(() => pick(LETTERS))
  return (
    <>
      <div className={t.big}>Finde etwas mit</div>
      <div className={t.huge} style={{ fontWeight: 800 }}>
        {letter}
      </div>
      <NewButton label="Neue Aufgabe" onNew={() => setLetter(pick(LETTERS))} />
    </>
  )
}
