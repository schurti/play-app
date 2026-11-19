import { defineGame } from '../types'

export default defineGame({
  id: 'symmetrie',
  title: 'Spiegelbild ergänzen',
  emoji: '🦋',
  category: 'papier',
  minAge: 5,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 70,
  steps: [
    'Zeichnet auf Häuschenpapier eine senkrechte Linie in der Mitte.',
    'Ein Erwachsener malt links die Hälfte eines Bildes: Schmetterling, Haus, Gesicht.',
    'Das Kind ergänzt rechts das Spiegelbild – Kästchen für Kästchen.',
    'Zum Schluss alles bunt ausmalen.',
  ],
  learn: 'Symmetrie, Zählen und genaues Arbeiten.',
  variants: 'Leichter: mit einem Spiegel an der Mittellinie überprüfen.',
})
