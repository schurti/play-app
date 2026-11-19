import { defineGame } from '../types'

export default defineGame({
  id: 'freudeglas',
  title: 'Freude-Glas',
  emoji: '🫙',
  category: 'gefuehle',
  minAge: 4,
  minutes: 5,
  items: ['Gläser', 'Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 80,
  steps: [
    'Stellt ein leeres Glas auf.',
    'Jeden Abend schreibt oder malt jeder einen schönen Moment auf einen Zettel.',
    'Faltet ihn und legt ihn ins Glas.',
    'An einem traurigen Tag holt ihr Zettel heraus und lest sie.',
  ],
  learn: 'Schöne Momente sammeln und sich daran erinnern.',
})
