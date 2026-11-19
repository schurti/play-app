import { defineGame } from '../types'

export default defineGame({
  id: 'werbinich',
  title: 'Wer bin ich?',
  emoji: '🏷️',
  category: 'papier',
  minAge: 5,
  minutes: 15,
  items: ['Papier', 'Stifte', 'Klebeband'],
  tags: ['gruppe'],
  order: 230,
  steps: [
    'Jeder malt heimlich ein Tier oder eine Figur auf einen Zettel.',
    'Klebt den Zettel einer anderen Person auf die Stirn – ohne dass sie ihn sieht.',
    'Mit Ja-Nein-Fragen findet jeder heraus, wer er ist: „Habe ich vier Beine?“',
    'Wer sich zuerst errät, gewinnt.',
  ],
  learn: 'Gezielt fragen und logisch eingrenzen.',
})
