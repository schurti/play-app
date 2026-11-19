import { useEffect, useRef, useState } from 'react'

/**
 * Zeigt lange Listen schrittweise an: zuerst `step` Einträge, weitere,
 * sobald das Ende der Liste in die Nähe des Bildschirms kommt.
 */
export function useProgressive<T>(items: readonly T[], step = 30) {
  const [n, setN] = useState(step)
  const [prev, setPrev] = useState(items)
  // Neue Liste (z. B. andere Suche): wieder von vorne beginnen
  if (prev !== items) {
    setPrev(items)
    setN(step)
  }
  const sentinel = useRef<HTMLDivElement>(null)
  const more = n < items.length

  useEffect(() => {
    const el = sentinel.current
    if (!el || !more || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setN((x) => x + step)
      },
      { rootMargin: '800px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [more, n, step])

  return {
    shown: more ? items.slice(0, n) : items,
    more,
    rest: items.length - n,
    showMore: () => setN((x) => x + step),
    sentinel,
  }
}
