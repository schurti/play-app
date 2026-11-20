import { defineGame } from '../types'

export default defineGame({
  id: 'zapfenwurf',
  title: 'Zapfen-Zielwurf',
  emoji: '🪣',
  category: 'draussen',
  minAge: 3,
  minutes: 15,
  items: ['Eimer'],
  tags: ['allein', 'gruppe'],
  seasons: ['herbst'],
  order: 190,
  steps: [
    'Sammelt einen Haufen Tannenzapfen.',
    'Stellt einen Eimer oder legt einen Ring aus Stöcken als Ziel.',
    'Werft der Reihe nach – jeder Treffer zählt.',
    'Nach jeder Runde einen Schritt weiter weg.',
  ],
  learn: 'Zielen, Zählen und Abstand schätzen.',
})
