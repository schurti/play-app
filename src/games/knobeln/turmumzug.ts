import { defineGame } from '../types'

export default defineGame({
  id: 'turmumzug',
  title: 'Turm-Umzug',
  emoji: '🗼',
  category: 'knobeln',
  minAge: 5,
  minutes: 15,
  items: ['Teller'],
  tags: ['allein', 'leise'],
  order: 50,
  steps: [
    'Stapelt drei verschieden grosse Teller oder Bücher auf Platz 1 – der grösste unten.',
    'Bringt den ganzen Turm auf Platz 3.',
    'Regeln: Immer nur ein Teil bewegen, und nie ein grosses auf ein kleineres legen.',
    'Schafft ihr es in 7 Zügen?',
  ],
  learn: 'Planen und Schritt für Schritt denken.',
})
