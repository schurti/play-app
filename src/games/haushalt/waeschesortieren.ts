import { defineGame } from '../types'

export default defineGame({
  id: 'waeschesortieren',
  title: 'Wäsche-Sortier-Rennen',
  emoji: '👕',
  category: 'haushalt',
  minAge: 3,
  minutes: 10,
  items: ['Kleider'],
  tags: ['allein', 'gruppe'],
  order: 40,
  steps: [
    'Schüttet einen Korb Wäsche aus.',
    'Sortiert sie auf Haufen: Hell, Dunkel, Bunt.',
    'Wer findet die meisten Socken-Paare dazu?',
  ],
  learn: 'Farben sortieren und helfen.',
})
