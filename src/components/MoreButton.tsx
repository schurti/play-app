import type { RefObject } from 'react'
import styles from './GameGrid.module.css'

/** Markiert das Listenende (lädt automatisch nach) und bietet einen Knopf als Rückfall. */
export default function MoreButton({
  rest,
  onMore,
  sentinel,
}: {
  rest: number
  onMore(): void
  sentinel: RefObject<HTMLDivElement | null>
}) {
  return (
    <div ref={sentinel} className={styles.more}>
      <button onClick={onMore}>Weitere Spiele anzeigen ({rest})</button>
    </div>
  )
}
