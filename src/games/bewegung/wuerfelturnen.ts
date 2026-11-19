import { defineGame } from '../types'

export default defineGame({
  id: 'wuerfelturnen',
  title: 'Würfel-Turnen',
  emoji: '🎲',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 160,
  steps: [
    'Würfelt mit dem Würfel in der App.',
    'Die Zahl sagt, was ihr macht: 1 Hampelmann, 2 Kniebeugen, 3 Froschsprünge, 4 auf einem Bein stehen, 5 Purzelbaum, 6 frei wählen.',
    'Macht die Übung so oft, wie der Würfel zeigt.',
  ],
  learn: 'Würfelbilder lesen, zählen und sich austoben.',
  variants:
    'Mit zwei Würfeln: Ein Würfel bestimmt die Übung, der andere wie oft.',
  tool: 'dice',
})
