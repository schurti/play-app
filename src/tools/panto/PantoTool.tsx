import { useState } from 'react'
import { pick } from '../../lib/random'
import t from '../tool.module.css'
import { PANTO } from './cards'
import Art from '../../components/Art'

export default function PantoTool() {
  const [card, setCard] = useState(() => pick(PANTO))
  const [shown, setShown] = useState(false)
  return (
    <>
      {shown ? (
        <>
          <div className="meta">{card.kind}</div>
          <div className={t.huge}>
            <Art emoji={card.emoji} size={96} />
          </div>
          <div className={t.big}>{card.word}</div>
        </>
      ) : (
        <button className={t.secret} onClick={() => setShown(true)}>
          🤫 Nur wer dran ist: hier tippen
        </button>
      )}
      <div className={t.btns}>
        <button
          className={t.btn}
          onClick={() => {
            setShown(false)
            setCard(pick(PANTO))
          }}
        >
          🔄 Neue Karte
        </button>
      </div>
    </>
  )
}
