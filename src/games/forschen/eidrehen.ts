import { defineGame } from '../types'

export default defineGame({
  id: 'eidrehen',
  title: 'Rohes oder gekochtes Ei?',
  emoji: '🥚',
  category: 'forschen',
  minAge: 4,
  minutes: 10,
  items: ['Ei', 'Teller'],
  tags: ['allein'],
  order: 330,
  steps: [
    'Nehmt ein rohes und ein hart gekochtes Ei.',
    'Dreht beide auf einem Teller wie einen Kreisel.',
    'Das gekochte dreht sich schnell und lange, das rohe eiert und wird langsamer.',
    'Haltet das drehende rohe Ei kurz an und lasst los: Es dreht sich weiter!',
  ],
  learn: 'Flüssiges im Inneren bremst – ein Trick, den auch Köche kennen.',
})
