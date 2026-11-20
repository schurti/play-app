import { defineGame } from '../types'

export default defineGame({
  id: 'limonade',
  title: 'Limonade mischen',
  emoji: '🍋',
  category: 'kochen',
  minAge: 3,
  minutes: 10,
  items: ['Zitrone', 'Wasser', 'Gläser', 'Löffel'],
  tags: ['gruppe'],
  seasons: ['sommer'],
  order: 160,
  steps: [
    'Presst eine Zitrone aus.',
    'Mischt den Saft mit Wasser und einem Löffel Honig oder Sirup.',
    'Probiert: zu sauer? zu süss?',
    'Gebt Minze oder Beeren dazu.',
  ],
  learn: 'Schmecken, mischen und abmessen.',
})
