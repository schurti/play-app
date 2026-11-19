import { defineGame } from '../types'

export default defineGame({
  id: 'zahlenschatten',
  title: 'Zahlen-Schatten',
  emoji: '🔦',
  category: 'lernen',
  minAge: 4,
  minutes: 20,
  items: ['Karton', 'Taschenlampe'],
  tags: ['gruppe'],
  order: 590,
  steps: [
    'Schneidet grosse Zahlen aus Karton aus.',
    'Macht das Zimmer dunkel und leuchtet mit der Taschenlampe durch eine Zahl an die Wand.',
    'Die anderen raten die Zahl.',
    'Schwieriger: zwei Zahlen hintereinander – was ergibt das zusammen?',
  ],
  learn: 'Ziffern erkennen, auch gross, schief und als Schatten.',
  adultNote: 'Das Ausschneiden der Zahlen macht ein Erwachsener.',
})
