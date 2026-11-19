import { useState } from 'react'
import t from '../tool.module.css'
import { TREASURE, type Riddle } from './riddles'

function draw(): Riddle[] {
  const list = [...TREASURE]
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[list[i], list[j]] = [list[j], list[i]]
  }
  return list.slice(0, 5)
}

export default function TreasureTool() {
  const [list, setList] = useState(draw)
  return (
    <>
      <div className={t.big} style={{ fontSize: 20 }}>
        🗺️ Eure 5 Hinweise
      </div>
      <ol className={t.riddles}>
        {list.map((r) => (
          <li key={r.hint}>
            {r.hint}
            <details>
              <summary>Lösung für Erwachsene</summary>
              {r.answer}
            </details>
          </li>
        ))}
      </ol>
      <div className={t.btns}>
        <button className={t.btn} onClick={() => setList(draw())}>
          🔄 Neue Hinweise
        </button>
      </div>
    </>
  )
}
