import { layoutFigure, LEN, type Chain, type Figure, type Pt } from './skeleton'

const W = 200
const H = 150
const FLOOR = 132
/** Halbe Konturbreite in Figur-Einheiten */
const OUT = 1.35
const C = {
  skin: '#F6C7A1',
  skinBack: '#E3A985',
  shirt: '#8B7CF0',
  shirtBack: '#6E5FD4',
  pants: '#3F4A9E',
  pantsBack: '#2E3780',
  hair: '#7A4A2E',
  ink: '#2A2453',
  cheek: '#F49B9B',
  tongue: '#EE6F86',
  mat: '#F7C6D4',
  matEdge: '#EBA3B8',
}

type Poly = Pt[]
interface Shape {
  pts: Poly
  fill: string
}

const TAU = Math.PI * 2
const add = (a: Pt, b: Pt): Pt => [a[0] + b[0], a[1] + b[1]]
const mul = (a: Pt, k: number): Pt => [a[0] * k, a[1] * k]
const sub = (a: Pt, b: Pt): Pt => [a[0] - b[0], a[1] - b[1]]
const lerp = (a: Pt, b: Pt, t: number): Pt => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
]
const unit = (v: Pt): Pt => {
  const l = Math.hypot(v[0], v[1]) || 1
  return [v[0] / l, v[1] / l]
}
const deg = (a: number): Pt => {
  const r = (a * Math.PI) / 180
  return [Math.sin(r), Math.cos(r)]
}
const ang = (v: Pt) => Math.atan2(v[1], v[0])
const wrap = (a: number) => {
  while (a > Math.PI) a -= TAU
  while (a <= -Math.PI) a += TAU
  return a
}
const xy = (p: Pt) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`
const pathOf = (pts: Poly) => `M${pts.map(xy).join('L')}Z`

function arc(c: Pt, r: number, a0: number, a1: number, n = 10): Poly {
  const out: Pt[] = []
  for (let i = 0; i <= n; i++) {
    const a = a0 + ((a1 - a0) * i) / n
    out.push([c[0] + Math.cos(a) * r, c[1] + Math.sin(a) * r])
  }
  return out
}
const circle = (c: Pt, r: number): Poly => arc(c, r, 0, TAU, 28).slice(1)

/** Bogen von `from` nach `to`, der über `via` läuft. */
function sweep(from: number, via: number, to: number): [number, number] {
  const s = Math.sign(wrap(via - from)) || 1
  const t = ((((to - from) * s) % TAU) + TAU) % TAU
  return [from, from + s * t]
}

/** Abgerundetes, sich verjüngendes Glied von a (Radius ra) nach b (Radius rb). */
function capsule(a: Pt, ra: number, b: Pt, rb: number): Poly {
  const v = sub(b, a)
  const L = Math.hypot(v[0], v[1])
  if (L <= Math.abs(ra - rb) + 1e-6)
    return ra > rb ? circle(a, ra) : circle(b, rb)
  const u = mul(v, 1 / L)
  const p: Pt = [-u[1], u[0]]
  const s = (ra - rb) / L
  const c = Math.sqrt(1 - s * s)
  const n1 = add(mul(u, s), mul(p, c))
  const n2 = add(mul(u, s), mul(p, -c))
  const [b0, b1] = sweep(ang(n1), ang(u), ang(n2))
  const [a0, a1] = sweep(ang(n2), ang(mul(u, -1)), ang(n1))
  return [...arc(b, rb, b0, b1), ...arc(a, ra, a0, a1)]
}

function quad(p0: Pt, p1: Pt, p2: Pt, n = 8): Poly {
  const out: Pt[] = []
  for (let i = 1; i <= n; i++) {
    const t = i / n
    out.push(lerp(lerp(p0, p1, t), lerp(p1, p2, t), t))
  }
  return out
}

/** Gruppe von Formen mit gemeinsamer Aussenkontur. */
function Part({ shapes }: { shapes: Shape[] }) {
  return (
    <g>
      <g
        fill={C.ink}
        stroke={C.ink}
        strokeWidth={OUT * 2}
        strokeLinejoin="round"
      >
        {shapes.map((s, i) => (
          <path key={i} d={pathOf(s.pts)} />
        ))}
      </g>
      {shapes.map((s, i) => (
        <path key={i} d={pathOf(s.pts)} fill={s.fill} />
      ))}
    </g>
  )
}

const sleeve = (c: Chain, fill: string): Shape => ({
  pts: capsule(c.root, 6.1, lerp(c.root, c.mid, 0.5), 5.5),
  fill,
})
const upperArm = (c: Chain, fill: string): Shape => ({
  pts: capsule(c.root, 5.2, c.mid, 4.3),
  fill,
})
function lowerArm(c: Chain, fill: string): Shape[] {
  const hand = add(c.end, mul(unit(sub(c.end, c.mid)), 1.5))
  return [
    { pts: capsule(c.mid, 4.3, c.end, 3.7), fill },
    { pts: circle(hand, 4.7), fill },
  ]
}
function armShapes(c: Chain, back: boolean): Shape[] {
  const skin = back ? C.skinBack : C.skin
  return [
    upperArm(c, skin),
    ...lowerArm(c, skin),
    sleeve(c, back ? C.shirtBack : C.shirt),
  ]
}

/**
 * Fuss je nach Lage:
 * - am Boden, Unterschenkel steil: flach auf dem Boden, Zehen nach vorne
 * - am Boden, Unterschenkel flach nach hinten (kniend, Bauchlage):
 *   Fussrücken liegt auf, Zehen zeigen nach hinten
 * - am Boden, Bein nach vorne gestreckt (sitzend): Ferse unten, Zehen hoch
 * - in der Luft: gestreckte Zehen in Verlängerung des Unterschenkels
 * - Frontansicht stehend: kurzer Fuss leicht nach aussen gedreht
 */
function footShapes(
  c: Chain,
  front: boolean,
  facing: number,
  onFloor: boolean,
  skin: string,
): Shape[] {
  const a = c.end
  const shin = unit(sub(c.end, c.mid))
  const steep = Math.abs(shin[1]) > 0.55
  const foot = (heel: Pt, toe: Pt): Shape[] => [
    { pts: capsule(a, 3.9, heel, 3.7), fill: skin },
    { pts: capsule(heel, 3.7, toe, 2.9), fill: skin },
  ]
  if (front) {
    if (onFloor && steep) {
      const side = Math.sign(c.root[0]) || 1
      return foot(add(a, [0, 2.4]), add(a, [side * 5, 3.2]))
    }
    // Sitzend von vorne (Fusssohlen zusammen, Schneidersitz)
    return foot(add(a, mul(shin, 1)), add(a, mul(shin, 5)))
  }
  if (onFloor && steep) {
    return foot(add(a, [-facing * 1.8, 2.4]), add(a, [facing * 10, 3.1]))
  }
  if (onFloor) {
    const dx = Math.sign(shin[0]) || -facing
    if (dx === facing) {
      // Bein nach vorne gestreckt: Ferse am Boden, Zehen zeigen nach oben
      return foot(add(a, [dx * 1.6, 1.4]), add(a, [dx * 3.4, -7.5]))
    }
    return foot(add(a, [dx * 2, 0.8]), add(a, [dx * 10, 1.6]))
  }
  // In der Luft: gestreckte Zehen
  const tip = unit(add(shin, mul([-shin[1], shin[0]], 0.12 * facing)))
  return foot(add(a, mul(tip, 2)), add(a, mul(tip, 9)))
}

function legShapes(
  c: Chain,
  back: boolean,
  front: boolean,
  facing: number,
  onFloor: boolean,
): Shape[] {
  const pants = back ? C.pantsBack : C.pants
  const skin = back ? C.skinBack : C.skin
  if (front && Math.hypot(...sub(c.end, c.mid)) < 12) {
    // Kniend von vorne: Unterschenkel zeigt nach hinten, Fuss verdeckt
    return [
      { pts: capsule(c.root, 7.8, c.mid, 6.3), fill: pants },
      { pts: capsule(c.mid, 6.3, c.end, 6), fill: pants },
    ]
  }
  // Hosenbein endet knapp über dem Knöchel
  const cuff = lerp(c.mid, c.end, 0.8)
  return [
    ...footShapes(c, front, facing, onFloor, skin),
    { pts: capsule(cuff, 4.3, c.end, 3.9), fill: skin },
    { pts: capsule(c.root, 7.8, c.mid, 6.3), fill: pants },
    { pts: capsule(c.mid, 6.3, cuff, 5.4), fill: pants },
  ]
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
  const front = fig.view === 'front'
  const tdir = unit(l.neck)

  const up = unit(sub(l.head, l.neck))
  // Blickrichtung (Seitenansicht): ohne Vorgabe schaut das Gesicht
  // rechtwinklig zur Kopfachse nach vorne (hängender Kopf schaut nach hinten)
  const lv: Pt = front
    ? [0, 0]
    : fig.look !== undefined && fig.look !== 'front'
      ? deg(fig.look)
      : [-up[1], up[0]]
  // Körper schaut in der Seitenansicht immer nach rechts (für die Füsse)
  const facing = 1

  // Oberkörper als gebogene, leicht verjüngte Röhre
  const torso: Shape[] = []
  const tp = (t: number) =>
    lerp(lerp(l.hip, l.ctrl, t), lerp(l.ctrl, l.neck, t), t)
  const N = 6
  // Von vorne enden die Schultern breit und flach statt rund wie ein Buckel
  const tEnd = front ? 0.72 : 0.88
  // Von vorne ist der Oberkörper etwas breiter als von der Seite
  const r0 = front ? 11.4 : 9.8
  const dr = front ? 1.2 : 2
  for (let i = 0; i < N; i++) {
    const t0 = 0.05 + ((tEnd - 0.05) * i) / N
    const t1 = 0.05 + ((tEnd - 0.05) * (i + 1)) / N
    torso.push({
      pts: capsule(tp(t0), r0 + dr * (i / N), tp(t1), r0 + dr * ((i + 1) / N)),
      fill: C.shirt,
    })
  }

  // Becken (Hose), verschmilzt mit den Oberschenkeln
  const pelvis: Shape[] = front
    ? [
        { pts: capsule(l.legB.root, 8, l.legF.root, 8), fill: C.pants },
        {
          pts: capsule(l.hip, 10.5, add(l.hip, mul(tdir, 8)), 10.8),
          fill: C.pants,
        },
      ]
    : [
        {
          pts: capsule(l.hip, 7.6, add(l.hip, mul(tdir, 7)), 8.6),
          fill: C.pants,
        },
      ]

  // Tiefster Punkt von Becken, Knien, Händen und Füssen = Boden
  // (ohne Kopf: der hängt bei Hund/Brücke tief, trägt aber kein Gewicht)
  const floorY = Math.max(
    l.hip[1] + 8,
    ...[l.legF, l.legB].flatMap((k) => [k.mid[1] + 6, k.end[1]]),
    ...[l.armF, l.armB].map((k) => k.end[1]),
  )
  const grounded = (k: Chain) => k.end[1] > floorY - 6
  const legF = legShapes(l.legF, false, front, facing, grounded(l.legF))
  const legB = legShapes(l.legB, !front, front, facing, grounded(l.legB))
  const armF = armShapes(l.armF, false)
  const armB = armShapes(l.armB, !front)
  if (front) {
    // T-Shirt aus einem Guss: runde Schultern und Ärmel ohne Naht
    torso.push(
      { pts: capsule(l.armB.root, 6.1, l.armF.root, 6.1), fill: C.shirt },
      sleeve(l.armB, C.shirt),
      sleeve(l.armF, C.shirt),
    )
  }

  // Kopf: lokales Koordinatensystem (x = Blick/rechts, y = oben)
  const r = LEN.head
  const c = l.head
  let fx: Pt
  let fy: Pt = up
  if (front) {
    // x zeigt (bei aufrechtem Kopf) nach rechts
    fx = [-up[1], up[0]]
  } else {
    fx = unit(lv)
    const proj = up[0] * fx[0] + up[1] * fx[1]
    const o = sub(up, mul(fx, proj))
    fy = Math.hypot(o[0], o[1]) > 0.15 ? unit(o) : [fx[1], -fx[0]]
  }
  const F = (x: number, y: number): Pt => add(c, add(mul(fx, x), mul(fy, y)))
  const onHead = (R: number, a: number) => F(R * Math.cos(a), R * Math.sin(a))
  const headArc = (R: number, a0: number, a1: number, n = 14) => {
    const out: Pt[] = []
    for (let i = 0; i <= n; i++)
      out.push(onHead(R, ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180))
    return out
  }

  const R = r + 1.4
  const hair: Poly = front
    ? [
        ...headArc(R, 200, -20),
        ...quad(onHead(R, (-20 * Math.PI) / 180), F(11, 6), F(5, 6.5)),
        ...quad(F(5, 6.5), F(1, 9.5), F(-3, 6.5)),
        ...quad(F(-3, 6.5), F(-10, 7.5), onHead(R, (200 * Math.PI) / 180)),
      ]
    : [
        ...headArc(R, 48, 245),
        ...quad(onHead(R, (245 * Math.PI) / 180), F(-1, -7), F(-3.2, 1.5)),
        ...quad(F(-3.2, 1.5), F(-1.5, 9), F(6, 9.6)),
      ]

  const neckBase = sub(l.neck, mul(tdir, 3))
  const neck: Shape[] = [
    { pts: capsule(neckBase, 4.6, lerp(l.neck, c, 0.6), 4.4), fill: C.skin },
  ]
  const head: Shape[] = [
    { pts: circle(c, r), fill: C.skin },
    { pts: hair, fill: C.hair },
  ]

  const dot = (p: Pt, rr: number, fill: string, op = 1) => (
    <circle cx={p[0]} cy={p[1]} r={rr} fill={fill} opacity={op} />
  )
  const eye = (p: Pt) => (
    <>
      {dot(p, 1.9, C.ink)}
      {dot(add(p, add(mul(fx, 0.6), mul(fy, 0.7))), 0.6, '#fff')}
    </>
  )
  const smile = (a: Pt, m: Pt, b: Pt) => (
    <path
      d={`M${xy(a)}Q${xy(m)} ${xy(b)}`}
      stroke={C.ink}
      strokeWidth={1.5}
      strokeLinecap="round"
      fill="none"
    />
  )
  const face = front ? (
    <>
      {dot(F(7, -3.6), 2.4, C.cheek, 0.65)}
      {dot(F(-7, -3.6), 2.4, C.cheek, 0.65)}
      {eye(F(4.4, 1))}
      {eye(F(-4.4, 1))}
      {fig.open
        ? dot(F(0, -5.2), 3, C.ink)
        : smile(F(-3.2, -4.2), F(0, -7.4), F(3.2, -4.2))}
    </>
  ) : (
    <>
      {dot(F(4.2, -3.4), 2.5, C.cheek, 0.65)}
      {eye(F(6.6, 1.6))}
      {fig.open
        ? dot(F(8.6, -5.2), 2.9, C.ink)
        : smile(F(5.6, -4.8), F(8.6, -7.2), F(10.6, -4))}
      {fig.tongue && (
        <path
          d={pathOf(capsule(F(8.9, -6), 1.6, F(10.8, -9.4), 1.9))}
          fill={C.tongue}
          stroke={C.ink}
          strokeWidth={0.9}
        />
      )}
    </>
  )

  // Zeichenreihenfolge (hinten → vorne)
  const parts: Shape[][] = front
    ? [
        neck,
        // Oberarme hinter dem T-Shirt, Unterarme und Hände davor
        [upperArm(l.armB, C.skin), upperArm(l.armF, C.skin)],
        [...pelvis, ...legF, ...legB],
        torso,
        [...lowerArm(l.armB, C.skin), ...lowerArm(l.armF, C.skin)],
        head,
      ]
    : [legB, armB, neck, [...pelvis, ...legF], torso, head, armF]

  // Rahmen aus der tatsächlichen Geometrie
  const all = parts.flat().flatMap((s) => s.pts)
  const xs = all.map((p) => p[0])
  const ys = all.map((p) => p[1])
  const b = {
    minX: Math.min(...xs) - OUT,
    maxX: Math.max(...xs) + OUT,
    minY: Math.min(...ys) - OUT,
    maxY: Math.max(...ys) + OUT,
  }
  const s = Math.min(
    1.3,
    (W - 24) / (b.maxX - b.minX),
    (FLOOR - 8) / (b.maxY - b.minY),
  )
  const tx = W / 2 - ((b.minX + b.maxX) / 2) * s
  const ty = FLOOR + 0.5 - b.maxY * s
  const shadowW = Math.min(W / 2 - 18, ((b.maxX - b.minX) * s) / 2 + 4)

  const headIdx = parts.indexOf(head)
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
      <ellipse
        cx={W / 2}
        cy={FLOOR + 0.5}
        rx={shadowW}
        ry={2.6}
        fill={C.matEdge}
        opacity={0.7}
      />
      <g
        transform={`translate(${tx.toFixed(1)} ${ty.toFixed(1)}) scale(${s.toFixed(3)})`}
      >
        {parts.map((p, i) => (
          <g key={i}>
            <Part shapes={p} />
            {i === headIdx && face}
          </g>
        ))}
      </g>
    </svg>
  )
}
