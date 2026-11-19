import { create } from 'zustand'
import {
  createJSONStorage,
  persist,
  type StateStorage,
} from 'zustand/middleware'
import { loadLegacy } from './legacy'

export interface Progress {
  fav: Record<string, true>
  /** Zuletzt angesehene Spiele, neuestes zuerst */
  recent: string[]
}

export const RECENT_MAX = 12

interface ProgressActions {
  toggleFav(id: string): boolean
  addRecent(id: string): void
  reset(): void
}

const KEY = 'play-app:progress'
const VERSION = 3
const EMPTY: Progress = { fav: {}, recent: [] }

// Privater Modus: Zugriffe können werfen. Fehlt der Key, werden alte Daten übernommen.
const storage: StateStorage = {
  getItem(name) {
    try {
      const raw = localStorage.getItem(name)
      if (raw !== null) return raw
      const legacy = loadLegacy(localStorage)
      return legacy
        ? JSON.stringify({ state: { ...legacy, recent: [] }, version: VERSION })
        : null
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
      toggleFav(id) {
        const fav = { ...get().fav }
        const now = !fav[id]
        if (now) fav[id] = true
        else delete fav[id]
        set({ fav })
        return now
      },
      addRecent(id) {
        const recent = [id, ...get().recent.filter((x) => x !== id)]
        set({ recent: recent.slice(0, RECENT_MAX) })
      },
      reset: () => set({ fav: {}, recent: [] }),
    }),
    {
      name: KEY,
      // v2: nur noch Favoriten (Sterne, Spielzähler und Verlauf entfernt)
      // v3: zuletzt angesehene Spiele
      version: VERSION,
      migrate: (persisted) => {
        const p = persisted as Partial<Progress> | null
        const fav = p?.fav
        return {
          fav: fav && typeof fav === 'object' ? fav : {},
          recent: Array.isArray(p?.recent)
            ? p.recent.filter((x) => typeof x === 'string')
            : [],
        }
      },
      storage: createJSONStorage(() => storage),
      partialize: ({ fav, recent }) => ({ fav, recent }),
    },
  ),
)
