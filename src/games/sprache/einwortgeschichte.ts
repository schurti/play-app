import { defineGame } from '../types'

export default defineGame({
  id: 'einwortgeschichte',
  title: 'Ein-Wort-Geschichte',
  emoji: '🗣️',
  category: 'sprache',
  minAge: 5,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 40,
  steps: [
    'Setzt euch in einen Kreis.',
    'Erzählt zusammen eine Geschichte – aber jeder sagt immer nur ein einziges Wort.',
    '„Es“ – „war“ – „einmal“ – „ein“ – „Pinguin“ …',
    'Varianten: ein Ein-Wort-Brief, eine Ein-Wort-Warnung oder ein Ein-Wort-Rezept.',
  ],
  learn: 'Zuhören, gemeinsam denken und Sätze bauen.',
})
