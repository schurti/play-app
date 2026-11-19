import { defineGame } from '../types'

export default defineGame({
  id: 'zahlen',
  title: 'Dinge-Sammler',
  emoji: '🔢',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 20,
  steps: [
    'Die App nennt eine Zahl und eine Eigenschaft.',
    'Sammelt genau so viele passende Dinge.',
    'Legt sie in eine Reihe und zählt laut nach.',
  ],
  learn: 'Zählen und Eigenschaften unterscheiden.',
  variants: 'Schwieriger: Die gesammelten Dinge danach der Grösse nach ordnen.',
  tool: 'number',
})
