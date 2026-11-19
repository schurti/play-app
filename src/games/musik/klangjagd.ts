import { defineGame } from '../types'

export default defineGame({
  id: 'klangjagd',
  title: 'Klang-Jagd',
  emoji: '🔍',
  category: 'musik',
  minAge: 4,
  minutes: 15,
  items: [],
  tags: ['allein'],
  order: 160,
  steps: [
    'Sucht in der Wohnung Dinge, die klingen: etwas, das klirrt, raschelt, quietscht, brummt und klopft.',
    'Bringt alles an einen Ort.',
    'Spielt jedem eure Klänge vor.',
    'Welcher Klang ist der schönste? Welcher der lustigste?',
  ],
  learn: 'Klänge beschreiben und unterscheiden.',
})
