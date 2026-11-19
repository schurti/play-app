import { useEffect, useRef, useState, type PointerEvent } from 'react'
import t from '../tool.module.css'

const COLORS = [
  '#2b2a33',
  '#e53935',
  '#fb8c00',
  '#fdd835',
  '#43a047',
  '#1e88e5',
  '#8e24aa',
  '#f48fb1',
  '#795548',
  '#ffffff',
]
const SIZES = [
  ['dünn', 4],
  ['mittel', 10],
  ['dick', 22],
] as const

export default function DrawTool() {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [col, setCol] = useState(COLORS[1])
  const size = useRef(8)
  const last = useRef<[number, number] | null>(null)

  const ctx = () => canvas.current?.getContext('2d') ?? null

  const fit = () => {
    const cv = canvas.current
    const c = ctx()
    if (!cv || !c) return
    const dpr = window.devicePixelRatio || 1
    const r = cv.getBoundingClientRect()
    cv.width = r.width * dpr
    cv.height = r.height * dpr
    c.setTransform(1, 0, 0, 1, 0, 0)
    c.scale(dpr, dpr)
    c.fillStyle = '#fff'
    c.fillRect(0, 0, r.width, r.height)
    c.lineCap = 'round'
    c.lineJoin = 'round'
  }

  useEffect(fit, [])

  const pos = (e: PointerEvent<HTMLCanvasElement>): [number, number] => {
    const r = e.currentTarget.getBoundingClientRect()
    return [e.clientX - r.left, e.clientY - r.top]
  }

  const down = (e: PointerEvent<HTMLCanvasElement>) => {
    const c = ctx()
    if (!c) return
    last.current = pos(e)
    e.currentTarget.setPointerCapture(e.pointerId)
    c.fillStyle = col
    c.beginPath()
    c.arc(last.current[0], last.current[1], size.current / 2, 0, 7)
    c.fill()
  }

  const move = (e: PointerEvent<HTMLCanvasElement>) => {
    const c = ctx()
    const from = last.current
    if (!c || !from) return
    const p = pos(e)
    c.strokeStyle = col
    c.lineWidth = size.current
    c.beginPath()
    c.moveTo(from[0], from[1])
    c.lineTo(p[0], p[1])
    c.stroke()
    last.current = p
  }

  const up = () => {
    last.current = null
  }

  return (
    <>
      <canvas
        ref={canvas}
        data-testid="canvas"
        className={t.canvas}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
      />
      <div className={t.pal}>
        {COLORS.map((c) => (
          <button
            key={c}
            style={{ background: c }}
            className={c === col ? t.on : undefined}
            aria-label="Farbe"
            onClick={() => setCol(c)}
          />
        ))}
      </div>
      <div className={t.btns}>
        {SIZES.map(([label, s]) => (
          <button
            key={s}
            className={`${t.btn} ${t.alt} ${t.sm}`}
            onClick={() => (size.current = s)}
          >
            {label}
          </button>
        ))}
        <button className={`${t.btn} ${t.sm}`} onClick={fit}>
          🗑️ Neu
        </button>
      </div>
      <div className="meta">Weiss = Radiergummi</div>
    </>
  )
}
