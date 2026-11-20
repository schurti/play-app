import { defineGame } from '../types'

export default defineGame({
  id: 'mutleiter',
  title: 'Mut-Leiter',
  emoji: '🪜',
  category: 'gefuehle',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe', 'leise'],
  order: 160,
  steps: [
    'Malt zusammen eine Leiter mit fünf Sprossen.',
    'Fragt: Was ist ein bisschen schwierig für dich? Und was ganz schwierig? Zum Beispiel allein einschlafen, Kopf unter Wasser, Hallo sagen.',
    'Schreibt oder malt die kleinen Dinge unten, die grossen oben.',
    'Klettert Sprosse für Sprosse: Jedes Mal, wenn etwas klappt, wird die Sprosse bunt angemalt.',
  ],
  learn: 'Ängste benennen und kleine Schritte feiern.',
})
