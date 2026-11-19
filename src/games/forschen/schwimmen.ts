import { defineGame } from '../types'

export default defineGame({
  id: 'schwimmen',
  title: 'Sinken oder Schwimmen?',
  emoji: '🛟',
  category: 'forschen',
  minAge: 4,
  minutes: 15,
  items: ['Schüssel', 'Wasser'],
  tags: ['allein'],
  order: 10,
  steps: [
    'Füllt eine Schüssel mit Wasser.',
    'Sucht kleine Dinge: Löffel, Korken, Radiergummi, Blatt, Münze.',
    'Raten: Sinkt es oder schwimmt es?',
    'Ausprobieren und in zwei Gruppen sortieren.',
  ],
  learn: 'Vermuten, ausprobieren, Ergebnisse vergleichen.',
  adultNote: 'Mit Erwachsenen machen, wegen des Wassers.',
})
