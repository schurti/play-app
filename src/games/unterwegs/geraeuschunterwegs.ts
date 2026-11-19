import { defineGame } from '../types'

export default defineGame({
  id: 'geraeuschunterwegs',
  title: 'Geräusche-Jäger',
  emoji: '👂',
  category: 'unterwegs',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  place: 'beides',
  order: 150,
  steps: [
    'Alle schliessen kurz die Augen.',
    'Zählt alle Geräusche, die ihr hört: Motor, Vogel, Hupe, Lachen.',
    'Wer hört das leiseste Geräusch?',
  ],
  learn: 'Genau hinhören – auch im Wartezimmer oder Zug.',
})
