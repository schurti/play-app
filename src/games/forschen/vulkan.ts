import { defineGame } from '../types'

export default defineGame({
  id: 'vulkan',
  title: 'Mini-Vulkan',
  emoji: '🌋',
  category: 'forschen',
  minAge: 5,
  minutes: 15,
  items: ['Essig & Natron', 'Gläser', 'Farbe'],
  tags: ['gruppe'],
  place: 'beides',
  order: 40,
  steps: [
    'Stellt ein Glas auf einen Teller oder ins Spülbecken.',
    'Gebt zwei Löffel Natron, einen Spritzer Spülmittel und etwas Farbe hinein.',
    'Giesst Essig dazu – und der Vulkan bricht aus!',
  ],
  learn: 'Bei der Mischung entsteht ein Gas, das schäumt.',
  adultNote: 'Nur mit Erwachsenen. Nicht in die Augen bringen.',
})
