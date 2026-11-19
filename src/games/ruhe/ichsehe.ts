import { defineGame } from '../types'

export default defineGame({
  id: 'ichsehe',
  title: 'Ich sehe was …',
  emoji: '👀',
  category: 'ruhe',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['leise'],
  order: 50,
  steps: [
    'Eine Person sucht sich heimlich etwas im Raum aus.',
    'Sie sagt: „Ich sehe was, was du nicht siehst, und das ist … rot.“',
    'Die anderen raten.',
  ],
  learn: 'Genau hinschauen und Farben benennen.',
  variants: 'Schwieriger: statt der Farbe den Anfangsbuchstaben sagen.',
})
