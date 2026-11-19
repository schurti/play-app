import type { ReactNode } from 'react'
import { GAMES } from '../games'
import type { Tag } from '../games/types'
import { itemsByFrequency } from '../lib/filter'
import { useFilters } from '../store/filters'
import styles from './FilterPanel.module.css'

const AGES = [
  [0, 'Alle'],
  [3, '3 J.'],
  [4, '4 J.'],
  [5, '5 J.'],
  [6, '6+ J.'],
] as const
const DURS = [
  [0, 'Alle'],
  [10, 'bis 10 Min.'],
  [20, 'bis 20 Min.'],
  [99, 'länger'],
] as const
const SIT: readonly (readonly [Tag | 'ohne', string])[] = [
  ['allein', '🧍 Allein spielbar'],
  ['gruppe', '👫 Für Gruppen & Partys'],
  ['leise', '🤫 Leise'],
  ['ohne', '⚡ Ohne Material'],
]
const ITEMS = itemsByFrequency(GAMES)

function Chip({
  on,
  onClick,
  children,
}: {
  on: boolean
  onClick(): void
  children: ReactNode
}) {
  return (
    <button
      className={on ? `${styles.chip} ${styles.on}` : styles.chip}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default function FilterPanel() {
  const { age, dur, sit, have, set, toggleSit, toggleHave } = useFilters()
  return (
    <div className={styles.panel}>
      <div className={styles.lab}>Alter des Kindes</div>
      <div className={styles.wraprow}>
        {AGES.map(([v, l]) => (
          <Chip key={v} on={age === v} onClick={() => set({ age: v })}>
            {l}
          </Chip>
        ))}
      </div>
      <div className={styles.lab}>Dauer</div>
      <div className={styles.wraprow}>
        {DURS.map(([v, l]) => (
          <Chip key={v} on={dur === v} onClick={() => set({ dur: v })}>
            {l}
          </Chip>
        ))}
      </div>
      <div className={styles.lab}>Situation</div>
      <div className={styles.wraprow}>
        {SIT.map(([k, l]) => (
          <Chip key={k} on={!!sit[k]} onClick={() => toggleSit(k)}>
            {l}
          </Chip>
        ))}
      </div>
      <div className={styles.lab}>Was habt ihr gerade da?</div>
      <div className={`meta ${styles.hint}`}>
        Leer lassen = alles zeigen. Sonst nur Spiele, für die ihr alles habt.
      </div>
      <div className={styles.wraprow}>
        {ITEMS.map((i) => (
          <Chip key={i} on={!!have[i]} onClick={() => toggleHave(i)}>
            {i}
          </Chip>
        ))}
      </div>
      <button
        className="reset"
        onClick={() => set({ age: 0, dur: 0, sit: {}, have: {} })}
      >
        ✕ Alle Filter zurücksetzen
      </button>
    </div>
  )
}
