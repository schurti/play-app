import { defineGame } from '../types'

export default defineGame({
  id: 'zeitunghut',
  title: 'Zeitungs-Hut',
  emoji: '🎩',
  category: 'basteln',
  minAge: 4,
  minutes: 15,
  items: ['Zeitung'],
  tags: ['allein'],
  order: 30,
  steps: [
    'Legt eine Doppelseite Zeitung mit dem Falz nach oben hin.',
    'Faltet beide oberen Ecken zur Mitte, sodass ein Dreieck entsteht.',
    'Klappt den unteren Rand vorne hoch, dreht um und klappt den hinteren Rand hoch.',
    'Aufziehen, aufsetzen und mit Schnipseln verzieren!',
  ],
  learn: 'Falten und genaues Arbeiten.',
})
