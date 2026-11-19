import { defineGame } from '../types'

export default defineGame({
  id: 'punktbild',
  title: 'Punkt-zu-Punkt',
  emoji: '✏️',
  category: 'malen',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 170,
  steps: [
    'Ein Erwachsener zeichnet ein einfaches Bild nur aus nummerierten Punkten: Haus, Stern, Fisch.',
    'Das Kind verbindet die Punkte der Reihe nach.',
    'Was ist es geworden? Bunt ausmalen!',
    'Später macht das Kind selbst ein Punktbild für euch.',
  ],
  learn: 'Zahlenreihe und sichere Linienführung.',
  variants:
    'Leichter: nur 5 Punkte. Schwieriger: bis 20 oder mit Buchstaben A, B, C.',
})
