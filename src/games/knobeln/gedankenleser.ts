import { defineGame } from '../types'

export default defineGame({
  id: 'gedankenleser',
  title: 'Gedankenleser',
  emoji: '🔮',
  category: 'knobeln',
  minAge: 6,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 120,
  steps: [
    'Sag dem Kind: „Denk dir eine Zahl. Verdopple sie. Zähl 10 dazu. Teile durch 2. Zieh deine Zahl ab.“',
    'Sag dann: „Du hast 5!“ – es klappt immer.',
    'Erklärt zusammen, warum.',
    'Probiert andere Zahlen statt 10.',
  ],
  learn: 'Kopfrechnen und den Trick verstehen.',
})
