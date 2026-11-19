import { useMemo, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import Art from '../components/Art'
import FilterPills from '../components/FilterPills'
import FilterSheet from '../components/FilterSheet'
import GameGrid from '../components/GameGrid'
import MoreButton from '../components/MoreButton'
import QuickFilters from '../components/QuickFilters'
import { GAMES } from '../games'
import { CATEGORIES, WORLDS, catVars } from '../games/categories'
import type { Game } from '../games/types'
import { useFilterParams } from '../hooks/useFilterParams'
import { useProgressive } from '../hooks/useProgressive'
import {
  activeFilterCount,
  activeFilters,
  itemsByFrequency,
  searchGames,
  type Filters,
  type Sort,
} from '../lib/filter'
import { loadSearches, saveSearch } from '../lib/recentSearches'
import { normalize, tokenize } from '../lib/search'
import styles from './pages.module.css'
import s from './SearchPage.module.css'

const POPULAR = itemsByFrequency(GAMES).slice(0, 10)
const WORLD_CATS = WORLDS.flatMap((w) => w.cats)

/** Vorschläge, welche Einschränkung man lockern könnte, wenn nichts passt. */
function relaxations(f: Filters) {
  const q = f.q.trim()
  const opts = activeFilters(f).map((a) => ({
    label: `Ohne „${a.label}“`,
    next: a.without,
  }))
  if (q) opts.push({ label: `Ohne Suchwort „${q}“`, next: { ...f, q: '' } })
  return opts
    .map((o) => ({ ...o, n: searchGames(GAMES, o.next).length }))
    .filter((o) => o.n > 0)
    .sort((a, b) => b.n - a.n)
    .slice(0, 3)
}

function Grouped({ games }: { games: readonly Game[] }) {
  // Schrittweise, sonst dauert das Anzeigen vieler Treffer spürbar
  const { shown, more, rest, showMore, sentinel } = useProgressive(games)
  const groups = WORLD_CATS.map((id) => {
    const list = shown.filter((g) => g.category === id)
    if (!list.length) return null
    const total = games.filter((g) => g.category === id).length
    return (
      <section key={id} aria-label={CATEGORIES[id].name}>
        <h2 className={styles.group} style={catVars(id)}>
          <Art emoji={CATEGORIES[id].emoji} size={24} />
          <Link to={'/k/' + id}>{CATEGORIES[id].name}</Link>
          <small>{total}</small>
        </h2>
        <GameGrid games={list} empty={null} paged={false} />
      </section>
    )
  })
  return (
    <>
      {groups}
      {more && <MoreButton rest={rest} onMore={showMore} sentinel={sentinel} />}
    </>
  )
}

export default function SearchPage() {
  const { filters: f, setFilters } = useFilterParams()
  const location = useLocation()
  const [sheetOpen, setSheetOpen] = useState(false)
  const [recent, setRecent] = useState(loadSearches)
  const results = useMemo(() => searchGames(GAMES, f), [f])
  const q = f.q.trim()
  const n = activeFilterCount(f)
  const focus = Boolean((location.state as { focus?: boolean } | null)?.focus)
  // Ohne Suchwort und Filter: Startansicht statt aller Spiele
  const idle = !q && !n && f.sort === 'passend'

  const tokens = tokenize(q)
  const catHits = q
    ? WORLD_CATS.filter((id) => {
        const name = normalize(CATEGORIES[id].name)
        return tokens.every((t) => name.includes(t))
      })
    : []

  const remember = () => {
    if (q) setRecent(saveSearch(q))
  }

  let list: ReactNode = null
  if (idle) {
    // nichts – Startansicht
  } else if (!results.length) {
    const relax = relaxations(f)
    list = (
      <div className={s.empty}>
        <p>😮 Keine Spiele passen{q ? ` zu „${q}“` : ''}.</p>
        {relax.length > 0 && (
          <div className={s.relax}>
            {relax.map((r) => (
              <button key={r.label} onClick={() => setFilters(r.next)}>
                {r.label}: {r.n} {r.n === 1 ? 'Spiel' : 'Spiele'}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  } else if (!q && f.sort === 'passend') {
    list = <Grouped games={results} />
  } else {
    list = <GameGrid games={results} empty={null} />
  }

  return (
    <>
      <div className={styles.bar}>
        <form
          role="search"
          className={styles.search}
          onSubmit={(e) => {
            e.preventDefault()
            remember()
            ;(document.activeElement as HTMLElement | null)?.blur()
          }}
        >
          <input
            id="suche-eingabe"
            type="search"
            aria-label="Spiele suchen"
            placeholder="Ballon, leise, Würfel …"
            autoComplete="off"
            enterKeyHint="search"
            autoFocus={focus}
            value={f.q}
            onChange={(e) => setFilters({ q: e.target.value })}
          />
          <button
            type="button"
            className={n > 0 ? `${styles.fbtn} ${styles.act}` : styles.fbtn}
            aria-haspopup="dialog"
            onClick={() => setSheetOpen(true)}
          >
            ⚙️ Filter{n ? ` (${n})` : ''}
          </button>
        </form>
        <QuickFilters filters={f} onChange={(p) => setFilters(p)} />
        <FilterPills filters={f} onChange={(next) => setFilters(next)} />
      </div>

      {idle && (
        <div className={s.start}>
          <p className="meta">
            Sucht nach Namen, Material oder Stichworten – oder wählt oben einen
            Filter. Zum Stöbern gibt es <Link to="/">Entdecken</Link>.
          </p>
          {recent.length > 0 && (
            <>
              <div className={s.lab}>Zuletzt gesucht</div>
              <div className={s.chips}>
                {recent.map((r) => (
                  <button key={r} onClick={() => setFilters({ q: r })}>
                    🕘 {r}
                  </button>
                ))}
              </div>
            </>
          )}
          <div className={s.lab}>Spiele mit …</div>
          <div className={s.chips}>
            {POPULAR.map((i) => (
              <button key={i} onClick={() => setFilters({ q: i })}>
                {i}
              </button>
            ))}
          </div>
        </div>
      )}

      {catHits.length > 0 && (
        <div className={s.chips} aria-label="Passende Kategorien">
          {catHits.map((id) => (
            <Link
              key={id}
              to={'/k/' + id}
              style={catVars(id)}
              className={s.cat}
            >
              <Art emoji={CATEGORIES[id].emoji} size={20} />
              {CATEGORIES[id].name}
            </Link>
          ))}
        </div>
      )}

      {!idle && results.length > 0 && (
        <div className={s.meta}>
          <span
            className={styles.count}
            aria-live="polite"
            data-testid="treffer"
          >
            {results.length} {results.length === 1 ? 'Spiel' : 'Spiele'}
          </span>
          <label className={s.sort}>
            <span className="sr-only">Sortierung</span>
            <select
              value={f.sort}
              onChange={(e) => setFilters({ sort: e.target.value as Sort })}
            >
              <option value="passend">
                {q ? 'Passendste zuerst' : 'Nach Kategorie'}
              </option>
              <option value="kurz">Kürzeste zuerst</option>
              <option value="az">A–Z</option>
            </select>
          </label>
        </div>
      )}

      <div onClickCapture={remember}>{list}</div>

      {sheetOpen && (
        <FilterSheet
          filters={f}
          onChange={(p) => setFilters(p)}
          count={results.length}
          onClose={() => setSheetOpen(false)}
        />
      )}
    </>
  )
}
