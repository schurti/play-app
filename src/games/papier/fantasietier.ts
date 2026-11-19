import { defineGame } from '../types'

export default defineGame({
  id: 'fantasietier',
  title: 'Fantasie-Tier',
  emoji: '🦄',
  category: 'papier',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 190,
  steps: [
    'Wählt zwei Tiere, z. B. Elefant und Fisch.',
    'Zeichnet ein Tier, das aus beiden besteht.',
    'Erfindet einen Namen: der „Elefisch“!',
    'Was frisst es? Wo wohnt es? Was kann es besonders gut?',
  ],
  learn: 'Tiere kennen, kombinieren und erzählen.',
})
