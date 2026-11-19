import { defineGame } from '../types'

export default defineGame({
  id: 'fensterkuenstler',
  title: 'Fenster-Putz-Künstler',
  emoji: '🪟',
  category: 'haushalt',
  minAge: 4,
  minutes: 15,
  items: ['Wasser', 'Schwamm'],
  tags: ['allein'],
  order: 90,
  steps: [
    'Sprüht oder tupft etwas Wasser mit Spülmittel aufs Fenster.',
    'Malt mit dem Finger Bilder in den Schaum.',
    'Wischt danach alles mit Schwamm und Tuch blitzblank.',
    'Wer sieht jetzt am klarsten nach draussen?',
  ],
  learn: 'Putzen wird Kunst – und das Fenster wird sauber.',
})
