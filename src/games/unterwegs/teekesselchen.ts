import { defineGame } from '../types'

export default defineGame({
  id: 'teekesselchen',
  title: 'Teekesselchen',
  emoji: '🫖',
  category: 'unterwegs',
  minAge: 6,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  place: 'beides',
  order: 120,
  steps: [
    'Zwei Personen schauen heimlich in der App nach einem Wort mit zwei Bedeutungen, z. B. «Bank».',
    'Jede beschreibt eine Bedeutung: «Mein Teekesselchen steht im Park.» – «Mein Teekesselchen hat viel Geld.»',
    'Die anderen raten das Wort.',
  ],
  learn: 'Wörter mit mehreren Bedeutungen entdecken.',
  variants: 'Ideen: Maus, Schloss, Birne, Ball, Leiter, Hahn.',
  tool: 'term',
})
