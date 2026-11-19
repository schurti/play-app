import { defineGame } from '../types'

export default defineGame({
  id: 'tellertiere',
  title: 'Teller-Löwe',
  emoji: '🦁',
  category: 'basteln',
  minAge: 3,
  minutes: 25,
  items: ['Teller', 'Wolle', 'Leim', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 160,
  steps: [
    'Nehmt einen Pappteller und malt ein Löwengesicht in die Mitte.',
    'Streicht Leim rund um den Rand.',
    'Klebt kurze Wollstücke als Mähne an.',
    'Mit einem Gummiband wird daraus eine Maske.',
  ],
  learn: 'Feinmotorik und Fantasie.',
  variants: 'Auch als Igel, Sonne oder Schaf.',
})
