import { act } from '@testing-library/react'

interface Options {
  /** Bewegung über mehrere Schritte mit Zeitabstand (langsames Ziehen). */
  slow?: boolean
  /** Finger nicht loslassen (kein touchend). */
  keepDown?: boolean
}

/** Simuliert eine Touch-Geste von (x0,y0) nach (x1,y1) auf einem Element. */
export function swipe(
  el: Element,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  { slow = false, keepDown = false }: Options = {},
) {
  let t = 0
  const fire = (type: string, x: number, y: number) => {
    const ev = new Event(type, { bubbles: true, cancelable: true })
    const touches = [{ clientX: x, clientY: y }]
    Object.defineProperty(ev, 'touches', {
      value: type === 'touchend' ? [] : touches,
    })
    Object.defineProperty(ev, 'changedTouches', { value: touches })
    Object.defineProperty(ev, 'timeStamp', { value: t })
    el.dispatchEvent(ev)
  }
  const steps = slow ? 12 : 2
  const dtStep = slow ? 80 : 5
  act(() => {
    fire('touchstart', x0, y0)
    for (let i = 1; i <= steps; i++) {
      t += dtStep
      fire(
        'touchmove',
        x0 + ((x1 - x0) * i) / steps,
        y0 + ((y1 - y0) * i) / steps,
      )
    }
    if (!keepDown) {
      t += dtStep
      fire('touchend', x1, y1)
    }
  })
}
