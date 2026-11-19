const KEY = 'play-app:suchen'
const MAX = 6

/** Zuletzt gesuchte Begriffe (nur auf diesem Gerät). */
export function loadSearches(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) ?? '[]') as unknown
    return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : []
  } catch {
    return []
  }
}

export function saveSearch(q: string): string[] {
  const t = q.trim()
  const list = loadSearches()
  if (t.length < 2) return list
  const next = [
    t,
    ...list.filter((x) => x.toLowerCase() !== t.toLowerCase()),
  ].slice(0, MAX)
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    /* privater Modus */
  }
  return next
}
