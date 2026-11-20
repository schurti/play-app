import { defineGame } from '../types'

export default defineGame({
  id: 'wasvorher',
  title: 'Was kam zuerst?',
  emoji: '🐣',
  category: 'knobeln',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe', 'leise'],
  order: 200,
  steps: [
    'Malt drei kleine Bilder auf einzelne Zettel: ein Ei, ein Küken, ein Huhn.',
    'Mischt sie. Das Kind legt sie in die richtige Reihenfolge und erzählt dazu.',
    'Weitere Reihen: Samen, Pflanze, Blume. Teig, Ofen, Brot. Schneemann, Sonne, Pfütze.',
    'Jetzt malt das Kind eine Reihe für euch.',
  ],
  learn: 'Abfolgen verstehen und erzählen.',
})
