/**
 * Einfaches Skelett für die Yoga-Figuren.
 *
 * Winkel sind absolute Richtungen in Grad: 0 = nach unten, 90 = nach rechts,
 * 180 = nach oben, -90 = nach links. Jedes Glied hat [oben, unten], also
 * Oberarm/Unterarm bzw. Oberschenkel/Unterschenkel.
 */
/**
 * [oben, unten] in Grad, optional mit Längenfaktoren für das untere und das
 * obere Glied (verkürzt dargestellt, z.B. kniend oder auf den Fersen sitzend
 * von vorne).
 */
export type Limb =
  | readonly [number, number]
  | readonly [number, number, number]
  | readonly [number, number, number, number]

export interface Figure {
  /** 'front' = von vorne (Arme/Beine links und rechts), 'side' = von der Seite */
  view: 'front' | 'side'
  /** Richtung Hüfte → Hals */
  torso: number
  /** Biegung des Rückens in px (positiv = Buckel nach oben/aussen) */
  curve?: number
  /** Richtung Hals → Kopfmitte (Standard: wie der Oberkörper) */
  head?: number
  /** Blickrichtung (Standard: zum Betrachter bei 'front', nach rechts bei 'side') */
  look?: number | 'front'
  /** Mund weit offen (Löwe, Kuh) */
  open?: boolean
  /** Zunge herausstrecken (Löwe) */
  tongue?: boolean
  /** Längerer Hals (Giraffe) */
  neck?: number
  /** Vorderes bzw. rechtes Glied */
  armF: Limb
  armB: Limb
  legF: Limb
  legB: Limb
}

export type Pt = readonly [number, number]

export const LEN = {
  torso: 44,
  neck: 17,
  head: 13,
  upperArm: 23,
  foreArm: 21,
  thigh: 27,
  shin: 27,
} as const

const dir = (deg: number, len: number): Pt => {
  const r = (deg * Math.PI) / 180
  return [Math.sin(r) * len, Math.cos(r) * len]
}
const add = (a: Pt, b: Pt): Pt => [a[0] + b[0], a[1] + b[1]]

export interface Chain {
  root: Pt
  mid: Pt
  end: Pt
}

export interface Layout {
  hip: Pt
  neck: Pt
  /** Kontrollpunkt für den gebogenen Rücken */
  ctrl: Pt
  head: Pt
  armF: Chain
  armB: Chain
  legF: Chain
  legB: Chain
  look: number | 'front'
}

const chain = (root: Pt, limb: Limb, l1: number, l2: number): Chain => {
  const [a, b, k = 1, ku = 1] = limb
  const mid = add(root, dir(a, l1 * ku))
  return { root, mid, end: add(mid, dir(b, l2 * k)) }
}

/** Berechnet alle Gelenkpunkte relativ zur Hüfte (0,0). */
export function layoutFigure(f: Figure): Layout {
  const hip: Pt = [0, 0]
  const neck = dir(f.torso, LEN.torso)
  const mid: Pt = [neck[0] / 2, neck[1] / 2]
  // Senkrechte zum Oberkörper, nach "oben" bzw. aussen gedreht
  const perp = dir(f.torso + 90, f.curve ?? 0)
  const ctrl = add(mid, [-perp[0], -perp[1]])
  // Schultern etwas unterhalb des Halses
  const shoulder = add(hip, dir(f.torso, LEN.torso - 4))
  const front = f.view === 'front'
  const side = (p: Pt, dx: number): Pt => (front ? [p[0] + dx, p[1]] : p)
  const head = add(neck, dir(f.head ?? f.torso, f.neck ?? LEN.neck))
  return {
    hip,
    neck,
    ctrl,
    head,
    armF: chain(side(shoulder, 10.5), f.armF, LEN.upperArm, LEN.foreArm),
    armB: chain(side(shoulder, -10.5), f.armB, LEN.upperArm, LEN.foreArm),
    legF: chain(side(hip, 7), f.legF, LEN.thigh, LEN.shin),
    legB: chain(side(hip, -7), f.legB, LEN.thigh, LEN.shin),
    look: f.look ?? (front ? 'front' : 90),
  }
}

/** Alle Punkte, die für den Rahmen zählen (Kopf mit Radius). */
export function boundsOf(l: Layout): {
  minX: number
  maxX: number
  minY: number
  maxY: number
} {
  const pts: Pt[] = [l.hip, l.neck]
  for (const c of [l.armF, l.armB, l.legF, l.legB]) pts.push(c.mid, c.end)
  const r = LEN.head
  const xs = pts.map((p) => p[0]).concat(l.head[0] - r, l.head[0] + r)
  const ys = pts.map((p) => p[1]).concat(l.head[1] - r, l.head[1] + r)
  return {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys),
  }
}
