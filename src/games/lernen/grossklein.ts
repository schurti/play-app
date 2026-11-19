import { defineGame } from '../types'

export default defineGame({
  id: 'grossklein',
  title: 'Gross und klein',
  emoji: '🅰️',
  category: 'lernen',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 450,
  steps: [
    'Schreibt auf Kärtchen grosse Buchstaben (A, B, M) und auf andere die kleinen (a, b, m).',
    'Mischt alle Kärtchen.',
    'Findet die Paare, die zusammengehören.',
    'Legt alle verdeckt hin und sucht die Paare durch Aufdecken.',
  ],
  learn: 'Gross- und Kleinbuchstaben zuordnen.',
})
