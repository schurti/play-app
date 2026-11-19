import { defineGame } from '../types'

export default defineGame({
  id: 'schatten',
  title: 'Schatten-Zeichnen',
  emoji: '🔦',
  category: 'malen',
  minAge: 4,
  minutes: 20,
  items: ['Taschenlampe', 'Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 30,
  steps: [
    'Klebt ein Papier an die Wand.',
    'Stellt ein Spielzeug davor und leuchtet es an.',
    'Zeichnet den Schatten mit dem Stift nach.',
    'Malt den Schatten bunt aus.',
  ],
  learn: 'Licht, Schatten und Umrisse.',
  adultNote: 'Lampe nur gemeinsam mit Erwachsenen benutzen.',
})
