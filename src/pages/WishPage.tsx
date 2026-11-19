import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import Art from '../components/Art'
import GameCard from '../components/GameCard'
import { GAMES } from '../games'
import type { Game } from '../games/types'
import { useGameNav } from '../hooks/useGameNav'
import { EMPTY_FILTERS, matchGame, type Filters } from '../lib/filter'
import { pick } from '../lib/random'
import styles from './WishPage.module.css'

type Wish = Pick<Filters, 'age' | 'dur' | 'mood' | 'place' | 'sofort'>

const START: Wish = { age: 0, dur: 0, mood: '', place: '', sofort: false }

function Question<T extends string | number | boolean>({
  title,
  value,
  options,
  onChange,
}: {
  title: string
  value: T
  options: readonly (readonly [T, ReactNode])[]
  onChange(v: T): void
}) {
  return (
    <fieldset className={styles.q}>
      <legend>{title}</legend>
      <div className={styles.opts}>
        {options.map(([v, label]) => (
          <button
            key={String(v)}
            className={v === value ? `${styles.opt} ${styles.on}` : styles.opt}
            aria-pressed={v === value}
            onClick={() => onChange(v)}
          >
            {label}
          </button>
        ))}
      </div>
    </fieldset>
  )
}

/** „Was spielen wir?“ – ein paar Fragen, dann ein passendes Zufallsspiel. */
export default function WishPage() {
  const { openGame } = useGameNav()
  const [w, setW] = useState<Wish>(START)
  const [game, setGame] = useState<Game | null>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  // Ergebnis ins Bild holen – es liegt unter den Fragen
  useEffect(() => {
    if (game)
      resultRef.current?.scrollIntoView?.({
        behavior: 'smooth',
        block: 'center',
      })
  }, [game])
  const pool = useMemo(
    () => GAMES.filter((g) => matchGame(g, { ...EMPTY_FILTERS, ...w })),
    [w],
  )
  const set = (patch: Partial<Wish>) => {
    setW((prev) => ({ ...prev, ...patch }))
    setGame(null)
  }
  const roll = () => {
    // Nicht zweimal dasselbe Spiel hintereinander
    const others = pool.length > 1 ? pool.filter((g) => g !== game) : pool
    setGame(pick(others))
  }

  return (
    <>
      <h2 className={styles.title}>
        <Art emoji="🪄" size={36} /> Was spielen wir?
      </h2>
      <p className="meta">Wählt aus, was passt – oder lasst es auf „Egal“.</p>

      <Question
        title="Wie viel Zeit habt ihr?"
        value={w.dur}
        options={[
          [0, 'Egal'],
          [10, '⏱️ Kurz'],
          [20, 'Bis 20 Min.'],
        ]}
        onChange={(dur) => set({ dur })}
      />
      <Question
        title="Wie ist die Stimmung?"
        value={w.mood}
        options={[
          ['', 'Egal'],
          ['wild', '🤸 Austoben'],
          ['ruhig', '🤫 Zur Ruhe kommen'],
        ]}
        onChange={(mood) => set({ mood })}
      />
      <Question
        title="Wo?"
        value={w.place}
        options={[
          ['', 'Egal'],
          ['drinnen', '🏠 Drinnen'],
          ['draussen', '🌳 Draussen'],
        ]}
        onChange={(place) => set({ place })}
      />
      <Question
        title="Material holen?"
        value={w.sofort}
        options={[
          [false, 'Egal'],
          [true, '⚡ Nein, sofort los'],
        ]}
        onChange={(sofort) => set({ sofort })}
      />
      <Question
        title="Wie alt ist das Kind?"
        value={w.age}
        options={[
          [0, 'Egal'],
          [1, '1'],
          [2, '2'],
          [3, '3'],
          [4, '4'],
          [5, '5'],
          [6, '6+'],
        ]}
        onChange={(age) => set({ age })}
      />

      <button className={styles.roll} onClick={roll} disabled={!pool.length}>
        🎲 {game ? 'Nochmal würfeln' : 'Spiel finden'}
        <small>
          {pool.length
            ? `${pool.length} passende Spiele`
            : 'Nichts passt – lockert eine Antwort'}
        </small>
      </button>

      {game && (
        <div ref={resultRef} className={styles.result} aria-live="polite">
          <div className={styles.card}>
            <GameCard game={game} />
          </div>
          <button className={styles.play} onClick={() => openGame(game.id)}>
            ▶ Los geht’s
          </button>
        </div>
      )}
    </>
  )
}
