import { defineGame } from '../types'

export default defineGame({
  id: 'kraeuterbutter',
  title: 'Kräuterbutter',
  emoji: '🌿',
  category: 'kochen',
  minAge: 4,
  minutes: 15,
  items: ['Schüssel', 'Löffel', 'Salz'],
  tags: ['allein'],
  order: 110,
  steps: [
    'Lasst Butter weich werden.',
    'Zupft Kräuter wie Schnittlauch oder Petersilie klein.',
    'Rührt alles mit etwas Salz in die Butter.',
    'Streicht sie aufs Brot – riecht ihr die Kräuter?',
  ],
  learn: 'Kräuter kennen und schmecken.',
})
