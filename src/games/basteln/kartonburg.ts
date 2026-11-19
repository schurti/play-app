import { defineGame } from '../types'

export default defineGame({
  id: 'kartonburg',
  title: 'Karton-Burg',
  emoji: '🏰',
  category: 'basteln',
  minAge: 4,
  minutes: 45,
  items: ['Karton', 'WC-Rollen', 'Klebeband', 'Stifte'],
  tags: ['allein'],
  order: 170,
  steps: [
    'Nehmt einen grossen Karton als Burg.',
    'Schneidet oben Zinnen und vorne ein Tor hinein.',
    'Klebt WC-Rollen als Türme an die Ecken.',
    'Malt Steine, Fahnen und Fenster – dann ziehen die Ritter ein!',
  ],
  learn: 'Bauen, Planen und dann spielen.',
  adultNote: 'Zinnen und Tor schneidet ein Erwachsener.',
})
