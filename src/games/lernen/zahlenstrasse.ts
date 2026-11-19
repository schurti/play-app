import { defineGame } from '../types'

export default defineGame({
  id: 'zahlenstrasse',
  title: 'Zahlen-Strasse',
  emoji: '🛣️',
  category: 'lernen',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte', 'Klebeband'],
  tags: ['allein', 'gruppe'],
  order: 260,
  steps: [
    'Schreibt die Zahlen 1 bis 10 gross auf zehn Blätter.',
    'Klebt sie der Reihe nach als Strasse auf den Boden.',
    'Hüpft vorwärts und zählt laut mit – dann rückwärts.',
    'Jemand ruft eine Zahl: Wer steht zuerst darauf?',
  ],
  learn: 'Zahlenreihe vorwärts und rückwärts, Ziffern erkennen.',
  variants: 'Schwieriger: „Springt auf 3 – und jetzt 2 weiter. Wo seid ihr?“',
})
