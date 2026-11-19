import { useState } from 'react'
import { pick } from '../../lib/random'
import NewButton from '../NewButton'
import t from '../tool.module.css'
import { YOGA } from './poses'
import { FIGURES } from './figures'
import PoseFigure from './PoseFigure'
import Art from '../../components/Art'
import s from './yoga.module.css'

export default function YogaTool() {
  const [y, setPose] = useState(() => pick(YOGA))
  const fig = FIGURES[y.name]
  return (
    <>
      {fig ? (
        <div className={s.stage}>
          <PoseFigure fig={fig} label={y.name} />
          <Art emoji={y.emoji} size={52} className={s.animal} />
        </div>
      ) : (
        <div className={t.huge}>
          <Art emoji={y.emoji} size={96} />
        </div>
      )}
      <div className={t.big}>{y.name}</div>
      <div>{y.how}</div>
      <div className="meta" style={{ marginTop: 6 }}>
        5 Atemzüge halten
      </div>
      <NewButton label="Neue Figur" onNew={() => setPose(pick(YOGA))} />
    </>
  )
}
