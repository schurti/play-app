import { defineGame } from '../types'

export default defineGame({
  id: 'lochflasche',
  title: 'Loch-Flasche',
  emoji: '🍶',
  category: 'wasser',
  minAge: 3,
  minutes: 15,
  items: ['PET-Flasche', 'Wasser'],
  tags: ['allein'],
  order: 90,
  steps: [
    'Stecht drei Löcher übereinander in eine Plastikflasche.',
    'Füllt sie in der Badewanne mit Wasser.',
    'Welcher Strahl spritzt am weitesten – oben, Mitte oder unten?',
    'Deckel zu: Was passiert jetzt?',
  ],
  learn: 'Wasserdruck: Unten drückt mehr Wasser.',
  adultNote: 'Die Löcher sticht ein Erwachsener.',
})
