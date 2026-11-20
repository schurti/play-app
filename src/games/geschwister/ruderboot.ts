import { defineGame } from '../types'

export default defineGame({
  id: 'ruderboot',
  title: 'Ruderboot',
  emoji: '🚣',
  category: 'geschwister',
  minAge: 2,
  minutes: 5,
  items: [],
  tags: ['gruppe'],
  order: 130,
  steps: [
    'Setzt euch gegenüber, die Füsse berühren sich, und haltet euch an den Händen.',
    'Schaukelt abwechselnd vor und zurück, wie beim Rudern.',
    'Singt dazu ein Lied, zum Beispiel «Ruderboot, Ruderboot, fahr übers Meer».',
    'Kommt ein Sturm? Schneller schaukeln! Ruhige See? Ganz langsam.',
  ],
  learn: 'Rhythmus, Dehnen und Nähe.',
})
