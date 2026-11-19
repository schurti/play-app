import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useToast } from '../components/Toast'
import { GAMES, getGame } from '../games'
import { CATEGORIES, CATEGORY_IDS } from '../games/categories'
import { badges, catProgress } from '../lib/progress'
import { useProgress } from '../store/progress'
import styles from './StickerPage.module.css'

const WIPE_LABEL = 'Fortschritt zurücksetzen'
const ARMED_LABEL = 'Wirklich alles löschen? Nochmal tippen'

function cls(...parts: (string | false)[]): string {
  return parts.filter(Boolean).join(' ')
}

export default function StickerPage() {
  const { stars, done, hist, reset } = useProgress()
  const toast = useToast()
  const [armed, setArmed] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])

  const distinct = Object.keys(done).length
  const total = Object.values(done).reduce((a, b) => a + b, 0)

  function wipe() {
    clearTimeout(timer.current)
    if (!armed) {
      setArmed(true)
      timer.current = setTimeout(() => setArmed(false), 4000)
      return
    }
    reset()
    setArmed(false)
    toast('Fortschritt zurückgesetzt')
  }

  const recent = hist.slice(0, 10).flatMap((h) => {
    const g = getGame(h.id)
    return g ? [{ g, t: h.t }] : []
  })

  return (
    <>
      <h3 className={styles.h3}>🏆 Sticker-Album</h3>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <b>⭐ {stars}</b>
          <span>Sterne</span>
        </div>
        <div className={styles.stat}>
          <b>{distinct}/{GAMES.length}</b>
          <span>Spiele entdeckt</span>
        </div>
        <div className={styles.stat}>
          <b>{total}</b>
          <span>Mal gespielt</span>
        </div>
      </div>
      <div className={`meta ${styles.intro}`}>
        Spielt 3 verschiedene Spiele einer Kategorie für einen Sticker. Alle Spiele einer Kategorie
        geschafft? Dann wird er golden!
      </div>
      <ul className={styles.stickers} aria-label="Kategorie-Sticker">
        {CATEGORY_IDS.map((k) => {
          const c = CATEGORIES[k]
          const p = catProgress(GAMES, done, k)
          const got = p.done >= 3
          const gold = p.done === p.all
          return (
            <li
              key={k}
              className={cls(styles.st, got && styles.got, gold && styles.gold)}
              style={{ '--c': c.color } as CSSProperties}
            >
              <div className={styles.e}>{c.emoji}</div>
              <b>{c.name}</b>
              <span className="meta">
                {gold ? 'Gold! ✨' : got ? 'Sticker erhalten' : `${Math.min(p.done, 3)} / 3`} · {p.done}/{p.all}
              </span>
              <div className={styles.bar}>
                <i style={{ width: `${Math.round((p.done / p.all) * 100)}%` }} />
              </div>
            </li>
          )
        })}
      </ul>
      <h3 className={styles.h3}>🎖️ Entdecker-Abzeichen</h3>
      <ul className={styles.stickers} aria-label="Entdecker-Abzeichen">
        {badges(GAMES.length).map((b) => (
          <li
            key={b.min}
            className={cls(styles.st, distinct >= b.min && styles.got)}
            style={{ '--c': '#f59e0b' } as CSSProperties}
          >
            <div className={styles.e}>{b.emoji}</div>
            <b>{b.name}</b>
            <span className="meta">
              {Math.min(distinct, b.min)} / {b.min} Spiele
            </span>
          </li>
        ))}
      </ul>
      <h3 className={styles.h3}>📜 Zuletzt gespielt</h3>
      <div className={`meta ${styles.history}`}>
        {recent.length
          ? recent.map(({ g, t }, i) => (
              <div key={i}>
                {g.emoji} {g.title}{' '}
                <span className={styles.date}>
                  · {new Date(t).toLocaleDateString('de-CH', { day: 'numeric', month: 'short' })}
                </span>
              </div>
            ))
          : 'Noch nichts gespielt – los geht’s!'}
      </div>
      <div className={styles.note}>
        <button className="reset" onClick={wipe}>
          {armed ? ARMED_LABEL : WIPE_LABEL}
        </button>
        <br />
        Sterne und Favoriten werden nur in diesem Browser gespeichert.
      </div>
    </>
  )
}
