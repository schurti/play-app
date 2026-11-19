import { defineGame } from '../types'

export default defineGame({
  id: 'schattentheater',
  title: 'Schatten-Theater',
  emoji: '🎭',
  category: 'rollen',
  minAge: 4,
  minutes: 20,
  items: ['Taschenlampe', 'Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 230,
  steps: [
    'Macht das Zimmer dunkel und leuchtet mit der Taschenlampe an eine helle Wand.',
    'Formt mit den Händen Schatten: Hase, Vogel, Hund.',
    'Oder schneidet Figuren aus Papier.',
    'Spielt ein Theater mit den Schatten.',
  ],
  learn: 'Licht und Schatten und Erzählen.',
  adultNote: 'Lampe nur gemeinsam mit Erwachsenen benutzen.',
})
