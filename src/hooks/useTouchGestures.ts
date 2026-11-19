import { useEffect, useRef, type RefObject } from 'react'

export interface TouchGestureHandlers {
  /** Wisch nach links (Finger bewegt sich nach links). */
  onSwipeLeft?(): void
  /** Wisch nach rechts. */
  onSwipeRight?(): void
  /**
   * Ziehen nach unten, solange das Element ganz oben gescrollt ist.
   * Wird während der Bewegung mit dem Abstand in px aufgerufen.
   */
  onPull?(dy: number): void
  /** Ziehen beendet: `true`, wenn weit oder schnell genug gezogen wurde. */
  onPullEnd?(release: boolean): void
}

const START = 10 // px, ab hier steht die Richtung fest
const SWIPE = 70 // px für einen Wisch
const PULL = 110 // px zum Schliessen
const FLICK = 0.6 // px/ms – schnelles Ziehen schliesst schon früher

const point = (e: TouchEvent) => e.touches[0] ?? e.changedTouches[0]

/**
 * Wisch- und Zieh-Gesten auf einem Element (nur Touch).
 * Nutzt native Listener, damit beim Ziehen nach unten das Scrollen
 * des Browsers unterbunden werden kann (React-Listener sind passiv).
 */
export function useTouchGestures(
  ref: RefObject<HTMLElement | null>,
  handlers: TouchGestureHandlers,
): void {
  const h = useRef(handlers)
  useEffect(() => {
    h.current = handlers
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let x0 = 0
    let y0 = 0
    let t0 = 0
    let atTop = false
    let mode: 'none' | 'pull' | 'swipe' | 'other' = 'none'
    let active = false

    const start = (e: TouchEvent) => {
      const target = e.target as Element | null
      if (target?.closest('canvas, input, [data-no-swipe]')) {
        active = false
        return
      }
      const p = point(e)
      if (!p) return
      active = true
      x0 = p.clientX
      y0 = p.clientY
      t0 = e.timeStamp
      atTop = el.scrollTop <= 0
      mode = 'none'
    }

    const move = (e: TouchEvent) => {
      if (!active) return
      const p = point(e)
      if (!p) return
      const dx = p.clientX - x0
      const dy = p.clientY - y0
      if (mode === 'none') {
        if (Math.abs(dx) < START && Math.abs(dy) < START) return
        if (dy > 0 && Math.abs(dy) > Math.abs(dx) && atTop && h.current.onPull)
          mode = 'pull'
        else if (Math.abs(dx) > Math.abs(dy) * 1.5) mode = 'swipe'
        else mode = 'other'
      }
      if (mode === 'pull') {
        if (e.cancelable) e.preventDefault()
        h.current.onPull?.(Math.max(0, dy))
      }
    }

    const end = (e: TouchEvent) => {
      if (!active) return
      active = false
      const p = point(e)
      if (!p) return
      const dx = p.clientX - x0
      const dy = p.clientY - y0
      const dt = Math.max(1, e.timeStamp - t0)
      if (mode === 'pull') {
        h.current.onPullEnd?.(dy > PULL || (dy > 40 && dy / dt > FLICK))
      } else if (mode === 'swipe' && Math.abs(dx) > SWIPE) {
        if (dx < 0) h.current.onSwipeLeft?.()
        else h.current.onSwipeRight?.()
      }
      mode = 'none'
    }

    const cancel = () => {
      if (mode === 'pull') h.current.onPullEnd?.(false)
      active = false
      mode = 'none'
    }

    el.addEventListener('touchstart', start, { passive: true })
    el.addEventListener('touchmove', move, { passive: false })
    el.addEventListener('touchend', end)
    el.addEventListener('touchcancel', cancel)
    return () => {
      el.removeEventListener('touchstart', start)
      el.removeEventListener('touchmove', move)
      el.removeEventListener('touchend', end)
      el.removeEventListener('touchcancel', cancel)
    }
  }, [ref])
}
