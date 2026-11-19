import { defineGame } from '../types'

export default defineGame({
  id: 'baendertanz',
  title: 'Bänder-Tanz',
  emoji: '🎀',
  category: 'musik',
  minAge: 3,
  minutes: 10,
  items: ['Tuch'],
  tags: ['allein'],
  order: 200,
  steps: [
    'Nehmt ein Tuch oder ein langes Band in die Hand.',
    'Startet Musik.',
    'Lasst das Tuch tanzen: Kreise, Wellen, Achten, hoch und tief.',
    'Langsame Musik = sanfte Bewegungen, schnelle Musik = wilde Wirbel.',
  ],
  learn: 'Musik in Bewegung übersetzen.',
})
