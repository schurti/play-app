import { defineGame } from '../types'

export default defineGame({
  id: 'zehengreifen',
  title: 'Zehen-Greifen',
  emoji: '🦶',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: ['Socken', 'Schüssel'],
  tags: ['allein', 'gruppe'],
  order: 220,
  steps: [
    'Zieht Schuhe und Socken aus.',
    'Verteilt ein paar zusammengerollte Socken am Boden.',
    'Hebt sie nur mit den Zehen auf und tragt sie in die Schüssel.',
    'Wer schafft am meisten in einer Minute?',
  ],
  learn: 'Fussmuskeln stärken und Geschicklichkeit.',
})
