import { defineGame } from '../types'

export default defineGame({
  id: 'waage',
  title: 'Kleiderbügel-Waage',
  emoji: '⚖️',
  category: 'lernen',
  minAge: 5,
  minutes: 20,
  items: ['Kleiderbügel', 'Becher', 'Schnur'],
  tags: ['allein'],
  order: 220,
  steps: [
    'Hängt an beide Enden eines Kleiderbügels je einen Becher an einer Schnur.',
    'Hängt den Bügel an eine Türklinke.',
    'Legt in jeden Becher etwas: Was ist schwerer? Die schwere Seite sinkt nach unten.',
    'Findet zwei Dinge, die gleich schwer sind.',
  ],
  learn: 'Gewichte vergleichen: schwer, leicht, gleich schwer.',
  adultNote: 'Die Löcher in die Becher macht ein Erwachsener.',
})
