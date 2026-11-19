import { defineGame } from '../types'

export default defineGame({
  id: 'tierspuren',
  title: 'Spuren-Detektiv',
  emoji: '🐾',
  category: 'draussen',
  minAge: 4,
  minutes: 20,
  items: [],
  tags: ['gruppe'],
  order: 140,
  steps: [
    'Sucht im Schnee, im Matsch oder im Sand nach Spuren.',
    'Welche Spur ist von einem Menschen, einem Hund, einem Vogel?',
    'Macht selbst Spuren: gehen, hüpfen, rennen – wie sehen sie aus?',
    'Eine Person legt eine Spur, die anderen folgen ihr.',
  ],
  learn: 'Genau beobachten und Spuren deuten.',
})
