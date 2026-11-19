import { defineGame } from '../types'

export default defineGame({
  id: 'wuerfelduell',
  title: 'Würfel-Duell',
  emoji: '🎲',
  category: 'lernen',
  minAge: 5,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 360,
  steps: [
    'Zwei Personen würfeln nacheinander mit der App.',
    'Wer die höhere Zahl hat, gewinnt die Runde.',
    'Der Gewinner sagt, um wie viel er höher ist: „Ich habe 2 mehr!“',
    'Wer zuerst 5 Runden gewinnt, ist Würfel-König.',
  ],
  learn: 'Zahlen vergleichen und Unterschiede bestimmen.',
  tool: 'dice',
})
