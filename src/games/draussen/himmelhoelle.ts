import { defineGame } from '../types'

export default defineGame({
  id: 'himmelhoelle',
  title: 'Himmel und Hölle',
  emoji: '👣',
  category: 'draussen',
  minAge: 4,
  minutes: 15,
  items: ['Kreide'],
  tags: ['allein', 'gruppe'],
  order: 110,
  steps: [
    'Malt mit Kreide ein Hüpffeld mit den Zahlen 1 bis 10.',
    'Werft einen Stein auf Feld 1.',
    'Hüpft auf einem Bein durch alle Felder – das Feld mit dem Stein wird übersprungen.',
    'Auf dem Rückweg Stein aufheben. Dann auf Feld 2 werfen und so weiter.',
  ],
  learn: 'Gleichgewicht, Zielen und Zahlen.',
})
