import { tone } from '../lib/audio'
import t from './tool.module.css'

interface Props {
  label: string
  onNew: () => void
}

/** „🔄 …“-Schaltfläche mit kurzem Ton, wie in allen Zufalls-Werkzeugen. */
export default function NewButton({ label, onNew }: Props) {
  return (
    <div className={t.btns}>
      <button
        className={t.btn}
        onClick={() => {
          tone(880, 0.08)
          onNew()
        }}
      >
        🔄 {label}
      </button>
    </div>
  )
}
