import { useState } from 'react'
import Art from '../../components/Art'
import { tone } from '../../lib/audio'
import { shuffle } from '../../lib/random'
import t from '../tool.module.css'
import { EXPLAIN, type ExplainCard, type ExplainLevel } from './cards'

const LEVELS: readonly (readonly [ExplainLevel, string])[] = [
  ['bild', '🖼️ Bild-Karten'],
  ['wort', '🔤 Wort-Karten'],
]

interface Deck {
  level: ExplainLevel
  cards: ExplainCard[]
  pos: number
}

const newDeck = (level: ExplainLevel): Deck => ({
  level,
  cards: shuffle(EXPLAIN[level]),
  pos: 0,
})

/** Gemischter Stapel ohne Wiederholung; ist er durch, wird neu gemischt. */
export default function ExplainTool() {
  const [deck, setDeck] = useState(() => newDeck('bild'))
  const [shown, setShown] = useState(false)
  const card = deck.cards[deck.pos]

  const next = (ok: boolean) => {
    tone(ok ? 988 : 440, 0.08)
    setShown(false)
    setDeck((d) =>
      d.pos + 1 < d.cards.length ? { ...d, pos: d.pos + 1 } : newDeck(d.level),
    )
  }

  return (
    <>
      <div className={t.btns}>
        {LEVELS.map(([level, label]) => (
          <button
            key={level}
            className={`${t.btn} ${t.sm} ${deck.level === level ? '' : t.alt}`}
            aria-pressed={deck.level === level}
            onClick={() => {
              if (deck.level === level) return
              setDeck(newDeck(level))
              setShown(false)
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="meta">
        {deck.level === 'bild'
          ? 'Für alle, auch ohne Lesen'
          : 'Für Kinder, die lesen können, und Erwachsene'}
      </div>
      {shown ? (
        <>
          <div className="meta">{card.kind}</div>
          {card.emoji && (
            <div className={t.huge}>
              <Art emoji={card.emoji} size={96} />
            </div>
          )}
          <div className={t.big}>{card.word}</div>
          <div className="meta">Erkläre es, ohne das Wort zu sagen!</div>
        </>
      ) : (
        <button className={t.secret} onClick={() => setShown(true)}>
          🤫 Nur wer erklärt: hier tippen
        </button>
      )}
      <div className={t.btns}>
        <button className={t.btn} onClick={() => next(true)}>
          🎉 Erraten!
        </button>
        <button className={`${t.btn} ${t.alt}`} onClick={() => next(false)}>
          ⏭️ Weiter
        </button>
      </div>
    </>
  )
}
