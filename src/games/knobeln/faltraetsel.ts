import { defineGame } from '../types'

export default defineGame({
  id: 'faltraetsel',
  title: 'Papier-Falt-Rätsel',
  emoji: '📄',
  category: 'knobeln',
  minAge: 5,
  minutes: 10,
  items: ['Papier'],
  tags: ['allein', 'leise'],
  order: 140,
  steps: [
    'Faltet ein Papier zweimal und schneidet eine Ecke ab.',
    'Ratet, bevor ihr es aufklappt: Wie viele Löcher hat das Papier?',
    'Aufklappen und vergleichen.',
    'Schwieriger: dreimal falten.',
  ],
  learn: 'Räumliche Vorstellung.',
})
