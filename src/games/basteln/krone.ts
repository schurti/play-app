import { defineGame } from '../types'

export default defineGame({
  id: 'krone',
  title: 'Krone & Maske',
  emoji: '👑',
  category: 'basteln',
  minAge: 3,
  minutes: 20,
  items: ['Karton', 'Stifte', 'Klebeband'],
  tags: ['allein'],
  order: 100,
  steps: [
    'Schneidet einen Kartonstreifen, der um den Kopf passt.',
    'Schneidet oben Zacken hinein.',
    'Bemalt und verziert die Krone, klebt sie zusammen.',
    'Oder: eine Tiermaske mit Augenlöchern.',
  ],
  learn: 'Schneiden, Gestalten und danach Rollenspiel.',
})
