import { defineGame } from '../types'

export default defineGame({
  id: 'partnerflieger',
  title: 'Flieger',
  emoji: '✈️',
  category: 'bewegung',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  place: 'beides',
  order: 420,
  steps: [
    'Ein Erwachsener liegt auf dem Rücken und stellt die Füsse an den Bauch des Kindes.',
    'Beide halten sich an den Händen.',
    'Der Erwachsene hebt das Kind mit den Füssen langsam hoch – das Kind breitet die Arme aus wie ein Flugzeug.',
    'Sanft landen und nochmals starten!',
  ],
  learn: 'Vertrauen, Körperspannung und Gleichgewicht.',
  adultNote:
    'Auf weicher Unterlage. Das Kind gut an Händen und Hüfte halten und nur so hoch, wie es sich sicher anfühlt.',
})
