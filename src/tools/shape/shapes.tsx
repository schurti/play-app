import type { ReactElement } from 'react'

export const SHAPES: Record<string, ReactElement> = {
  Kreis: <circle cx="60" cy="60" r="46" />,
  Dreieck: <polygon points="60,12 110,104 10,104" />,
  Quadrat: <rect x="16" y="16" width="88" height="88" />,
  Rechteck: <rect x="6" y="32" width="108" height="56" />,
  Oval: <ellipse cx="60" cy="60" rx="54" ry="34" />,
  Herz: (
    <path d="M60 104 C10 70 6 36 30 24 C46 16 58 28 60 36 C62 28 74 16 90 24 C114 36 110 70 60 104Z" />
  ),
}
