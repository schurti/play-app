import { defineGame } from '../types'

export default defineGame({
  id: 'dreibeinlauf',
  title: 'Dreibein-Lauf',
  emoji: '🦵',
  category: 'geschwister',
  minAge: 4,
  minutes: 10,
  items: ['Tuch'],
  tags: ['gruppe'],
  place: 'beides',
  order: 80,
  steps: [
    'Stellt euch nebeneinander und bindet die inneren Beine mit einem Tuch zusammen.',
    'Legt die Arme um die Schultern.',
    'Zählt beim Gehen gemeinsam: «Mitte, aussen, Mitte, aussen.»',
    'Schafft ihr es bis zum Sofa und zurück?',
  ],
  learn: 'Rhythmus, Absprache und Gleichgewicht.',
})
