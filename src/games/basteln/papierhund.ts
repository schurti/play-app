import { defineGame } from '../types'

export default defineGame({
  id: 'papierhund',
  title: 'Laufender Papier-Hund',
  emoji: '🐕',
  category: 'basteln',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein'],
  order: 260,
  steps: [
    'Faltet einen Papierstreifen in der Mitte, sodass ein Dach entsteht – das ist der Rücken.',
    'Schneidet an beiden Enden Beine, vorne einen Kopf und hinten einen Schwanz.',
    'Biegt die Beine leicht nach aussen, damit der Hund steht.',
    'Stellt ihn auf eine schräge Unterlage oder tippt ihn an – er wackelt los!',
  ],
  learn: 'Falten, Schneiden und ausprobieren, wie Gleichgewicht funktioniert.',
})
