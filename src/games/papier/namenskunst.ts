import { defineGame } from '../types'

export default defineGame({
  id: 'namenskunst',
  title: 'Namens-Kunst',
  emoji: '🔠',
  category: 'papier',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 300,
  steps: [
    'Schreibt euren Namen in grossen, dicken Buchstaben aufs Blatt (Erwachsene helfen).',
    'Malt jeden Buchstaben anders aus: getupft, gestreift, mit Blumen.',
    'Malt rundherum Dinge, die ihr gern habt.',
    'Hängt das Bild an die Zimmertür.',
  ],
  learn: 'Den eigenen Namen kennen und Buchstaben gestalten.',
})
