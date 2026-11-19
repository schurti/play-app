import { useState } from 'react'
import { pick } from '../../lib/random'
import NewButton from '../NewButton'
import t from '../tool.module.css'
import { YOGA } from './poses'
import Art from '../../components/Art'

export default function YogaTool() {
  const [y, setPose] = useState(() => pick(YOGA))
  return (
    <>
      <div className={t.huge}>
        <Art emoji={y.emoji} size={96} />
      </div>
      <div className={t.big}>{y.name}</div>
      <div>{y.how}</div>
      <div className="meta" style={{ marginTop: 6 }}>
        5 Atemzüge halten
      </div>
      <NewButton label="Neue Figur" onNew={() => setPose(pick(YOGA))} />
    </>
  )
}
