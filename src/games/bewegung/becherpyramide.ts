import { defineGame } from '../types'

export default defineGame({
  id: 'becherpyramide',
  title: 'Becher-Pyramiden-Rennen',
  emoji: '🗼',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: ['Becher'],
  tags: ['gruppe'],
  order: 450,
  steps: [
    'Jeder bekommt 10 Becher.',
    'Auf „Los!“ baut jeder eine Pyramide: 4 unten, dann 3, dann 2, dann 1.',
    'Ist sie fertig, wird sie wieder zu einem Stapel zusammengesteckt.',
    'Wer ist zuerst wieder beim Stapel?',
  ],
  learn: 'Geschicklichkeit, Tempo und Zählen.',
})
