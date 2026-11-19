import { useState } from 'react'
import Art from '../../components/Art'
import { tone } from '../../lib/audio'
import { pick } from '../../lib/random'
import NewButton from '../NewButton'
import t from '../tool.module.css'
import { MONSTER_NAMES, MONSTER_PARTS } from './parts'

type Monster = { name: string; parts: Record<string, string> }

const drawName = () => pick(MONSTER_NAMES.start) + pick(MONSTER_NAMES.end)

const drawMonster = (): Monster => ({
  name: drawName(),
  parts: Object.fromEntries(MONSTER_PARTS.map((p) => [p.key, pick(p.options)])),
})

export default function MonsterTool() {
  const [m, setMonster] = useState(drawMonster)

  const reroll = (key: string) => {
    const part = MONSTER_PARTS.find((p) => p.key === key)
    if (!part) return
    tone(660, 0.06)
    setMonster((prev) => ({
      ...prev,
      parts: { ...prev.parts, [key]: pick(part.options) },
    }))
  }

  return (
    <>
      <Art emoji="👾" size={72} />
      <div className={t.big}>{m.name}</div>
      <div className="meta">
        Tippe auf eine Zeile, um nur diesen Teil neu zu würfeln.
      </div>
      <ul className={t.monster}>
        {MONSTER_PARTS.map((p) => (
          <li key={p.key}>
            <button
              onClick={() => reroll(p.key)}
              aria-label={`${p.label}: ${m.parts[p.key]} – neu würfeln`}
            >
              <small>{p.label}</small>
              <span>{m.parts[p.key]}</span>
              <span aria-hidden="true">🔄</span>
            </button>
          </li>
        ))}
      </ul>
      <NewButton
        label="Neues Monster"
        onNew={() => setMonster(drawMonster())}
      />
    </>
  )
}
