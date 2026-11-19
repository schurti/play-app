import { defineGame } from '../types'

export default defineGame({
  id: 'witzewerkstatt',
  title: 'Witze-Werkstatt',
  emoji: '😂',
  category: 'sprache',
  minAge: 5,
  minutes: 15,
  items: [],
  tags: ['gruppe'],
  order: 60,
  steps: [
    'Jeder erzählt seinen Lieblingswitz.',
    'Erfindet zusammen einen neuen Witz: „Was sagt der grosse Stift zum kleinen Stift? …“',
    'Übt, den Witz mit Pause vor der Pointe zu erzählen.',
  ],
  learn: 'Sprachwitz, Pointen und Erzählen vor anderen.',
})
