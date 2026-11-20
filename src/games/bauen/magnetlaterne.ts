import { defineGame } from '../types'

export default defineGame({
  id: 'magnetlaterne',
  title: 'Leuchtturm im Dunkeln',
  emoji: '🔦',
  category: 'bauen',
  minAge: 3,
  minutes: 10,
  items: ['Magformers', 'Taschenlampe'],
  tags: ['leise'],
  seasons: ['herbst', 'winter'],
  order: 100,
  steps: [
    'Baut einen Turm aus bunten Magnet-Teilen.',
    'Macht das Zimmer dunkel und stellt eine Taschenlampe hinein.',
    'Schaut, wie die Farben an die Decke leuchten.',
    'Baut den Turm um: Wie verändert sich das Licht?',
  ],
  learn: 'Licht, Farben und Durchschauen.',
})
