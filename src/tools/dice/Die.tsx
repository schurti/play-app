import t from '../tool.module.css'

const PIPS: Record<number, number[]> = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
}

export default function Die({ n }: { n: number }) {
  return (
    <div className={t.die} data-testid="die">
      {Array.from({ length: 9 }, (_, i) => (
        <i key={i} className={PIPS[n].includes(i) ? t.p : undefined} />
      ))}
    </div>
  )
}
