import { defineGame } from '../types'

export default defineGame({
  id: 'oberbegriffe',
  title: 'Alles, was …',
  emoji: '🍎',
  category: 'sprache',
  minAge: 4,
  minutes: 10,
  items: ['Ball'],
  tags: ['gruppe'],
  order: 120,
  steps: [
    'Eine Person nennt eine Gruppe: „Alles, was Obst ist!“',
    'Der Ball wird herumgeworfen – wer fängt, nennt schnell etwas Passendes.',
    'Wer nichts mehr weiss, wählt die nächste Gruppe.',
  ],
  learn: 'Oberbegriffe und Wortschatz.',
  variants:
    'Ideen: Tiere mit vier Beinen, Dinge in der Küche, Fahrzeuge, Farben.',
})
