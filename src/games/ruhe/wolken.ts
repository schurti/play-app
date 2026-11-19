import { defineGame } from '../types'

export default defineGame({
  id: 'wolken',
  title: 'Wolken-Bilder',
  emoji: '☁️',
  category: 'ruhe',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['allein', 'leise'],
  order: 70,
  steps: [
    'Legt euch ans Fenster oder auf den Balkon und schaut in den Himmel.',
    'Sucht Formen in den Wolken: ein Hase, ein Schiff, ein Drache?',
    'Erzählt leise, was ihr seht.',
    'Wie verändert sich die Wolke langsam?',
  ],
  learn: 'Zur Ruhe kommen und Fantasie wecken.',
})
