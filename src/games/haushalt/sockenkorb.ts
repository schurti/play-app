import { defineGame } from '../types'

export default defineGame({
  id: 'sockenkorb',
  title: 'Socken in den Korb',
  emoji: '🧦',
  category: 'haushalt',
  minAge: 1,
  maxAge: 4,
  minutes: 5,
  items: ['Socken'],
  tags: ['allein'],
  order: 160,
  steps: [
    'Stellt einen Wäschekorb hin.',
    'Das Kind wirft Socken hinein – zuerst aus der Nähe, dann von weiter weg.',
    'Später: Wer findet zwei gleiche Socken?',
  ],
  learn: 'Werfen, Helfen und erste Paare.',
})
