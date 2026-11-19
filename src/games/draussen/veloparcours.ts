import { defineGame } from '../types'

export default defineGame({
  id: 'veloparcours',
  title: 'Velo-Parcours',
  emoji: '🚲',
  category: 'draussen',
  minAge: 4,
  minutes: 25,
  items: ['Kreide', 'Becher'],
  tags: ['gruppe'],
  order: 270,
  steps: [
    'Malt mit Kreide einen Parcours auf einen sicheren Platz: Slalom, Kurven, eine schmale Brücke.',
    'Stellt Becher als Hütchen für den Slalom auf.',
    'Fahrt mit Laufrad, Trottinett oder Velo durch.',
    'Schwieriger: ganz langsam fahren, ohne den Fuss abzusetzen.',
  ],
  learn: 'Gleichgewicht und Geschicklichkeit.',
  adultNote: 'Immer mit Helm und nur auf einem Platz ohne Verkehr.',
})
