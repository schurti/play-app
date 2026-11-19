import { defineGame } from '../types'

export default defineGame({
  id: 'blaetterrascheln',
  title: 'Blätter-Rascheln',
  emoji: '🍂',
  category: 'draussen',
  minAge: 1,
  maxAge: 4,
  minutes: 10,
  items: [],
  tags: ['allein'],
  order: 290,
  steps: [
    'Sucht im Herbst einen Haufen trockenes Laub.',
    'Stapft hindurch, werft die Blätter in die Luft.',
    'Hört ihr, wie es raschelt?',
  ],
  learn: 'Hören, fühlen und Freude an der Natur.',
})
