import { useState } from 'react'
import { pick } from '../../lib/random'
import NewButton from '../NewButton'
import t from '../tool.module.css'
import { ANIMALS } from './animals'
import Art from '../../components/Art'

export default function AnimalTool() {
  const [a, setAnimal] = useState(() => pick(ANIMALS))
  return (
    <>
      <div className={t.huge}>
        <Art emoji={a.emoji} size={96} />
      </div>
      <div className={t.big}>
        Bewegt euch wie {a.article} {a.name}!
      </div>
      <div className="meta">{a.move}</div>
      <NewButton label="Neues Tier" onNew={() => setAnimal(pick(ANIMALS))} />
    </>
  )
}
