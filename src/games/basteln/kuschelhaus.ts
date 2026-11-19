import { defineGame } from '../types'

export default defineGame({
  id: 'kuschelhaus',
  title: 'Kuscheltier-Haus',
  emoji: '🏡',
  category: 'basteln',
  minAge: 4,
  minutes: 30,
  items: ['Karton', 'Stifte', 'Klebeband'],
  tags: ['allein'],
  order: 70,
  steps: [
    'Nehmt eine Schachtel als Haus.',
    'Schneidet Fenster und Tür aus (Erwachsene helfen).',
    'Malt Tapeten und Möbel, baut ein Bett aus einer kleinen Schachtel.',
    'Zieht mit einem Kuscheltier ein!',
  ],
  learn: 'Räume planen und gestalten.',
})
