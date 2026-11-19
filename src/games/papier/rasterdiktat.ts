import { defineGame } from '../types'

export default defineGame({
  id: 'rasterdiktat',
  title: 'Kästchen-Diktat',
  emoji: '📏',
  category: 'papier',
  minAge: 6,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe', 'leise'],
  order: 200,
  steps: [
    'Das Kind setzt den Stift auf eine Ecke eines Kästchens im Häuschenpapier.',
    'Ein Erwachsener diktiert: „2 nach rechts, 3 nach oben, 1 nach links …“',
    'Das Kind fährt die Linien Kästchen für Kästchen nach.',
    'Was ist entstanden? Eine Treppe, ein Haus, ein Hund?',
  ],
  learn: 'Richtungen, Zählen und genaues Zuhören.',
})
