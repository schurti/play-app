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
  order: 120,
  steps: [
    'Sucht ein Wort mit zwei Bedeutungen, z. B. „Bank“ (zum Sitzen und fürs Geld).',
    'Zwei Personen beschreiben je eine Bedeutung: „Mein Teekesselchen steht im Park.“ – „Mein Teekesselchen hat viel Geld.“',
    'Die anderen raten das Wort.',
  ],
  learn: 'Wörter mit mehreren Bedeutungen entdecken.',
  variants: 'Ideen: Maus, Schloss, Birne, Ball, Leiter, Hahn.',
})
