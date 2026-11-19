import { defineGame } from '../types'

export default defineGame({
  id: 'flieger',
  title: 'Papierflieger-Wettbewerb',
  emoji: '✈️',
  category: 'basteln',
  minAge: 5,
  minutes: 15,
  items: ['Papier'],
  tags: ['allein', 'gruppe'],
  order: 80,
  steps: [
    'Faltet ein A4-Blatt längs in der Mitte und öffnet es wieder.',
    'Faltet die beiden oberen Ecken zur Mittellinie.',
    'Faltet die neuen schrägen Kanten noch einmal zur Mitte.',
    'Klappt den Flieger zusammen und faltet beide Flügel nach unten.',
    'Wessen Flieger fliegt am weitesten?',
  ],
  learn: 'Falten, Ausprobieren und Messen.',
})
