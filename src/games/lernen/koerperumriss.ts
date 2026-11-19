import { defineGame } from '../types'

export default defineGame({
  id: 'koerperumriss',
  title: 'Körper-Umriss',
  emoji: '🧍',
  category: 'lernen',
  minAge: 4,
  minutes: 25,
  items: ['Papier', 'Stifte', 'Klebeband'],
  tags: ['gruppe'],
  order: 470,
  steps: [
    'Klebt mehrere Blätter zu einem grossen Papier zusammen.',
    'Das Kind legt sich darauf, ein Erwachsener fährt den Umriss nach.',
    'Malt Gesicht, Kleider und Haare hinein.',
    'Beschriftet zusammen die Körperteile: Kopf, Arm, Knie, Fuss.',
  ],
  learn: 'Körperteile benennen und die eigene Grösse sehen.',
})
