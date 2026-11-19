import { defineGame } from '../types'

export default defineGame({
  id: 'salzbild',
  title: 'Salz-Bild',
  emoji: '🧂',
  category: 'malen',
  minAge: 4,
  minutes: 25,
  items: ['Leim', 'Salz', 'Farbe', 'Pinsel', 'Papier'],
  tags: ['allein', 'leise'],
  order: 180,
  steps: [
    'Malt mit Leim eine Form aufs Papier, z. B. eine Schnecke oder einen Stern.',
    'Streut viel Salz darüber und schüttelt den Rest ab.',
    'Tupft mit dem Pinsel verdünnte Farbe auf das Salz.',
    'Schaut, wie die Farbe durch das Salz wandert!',
  ],
  learn: 'Salz saugt Wasser auf – Farben laufen und mischen sich.',
})
