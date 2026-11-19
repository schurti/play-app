import { defineGame } from '../types'

export default defineGame({
  id: 'murmellabyrinth',
  title: 'Murmel-Labyrinth',
  emoji: '🌀',
  category: 'basteln',
  minAge: 5,
  minutes: 30,
  items: ['Karton', 'Strohhalme', 'Leim', 'Murmeln'],
  tags: ['allein'],
  order: 220,
  steps: [
    'Nehmt einen Schuhkarton-Deckel.',
    'Klebt Strohhalm-Stücke als Wände hinein – lasst Lücken als Durchgänge.',
    'Malt Start und Ziel.',
    'Kippt den Deckel und lenkt die Murmel ans Ziel.',
  ],
  learn: 'Planen, Ausprobieren und Geschicklichkeit.',
  adultNote: 'Murmeln sind klein und können verschluckt werden.',
})
