import { useState } from 'react'
import Art from '../../components/Art'
import { tone } from '../../lib/audio'
import { shuffle } from '../../lib/random'
import NewButton from '../NewButton'
import t from '../tool.module.css'
import type { ToolProps } from '../ToolProps'
import { TERM_DECKS, type TermDeck } from './decks'
import type { TermCard } from './parse'

interface Pile {
  level: number
  cards: TermCard[]
  pos: number
}

const newPile = (deck: TermDeck, level: number): Pile => ({
  level,
  cards: shuffle(deck.levels[level].cards),
  pos: 0,
})

/**
 * Schlägt einen Begriff aus dem Stapel des Spiels vor. Gemischt und ohne
 * Wiederholung, bis der Stapel durch ist.
 */
export default function TermTool({ game }: ToolProps) {
  const deck = TERM_DECKS[game.id]
  if (!deck) return null
  return <TermCards key={game.id} deck={deck} />
}

function TermCards({ deck }: { deck: TermDeck }) {
  const [pile, setPile] = useState(() => newPile(deck, 0))
  const [shown, setShown] = useState(!deck.secret)
  const [hint, setHint] = useState(false)
  const card = pile.cards[pile.pos]
  const level = deck.levels[pile.level]

  const reset = () => {
    setShown(!deck.secret)
    setHint(false)
  }
  const next = () => {
    reset()
    setPile((p) =>
      p.pos + 1 < p.cards.length
        ? { ...p, pos: p.pos + 1 }
        : newPile(deck, p.level),
    )
  }

  return (
    <>
      {deck.levels.length > 1 && (
        <div className={t.btns}>
          {deck.levels.map((l, i) => (
            <button
              key={l.label}
              className={`${t.btn} ${t.sm} ${pile.level === i ? '' : t.alt}`}
              aria-pressed={pile.level === i}
              onClick={() => {
                if (pile.level === i) return
                setPile(newPile(deck, i))
                reset()
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
      {deck.levels.length > 1 && level.note && (
        <div className="meta">{level.note}</div>
      )}
      {shown ? (
        <>
          {card.emoji && (
            <div className={t.huge}>
              <Art emoji={card.emoji} size={96} />
            </div>
          )}
          <div className={t.big}>{card.word}</div>
          {card.hint && (deck.hint === 'show' || hint) && (
            <div className={t.hint}>{card.hint}</div>
          )}
          <div className="meta">{deck.task}</div>
        </>
      ) : (
        <button className={t.secret} onClick={() => setShown(true)}>
          🤫 Nur wer dran ist: hier tippen
        </button>
      )}
      {shown && card.hint && deck.hint === 'tap' && !hint && (
        <div className={t.btns}>
          <button
            className={`${t.btn} ${t.alt} ${t.sm}`}
            onClick={() => setHint(true)}
          >
            {deck.hintLabel ?? '💡 Lösung'}
          </button>
        </div>
      )}
      {deck.guess ? (
        <div className={t.btns}>
          <button
            className={t.btn}
            onClick={() => {
              tone(988, 0.08)
              next()
            }}
          >
            🎉 Erraten!
          </button>
          <button
            className={`${t.btn} ${t.alt}`}
            onClick={() => {
              tone(440, 0.08)
              next()
            }}
          >
            ⏭️ Weiter
          </button>
        </div>
      ) : (
        <NewButton label={deck.next ?? 'Neuer Begriff'} onNew={next} />
      )}
    </>
  )
}
