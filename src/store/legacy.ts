import type { Progress } from './progress'

/** Übernimmt die Favoriten aus der alten Einzeldatei-App (Schlüssel `hs2`). */
export function loadLegacy(
  storage: Pick<Storage, 'getItem'>,
): Pick<Progress, 'fav'> | null {
  try {
    const raw = storage.getItem('hs2')
    if (!raw) return null
    const p = JSON.parse(raw) as { fav?: unknown } | null
    if (!p || typeof p !== 'object') return null
    const fav: Record<string, true> = {}
    if (p.fav && typeof p.fav === 'object') {
      for (const [id, v] of Object.entries(p.fav)) if (v) fav[id] = true
    }
    return { fav }
  } catch {
    return null
  }
}
