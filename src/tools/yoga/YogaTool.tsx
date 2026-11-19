import { useState } from 'react'
import { pick } from '../../lib/random'
import NewButton from '../NewButton'
import t from '../tool.module.css'
import { YOGA } from './poses'

export default function YogaTool() {
  const [y, setPose] = useState(() => pick(YOGA))
  return (
    <>
      <div className={t.huge}>{y.emoji}</div>
      <div className={t.big}>{y.name}</div>
      <div>{y.how}</div>
      <div className="meta" style={{ marginTop: 6 }}>
        5 Atemzüge halten
      </div>
      <NewButton label="Neue Figur" onNew={() => setPose(pick(YOGA))} />
    </>
  )
}
