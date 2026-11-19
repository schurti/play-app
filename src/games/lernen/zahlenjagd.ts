import { defineGame } from '../types'

export default defineGame({
  id: 'zahlenjagd',
  title: 'Zahlen-Jagd',
  emoji: '🔎',
  category: 'lernen',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['allein'],
  order: 190,
  steps: [
    'Schreibt die Zahlen von 1 bis 10 auf ein Blatt.',
    'Sucht in der Wohnung echte Zahlen: auf der Uhr, der Fernbedienung, Verpackungen, Büchern.',
    'Jede gefundene Zahl wird abgehakt.',
    'Sind alle zehn gefunden?',
  ],
  learn: 'Ziffern erkennen und entdecken, wo Zahlen im Alltag stecken.',
})
