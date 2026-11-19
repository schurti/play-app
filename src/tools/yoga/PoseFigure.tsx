import {
  boundsOf,
  layoutFigure,
  LEN,
  type Chain,
  type Figure,
  type Pt,
} from './skeleton'

const W = 200
const H = 150
const FLOOR = 132
const C = {
  skin: '#F4C29B',
  skinBack: '#E2A57C',
  shirt: '#7C6FD6',
  shirtBack: '#6253BF',
  pants: '#3E3A75',
  pantsBack: '#2A2759',
  hair: '#6B4430',
  ink: '#2A2453',
  cheek: '#F29A9A',
  mat: '#F7C6D4',
  matEdge: '#EBA3B8',
}

const d = (deg: number): Pt => {
  const r = (deg * Math.PI) / 180
  return [Math.sin(r), Math.cos(r)]
}
const at = (p: Pt, ...vs: [Pt, number][]): Pt =>
  vs.reduce<Pt>((a, [v, k]) => [a[0] + v[0] * k, a[1] + v[1] * k], p)
const xy = (p: Pt) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`

function Arm({ c, back }: { c: Chain; back?: boolean }) {
  return (
    <g strokeLinecap="round" fill="none">
      <line
        x1={c.mid[0]}
        y1={c.mid[1]}
        x2={c.end[0]}
        y2={c.end[1]}
        stroke={back ? C.skinBack : C.skin}
        strokeWidth={8.5}
      />
      <line
        x1={c.root[0]}
        y1={c.root[1]}
        x2={c.mid[0]}
        y2={c.mid[1]}
        stroke={back ? C.shirtBack : C.shirt}
        strokeWidth={10.5}
      />
      <circle
        cx={c.end[0]}
        cy={c.end[1]}
        r={5}
        fill={back ? C.skinBack : C.skin}
      />
    </g>
  )
}

function Leg({ c, back }: { c: Chain; back?: boolean }) {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <polyline
        points={`${xy(c.root)} ${xy(c.mid)} ${xy(c.end)}`}
        stroke={back ? C.pantsBack : C.pants}
        strokeWidth={12}
      />
      <circle
        cx={c.end[0]}
        cy={c.end[1]}
        r={5.5}
        fill={back ? C.skinBack : C.skin}
      />
    </g>
  )
}

/** Gezeichnete Kinderfigur, die eine Yoga-Haltung vormacht. */
export default function PoseFigure({
  fig,
  label,
}: {
  fig: Figure
  label: string
}) {
  const l = layoutFigure(fig)
  const b = boundsOf(l)
  const pad = 7
  const w = b.maxX - b.minX + 2 * pad
  const h = b.maxY - b.minY + 2 * pad
  const s = Math.min(1.25, (W - 16) / w, (FLOOR - 6) / h)
  const tx = W / 2 - ((b.minX + b.maxX) / 2) * s
  const ty = FLOOR - (b.maxY + pad * 0.85) * s

  // Kopf: "oben" ist die Richtung Hals → Kopf
  const hv: Pt = [l.head[0] - l.neck[0], l.head[1] - l.neck[1]]
  const hl = Math.hypot(hv[0], hv[1]) || 1
  const u: Pt = [hv[0] / hl, hv[1] / hl]
  const rt: Pt = [-u[1], u[0]]
  const c = l.head
  const r = LEN.head
  const side = l.look !== 'front'
  const lv: Pt = side ? d(l.look as number) : [0, 0]
  const hairAt = at(c, [u, 2.2], [lv, -2.2])
  const faceAt = at(c, [u, -1.2], [lv, 1.2])

  let face
  if (side) {
    const eye = at(c, [lv, 6], [u, 2])
    const mouth = at(c, [lv, 8.5], [u, -4.5])
    face = (
      <>
        <circle cx={eye[0]} cy={eye[1]} r={1.8} fill={C.ink} />
        {fig.open ? (
          <circle cx={mouth[0]} cy={mouth[1]} r={3} fill={C.ink} />
        ) : (
          <circle cx={mouth[0]} cy={mouth[1]} r={1.4} fill={C.ink} />
        )}
        <circle
          cx={at(c, [lv, 2.5], [u, -2.5])[0]}
          cy={at(c, [lv, 2.5], [u, -2.5])[1]}
          r={2.6}
          fill={C.cheek}
          opacity={0.7}
        />
      </>
    )
  } else {
    const e1 = at(c, [rt, 4.6], [u, 1])
    const e2 = at(c, [rt, -4.6], [u, 1])
    const m1 = at(c, [rt, -3.6], [u, -3.6])
    const m2 = at(c, [rt, 3.6], [u, -3.6])
    const mc = at(c, [u, -7.6])
    face = (
      <>
        <circle cx={e1[0]} cy={e1[1]} r={1.8} fill={C.ink} />
        <circle cx={e2[0]} cy={e2[1]} r={1.8} fill={C.ink} />
        {fig.open ? (
          <circle
            cx={at(c, [u, -5])[0]}
            cy={at(c, [u, -5])[1]}
            r={3.2}
            fill={C.ink}
          />
        ) : (
          <path
            d={`M${xy(m1)} Q${xy(mc)} ${xy(m2)}`}
            stroke={C.ink}
            strokeWidth={1.6}
            strokeLinecap="round"
            fill="none"
          />
        )}
      </>
    )
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      role="img"
      aria-label={`So geht ${label}`}
      style={{ maxWidth: 320, display: 'block', margin: '0 auto' }}
    >
      <rect
        x={14}
        y={FLOOR - 2}
        width={W - 28}
        height={9}
        rx={4.5}
        fill={C.mat}
      />
      <rect
        x={14}
        y={FLOOR + 5}
        width={W - 28}
        height={3}
        rx={1.5}
        fill={C.matEdge}
      />
      <g
        transform={`translate(${tx.toFixed(1)} ${ty.toFixed(1)}) scale(${s.toFixed(3)})`}
      >
        <Leg c={l.legB} back />
        <Arm c={l.armB} back />
        <path
          d={`M${xy(l.hip)} Q${xy(l.ctrl)} ${xy(l.neck)}`}
          stroke={C.shirt}
          strokeWidth={23}
          strokeLinecap="round"
          fill="none"
        />
        <circle cx={0} cy={0} r={12} fill={C.pants} />
        <Leg c={l.legF} />
        <circle cx={hairAt[0]} cy={hairAt[1]} r={r + 0.6} fill={C.hair} />
        <circle cx={faceAt[0]} cy={faceAt[1]} r={r - 0.6} fill={C.skin} />
        {face}
        <Arm c={l.armF} />
      </g>
    </svg>
  )
}
