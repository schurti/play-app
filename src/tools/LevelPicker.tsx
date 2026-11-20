import t from './tool.module.css'

interface Props {
  labels: readonly string[]
  active: number
  note?: string
  onPick(index: number): void
}

/** Stufen-Auswahl oben im Werkzeug, mit kurzer Beschreibung und Trennlinie. */
export default function LevelPicker({ labels, active, note, onPick }: Props) {
  return (
    <div className={t.levels}>
      <div className={t.levelBtns}>
        {labels.map((label, i) => (
          <button
            key={label}
            className={`${t.btn} ${t.sm} ${active === i ? '' : t.alt}`}
            aria-pressed={active === i}
            onClick={() => active !== i && onPick(i)}
          >
            {label}
          </button>
        ))}
      </div>
      {note && <div className={t.levelNote}>{note}</div>}
    </div>
  )
}
