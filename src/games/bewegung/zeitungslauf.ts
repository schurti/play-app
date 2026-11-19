import { defineGame } from '../types'

export default defineGame({
  id: 'zeitungslauf',
  title: 'Zeitungs-Inseln',
  emoji: '🗞️',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: ['Zeitung'],
  tags: ['allein', 'gruppe'],
  order: 210,
  steps: [
    'Jeder bekommt zwei Zeitungsblätter.',
    'Stellt euch auf ein Blatt und legt das andere vor euch hin.',
    'Steigt hinüber und legt das hintere Blatt wieder nach vorne.',
    'So geht es bis ans Ziel – ohne den Boden zu berühren!',
  ],
  learn: 'Gleichgewicht, Planen und Geschicklichkeit.',
})
