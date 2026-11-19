import type { Progress } from './progress'

export function loadLegacy(storage: Pick<Storage, 'getItem'>): Progress | null {
  try {
    const raw = storage.getItem('hs2')
    if (raw) {
      const p = JSON.parse(raw) as Partial<Record<keyof Progress, unknown>> | null
      if (!p || typeof p !== 'object') return null
      const fav: Record<string, true> = {}
      if (p.fav && typeof p.fav === 'object') {
        for (const [id, v] of Object.entries(p.fav)) if (v) fav[id] = true
      }
      return {
        stars: typeof p.stars === 'number' ? p.stars : 0,
        done: p.done && typeof p.done === 'object' ? (p.done as Record<string, number>) : {},
        fav,
        hist: Array.isArray(p.hist) ? (p.hist as Progress['hist']) : [],
      }
    }
    const old = parseInt(storage.getItem('hs_stars') ?? '0', 10)
    return old ? { stars: old, done: {}, fav: {}, hist: [] } : null
  } catch {
    return null
  }
}
