import { boundsOf, layoutFigure, LEN, type Figure } from './skeleton'

const stand: Figure = {
  view: 'front',
  torso: 180,
  armF: [0, 0],
  armB: [0, 0],
  legF: [0, 0],
  legB: [0, 0],
}

describe('layoutFigure', () => {
  it('stellt eine stehende Figur aufrecht hin', () => {
    const l = layoutFigure(stand)
    expect(l.neck[0]).toBeCloseTo(0)
    expect(l.neck[1]).toBeCloseTo(-LEN.torso)
    expect(l.legF.end[1]).toBeCloseTo(LEN.thigh + LEN.shin)
    expect(l.legF.root[0]).toBe(7)
    expect(l.legB.root[0]).toBe(-7)
    expect(l.look).toBe('front')
  })

  it('legt Glieder von der Seite übereinander und blickt nach rechts', () => {
    const l = layoutFigure({ ...stand, view: 'side', legF: [90, 90] })
    expect(l.legF.root).toEqual(l.legB.root)
    expect(l.legF.end[0]).toBeCloseTo(LEN.thigh + LEN.shin)
    expect(l.look).toBe(90)
  })

  it('berechnet den Rahmen inklusive Kopf', () => {
    const b = boundsOf(layoutFigure(stand))
    expect(b.maxY).toBeCloseTo(LEN.thigh + LEN.shin)
    expect(b.minY).toBeCloseTo(-LEN.torso - LEN.neck - LEN.head)
  })
})
