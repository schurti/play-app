import { defineGame } from '../types'

export default defineGame({
  id: 'guggus',
  title: 'Guggus-Versteck',
  emoji: '🙈',
  category: 'rollen',
  minAge: 1,
  minutes: 5,
  items: ['Tuch'],
  tags: ['leise'],
  order: 280,
  steps: [
    'Haltet ein Tuch vors Gesicht: „Wo ist Mama?“',
    'Tuch weg: „Guggus!“',
    'Dann darf sich das Kind verstecken.',
    'Versteckt auch ein Kuscheltier halb unter dem Tuch.',
  ],
  learn: 'Lernen, dass Dinge noch da sind, auch wenn man sie nicht sieht.',
})
