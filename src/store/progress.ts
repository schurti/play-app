import { create } from 'zustand'
import {
  createJSONStorage,
  persist,
  type StateStorage,
} from 'zustand/middleware'
import { loadLegacy } from './legacy'

export interface Progress {
  fav: Record<string, true>
}

interface ProgressActions {
  toggleFav(id: string): boolean
  reset(): void
}

const KEY = 'play-app:progress'
const EMPTY: Progress = { fav: {} }

// Privater Modus: Zugriffe können werfen. Fehlt der Key, werden alte Daten übernommen.
const storage: StateStorage = {
  getItem(name) {
    try {
      const raw = localStorage.getItem(name)
      if (raw !== null) return raw
      const legacy = loadLegacy(localStorage)
      return legacy ? JSON.stringify({ state: legacy, version: 2 }) : null
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
      reset: () => set({ fav: {} }),
    }),
    {
      name: KEY,
      // v2: nur noch Favoriten (Sterne, Spielzähler und Verlauf entfernt)
      version: 2,
      migrate: (persisted) => {
        const fav = (persisted as Partial<Progress> | null)?.fav
        return { fav: fav && typeof fav === 'object' ? fav : {} }
      },
      storage: createJSONStorage(() => storage),
      partialize: ({ fav }) => ({ fav }),
    },
  ),
)
