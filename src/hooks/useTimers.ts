import { useEffect, useRef } from 'react'

export interface Timers {
  every(fn: () => void, ms: number): number
  later(fn: () => void, ms: number): number
  clear(id: number): void
  clearAll(): void
}

/** Intervalle und Timeouts, die beim Unmount automatisch gestoppt werden. */
export function useTimers(): Timers {
  const ids = useRef<Set<number>>(new Set())
  const api = useRef<Timers | null>(null)

  if (api.current === null) {
    const tracked = ids.current
    api.current = {
      every(fn, ms) {
        const id = window.setInterval(fn, ms)
        tracked.add(id)
        return id
      },
      later(fn, ms) {
        const id = window.setTimeout(() => {
          tracked.delete(id)
          fn()
        }, ms)
        tracked.add(id)
        return id
      },
      clear(id) {
        window.clearInterval(id)
        window.clearTimeout(id)
        tracked.delete(id)
      },
      clearAll() {
        tracked.forEach((id) => {
          window.clearInterval(id)
          window.clearTimeout(id)
        })
        tracked.clear()
      },
    }
  }
  const timers = api.current

  useEffect(() => () => timers.clearAll(), [timers])

  return timers
}
