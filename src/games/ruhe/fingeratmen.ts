import { defineGame } from '../types'

export default defineGame({
  id: 'fingeratmen',
  title: 'Fünf-Finger-Atmen',
  emoji: '🖐️',
  category: 'ruhe',
  minAge: 4,
  minutes: 5,
  items: [],
  tags: ['allein', 'leise'],
  order: 230,
  steps: [
    'Spreizt eine Hand.',
    'Fahrt mit dem Zeigefinger der anderen Hand am Daumen hinauf – und atmet ein.',
    'Fahrt auf der anderen Seite hinunter – und atmet aus.',
    'So geht es über alle fünf Finger.',
  ],
  learn: 'Atem und Bewegung verbinden und ruhig werden.',
})
