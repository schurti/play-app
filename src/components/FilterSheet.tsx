import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { GAMES } from '../games'
import { ITEM_GROUP, ITEM_GROUPS } from '../games/itemGroups'
import type { Item } from '../games/items'
import { useTouchGestures } from '../hooks/useTouchGestures'
import { EMPTY_FILTERS, itemsByFrequency, type Filters } from '../lib/filter'
import { normalize } from '../lib/search'
import styles from './FilterSheet.module.css'

const AGES = [
  [0, 'Egal'],
  [1, '1 J.'],
  [2, '2 J.'],
  [3, '3 J.'],
  [4, '4 J.'],
  [5, '5 J.'],
  [6, '6+ J.'],
] as const
const DURS = [
  [0, 'Egal'],
  [10, 'Bis 10 Min.'],
  [20, 'Bis 20 Min.'],
  [99, 'Länger'],
] as const
const WHO = [
  ['', 'Egal'],
  ['allein', '🧍 Allein spielbar'],
  ['gruppe', '👫 Für Gruppen'],
] as const
const PLACE = [
  ['', 'Egal'],
  ['drinnen', '🏠 Drinnen'],
  ['draussen', '🌳 Draussen'],
] as const
const MOOD = [
  ['', 'Egal'],
  ['ruhig', '🤫 Ruhig'],
  ['wild', '🤸 Wild'],
] as const

/** Gegenstände je Gruppe, häufigste zuerst. */
const ITEMS_BY_GROUP = ITEM_GROUPS.map(
  (grp) =>
    [
      grp,
      itemsByFrequency(GAMES).filter((i) => ITEM_GROUP[i] === grp),
    ] as const,
)

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
      aria-pressed={on}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className={styles.section}>
      <legend className={styles.lab}>{title}</legend>
      <div className={styles.wraprow}>{children}</div>
    </fieldset>
  )
}

/** Alle Filter in einem Sheet von unten; Änderungen wirken sofort. */
export default function FilterSheet({
  filters: f,
  onChange,
  count,
  onClose,
}: {
  filters: Filters
  onChange(patch: Partial<Filters>): void
  count: number
  onClose(): void
}) {
  const sheetRef = useRef<HTMLDivElement>(null)
  const [itemQ, setItemQ] = useState('')

  useLayoutEffect(() => {
    document.body.classList.add('lock')
    return () => document.body.classList.remove('lock')
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  useTouchGestures(sheetRef, {
    onPull(dy) {
      const el = sheetRef.current
      if (!el) return
      el.style.transition = 'none'
      el.style.transform = `translateY(${dy}px)`
    },
    onPullEnd(dy) {
      const el = sheetRef.current
      if (dy > 140) {
        onClose()
        return
      }
      if (el) {
        el.style.transition = 'transform 0.25s cubic-bezier(0.2, 0.9, 0.3, 1)'
        el.style.transform = ''
      }
    },
  })

  const toggleItem = (i: Item) =>
    onChange({
      have: f.have.includes(i) ? f.have.filter((x) => x !== i) : [...f.have, i],
    })
  const nq = normalize(itemQ.trim())

  return (
    <div className={styles.bg} onClick={onClose}>
      <div
        ref={sheetRef}
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-label="Filter"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.handle} aria-hidden="true" />
        <div className={styles.head}>
          <h2>Filter</h2>
          <button
            className={styles.close}
            onClick={onClose}
            aria-label="Schliessen"
          >
            ✕
          </button>
        </div>

        <Section title="Alter des Kindes">
          {AGES.map(([v, l]) => (
            <Chip key={v} on={f.age === v} onClick={() => onChange({ age: v })}>
              {l}
            </Chip>
          ))}
        </Section>
        <Section title="Dauer">
          {DURS.map(([v, l]) => (
            <Chip key={v} on={f.dur === v} onClick={() => onChange({ dur: v })}>
              {l}
            </Chip>
          ))}
        </Section>
        <Section title="Mitspieler">
          {WHO.map(([v, l]) => (
            <Chip key={v} on={f.who === v} onClick={() => onChange({ who: v })}>
              {l}
            </Chip>
          ))}
        </Section>
        <Section title="Ort">
          {PLACE.map(([v, l]) => (
            <Chip
              key={v}
              on={f.place === v}
              onClick={() => onChange({ place: v })}
            >
              {l}
            </Chip>
          ))}
        </Section>
        <Section title="Stimmung">
          {MOOD.map(([v, l]) => (
            <Chip
              key={v}
              on={f.mood === v}
              onClick={() => onChange({ mood: v })}
            >
              {l}
            </Chip>
          ))}
        </Section>
        <Section title="Extras">
          <Chip on={f.sofort} onClick={() => onChange({ sofort: !f.sofort })}>
            ⚡ Sofort (ohne Material)
          </Chip>
          <Chip on={f.app} onClick={() => onChange({ app: !f.app })}>
            📱 Mit App
          </Chip>
          <Chip on={f.stift} onClick={() => onChange({ stift: !f.stift })}>
            ✏️ Nur Stift & Papier
          </Chip>
        </Section>

        <fieldset className={styles.section}>
          <legend className={styles.lab}>Was habt ihr gerade da?</legend>
          <p className={`meta ${styles.hint}`}>
            Zeigt nur Spiele, für die ihr alles Gewählte habt.
            {f.have.length ? ` (${f.have.length} gewählt)` : ''}
          </p>
          <input
            type="search"
            className={styles.itemSearch}
            placeholder="Material suchen …"
            aria-label="Material suchen"
            value={itemQ}
            onChange={(e) => setItemQ(e.target.value)}
          />
          {ITEMS_BY_GROUP.map(([grp, items]) => {
            const shown = nq
              ? items.filter((i) => normalize(i).includes(nq))
              : items
            if (!shown.length) return null
            return (
              <div key={grp}>
                <div className={styles.group}>{grp}</div>
                <div className={styles.wraprow}>
                  {shown.map((i) => (
                    <Chip
                      key={i}
                      on={f.have.includes(i)}
                      onClick={() => toggleItem(i)}
                    >
                      {i}
                    </Chip>
                  ))}
                </div>
              </div>
            )
          })}
        </fieldset>

        <div className={styles.foot}>
          <button
            className="reset"
            onClick={() => onChange({ ...EMPTY_FILTERS, q: f.q, sort: f.sort })}
          >
            Zurücksetzen
          </button>
          <button className={styles.show} onClick={onClose}>
            {count} {count === 1 ? 'Spiel' : 'Spiele'} anzeigen
          </button>
        </div>
      </div>
    </div>
  )
}
