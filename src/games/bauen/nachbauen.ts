import { defineGame } from '../types'

export default defineGame({
  id: 'nachbauen',
  title: 'Nachbauen',
  emoji: '📐',
  category: 'bauen',
  minAge: 4,
  minutes: 15,
  items: ['Duplo'],
  tags: ['gruppe', 'leise'],
  order: 30,
  steps: [
    'Jedes Kind nimmt die gleichen Steine: zum Beispiel je zwei rote, zwei blaue und einen gelben.',
    'Eines baut heimlich ein kleines Modell.',
    'Das andere schaut es genau an und baut es nach.',
    'Vergleicht: Ist alles gleich? Dann tauschen.',
  ],
  learn: 'Genau hinschauen, Formen und Lagen erkennen.',
  variants:
    'Schwieriger: Das Modell nur 10 Sekunden zeigen und dann verstecken.',
})
