import { defineGame } from '../types'

export default defineGame({
  id: 'farbmischen',
  title: 'Farben-Zauber',
  emoji: '🧪',
  category: 'forschen',
  minAge: 4,
  minutes: 15,
  items: ['Gläser', 'Wasser', 'Farbe'],
  tags: ['allein'],
  order: 20,
  steps: [
    'Färbt drei Gläser Wasser rot, gelb und blau (Wasser- oder Lebensmittelfarbe).',
    'Raten: Was passiert, wenn man Gelb und Blau mischt?',
    'Mischt in einem leeren Glas und schaut.',
    'Probiert alle Kombinationen aus.',
  ],
  learn: 'Grundfarben ergeben neue Farben.',
})
