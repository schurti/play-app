import { useState } from 'react'
import { pick } from '../../lib/random'
import NewButton from '../NewButton'
import t from '../tool.module.css'
import { PROPS } from './props'

const draw = () => ({ count: 1 + Math.floor(Math.random() * 8), prop: pick(PROPS) })

export default function NumberTool() {
  const [{ count, prop }, setTask] = useState(draw)
  return (
    <>
      <div className={t.big}>
        Finde <span style={{ fontSize: 46 }}>{count}</span> Dinge, die {prop} sind!
      </div>
      <NewButton label="Neue Aufgabe" onNew={() => setTask(draw())} />
    </>
  )
}
