import { defineGame } from '../types'

export default defineGame({
  id: 'pizzabelegen',
  title: 'Pizza belegen',
  emoji: '🍕',
  category: 'kochen',
  minAge: 3,
  minutes: 30,
  items: ['Teller'],
  tags: ['gruppe'],
  order: 70,
  steps: [
    'Nehmt fertigen Pizzateig oder Fladenbrot.',
    'Streicht Tomatensauce darauf.',
    'Belegt die Pizza als Gesicht, Sonne oder Tier.',
    'Mit Käse bestreuen und backen lassen.',
  ],
  learn: 'Gestalten, Zutaten kennen und gemeinsam essen.',
  adultNote: 'Den Backofen bedient ein Erwachsener.',
})
