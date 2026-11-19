import { defineGame } from '../types'

export default defineGame({
  id: 'koerperschlagzeug',
  title: 'Körper-Schlagzeug',
  emoji: '🥁',
  category: 'musik',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 150,
  steps: [
    'Hört euch das Muster in der App an.',
    'Spielt es auf eurem Körper nach: 👏 klatschen, 🦶 stampfen, 🥁 auf die Oberschenkel patschen.',
    'Erfindet danach eigene Körper-Rhythmen mit Schnipsen und Brust-Klopfen.',
  ],
  learn: 'Rhythmus spüren und Muster nachspielen.',
  tool: 'rhythm',
})
