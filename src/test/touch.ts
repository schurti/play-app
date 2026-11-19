import { act } from '@testing-library/react'

/** Simuliert eine Touch-Geste von (x0,y0) nach (x1,y1) auf einem Element. */
export function swipe(
  el: Element,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
) {
  const fire = (type: string, x: number, y: number) => {
    const ev = new Event(type, { bubbles: true, cancelable: true })
    const t = [{ clientX: x, clientY: y }]
    Object.defineProperty(ev, 'touches', {
      value: type === 'touchend' ? [] : t,
    })
    Object.defineProperty(ev, 'changedTouches', { value: t })
    el.dispatchEvent(ev)
  }
  act(() => {
    fire('touchstart', x0, y0)
    fire('touchmove', (x0 + x1) / 2, (y0 + y1) / 2)
    fire('touchmove', x1, y1)
    fire('touchend', x1, y1)
  })
}
