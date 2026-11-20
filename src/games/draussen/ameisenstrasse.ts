import { defineGame } from '../types'

export default defineGame({
  id: 'ameisenstrasse',
  title: 'Ameisen-Strasse',
  emoji: '🐜',
  category: 'draussen',
  minAge: 4,
  minutes: 15,
  items: ['Lupe'],
  tags: ['allein', 'leise'],
  seasons: ['fruehling', 'sommer'],
  order: 240,
  steps: [
    'Sucht eine Ameisenstrasse.',
    'Setzt euch leise daneben und schaut mit der Lupe genau hin.',
    'Was tragen die Ameisen? Wohin laufen sie?',
    'Legt ein Brotkrümelchen in die Nähe: Wie lange dauert es, bis sie es finden?',
  ],
  learn: 'Beobachten, Geduld und kleine Tiere verstehen.',
})
