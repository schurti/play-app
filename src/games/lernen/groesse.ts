import { defineGame } from '../types'

export default defineGame({
  id: 'groesse',
  title: 'Grössen-Reihe',
  emoji: '📏',
  category: 'lernen',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['allein'],
  order: 110,
  steps: [
    'Sammelt fünf Dinge, z. B. Löffel, Schuh, Buch, Ball, Becher.',
    'Legt sie vom kleinsten zum grössten.',
    'Dann je ein Ding in jede Hand: Was ist schwerer?',
  ],
  learn: 'Vergleichen: gross und klein, schwer und leicht.',
})
