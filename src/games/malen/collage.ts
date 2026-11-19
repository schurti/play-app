import { defineGame } from '../types'

export default defineGame({
  id: 'collage',
  title: 'Zeitungs-Collage',
  emoji: '📰',
  category: 'malen',
  minAge: 3,
  minutes: 20,
  items: ['Zeitung', 'Papier', 'Klebeband'],
  tags: ['allein', 'leise'],
  order: 20,
  steps: [
    'Reisst Zeitungsstücke in verschiedenen Farben und Formen.',
    'Legt daraus ein Tier, ein Haus oder ein Gesicht.',
    'Klebt alles fest und malt Details dazu.',
  ],
  learn: 'Formen sehen und Feinmotorik.',
})
