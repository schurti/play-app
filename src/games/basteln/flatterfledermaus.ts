import { defineGame } from '../types'

export default defineGame({
  id: 'flatterfledermaus',
  title: 'Flatter-Fledermaus',
  emoji: '🦇',
  category: 'basteln',
  minAge: 5,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 280,
  steps: [
    'Faltet ein quadratisches Papier zu einem Dreieck.',
    'Faltet die beiden Ecken als Flügel nach unten und die Spitze als Kopf nach vorne.',
    'Malt Augen und Zähne auf.',
    'Zieht vorsichtig am Kopf – die Flügel flattern!',
  ],
  learn: 'Falten nach Anleitung und Feinmotorik.',
})
