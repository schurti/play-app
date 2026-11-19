import { defineGame } from '../types'

export default defineGame({
  id: 'salzmalen',
  title: 'Salz-Tablett',
  emoji: '🧂',
  category: 'ruhe',
  minAge: 3,
  minutes: 10,
  items: ['Salz', 'Teller'],
  tags: ['allein', 'leise'],
  order: 180,
  steps: [
    'Streut eine dünne Schicht Salz auf einen flachen Teller oder ein Blech.',
    'Malt mit dem Finger Linien, Formen oder Buchstaben hinein.',
    'Schüttelt den Teller sanft – alles ist wieder weg.',
    'Malt etwas Neues.',
  ],
  learn: 'Ruhige Fingerbewegungen und Formen üben.',
})
