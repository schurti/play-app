import { defineGame } from '../types'

export default defineGame({
  id: 'farbcode',
  title: 'Farb-Code knacken',
  emoji: '🔐',
  category: 'knobeln',
  minAge: 6,
  minutes: 15,
  items: ['Duplo'],
  tags: ['gruppe', 'leise'],
  order: 180,
  steps: [
    'Ein Kind steckt heimlich drei farbige Steine in eine Reihe und versteckt sie.',
    'Das andere rät mit eigenen Steinen eine Reihe.',
    'Das erste sagt nur, wie viele Farben am richtigen Platz sind.',
    'Wie viele Versuche braucht es, bis der Code geknackt ist?',
  ],
  learn: 'Logisch denken und aus Hinweisen lernen.',
})
