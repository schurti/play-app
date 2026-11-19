import { create } from 'zustand'
import {
  createJSONStorage,
  persist,
  type StateStorage,
} from 'zustand/middleware'
import { loadLegacy } from './legacy'

export interface Progress {
  stars: number
  done: Record<string, number>
  fav: Record<string, true>
  hist: { id: string; t: number }[]
}

interface ProgressActions {
  markDone(id: string, now?: number): void
  toggleFav(id: string): boolean
  reset(): void
}

const KEY = 'play-app:progress'
const EMPTY: Progress = { stars: 0, done: {}, fav: {}, hist: [] }

// Privater Modus: Zugriffe können werfen. Fehlt der Key, werden alte Daten übernommen.
const storage: StateStorage = {
  getItem(name) {
    try {
      const raw = localStorage.getItem(name)
      if (raw !== null) return raw
      const legacy = loadLegacy(localStorage)
      return legacy ? JSON.stringify({ state: legacy, version: 1 }) : null
    } catch {
      return null
    }
  },
  setItem(name, value) {
    try {
      localStorage.setItem(name, value)
    } catch {
      /* ignorieren */
    }
  },
  removeItem(name) {
    try {
      localStorage.removeItem(name)
    } catch {
      /* ignorieren */
    }
  },
}

export const useProgress = create<Progress & ProgressActions>()(
  persist(
    (set, get) => ({
      ...EMPTY,
      markDone(id, now = Date.now()) {
        const s = get()
        set({
          stars: s.stars + 1,
          done: { ...s.done, [id]: (s.done[id] ?? 0) + 1 },
          hist: [{ id, t: now }, ...s.hist].slice(0, 30),
        })
      },
      toggleFav(id) {
        const fav = { ...get().fav }
        const now = !fav[id]
        if (now) fav[id] = true
        else delete fav[id]
        set({ fav })
        return now
      },
      reset: () => set({ ...EMPTY, done: {}, fav: {}, hist: [] }),
    }),
    {
      name: KEY,
      version: 1,
      storage: createJSONStorage(() => storage),
      partialize: ({ stars, done, fav, hist }) => ({ stars, done, fav, hist }),
    },
  ),
)
