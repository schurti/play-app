import { defineGame } from '../types'

export default defineGame({
  id: 'maltafel',
  title: 'Mal-Tafel',
  emoji: '🖍️',
  category: 'malen',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['allein', 'leise'],
  order: 50,
  steps: [
    'Wähle eine Farbe und male mit dem Finger auf der Tafel.',
    'Mal-Idee: dein Lieblingstier, deine Familie oder ein Fantasie-Haus.',
    'Danach das Gleiche auf Papier nachmalen!',
  ],
  learn:
    'Feinmotorik und Farben. (Diese Idee spielt am Bildschirm – lieber kurz halten.)',
  tool: 'draw',
})
