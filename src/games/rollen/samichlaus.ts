import { defineGame } from '../types'

export default defineGame({
  id: 'samichlaus',
  title: 'Samichlaus-Besuch',
  emoji: '🎅',
  category: 'rollen',
  minAge: 3,
  minutes: 20,
  items: ['Bücher', 'Kleider'],
  tags: ['gruppe'],
  seasons: ['winter'],
  order: 300,
  steps: [
    'Ein Kind verkleidet sich als Samichlaus: roter Mantel, Bart aus Watte, ein grosses Buch.',
    'Die anderen sagen ein Versli auf oder singen ein Lied.',
    'Der Samichlaus liest aus seinem Buch vor, was die Kinder dieses Jahr gut gemacht haben.',
    'Zum Schluss gibt es Nüssli und Mandarinli aus dem Sack. Dann wird getauscht.',
  ],
  learn: 'Rollenspiel, Auftreten und Brauchtum.',
  variants: 'Auch die Kuscheltiere bekommen Besuch vom Samichlaus.',
})
