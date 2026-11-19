import { defineGame } from '../types'

export default defineGame({
  id: 'nudelkette',
  title: 'Nudel-Kette',
  emoji: '📿',
  category: 'basteln',
  minAge: 3,
  minutes: 20,
  items: ['Nudeln', 'Schnur'],
  tags: ['allein', 'leise'],
  order: 110,
  steps: [
    'Nehmt Röhrennudeln, z. B. Penne oder Rigatoni.',
    'Fädelt sie auf eine Schnur.',
    'Macht ein Muster: zwei grosse, eine kleine … oder bemalt sie vorher.',
  ],
  learn: 'Fingerfertigkeit, Muster und Ruhe.',
})
