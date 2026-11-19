import { defineGame } from '../types'

export default defineGame({
  id: 'farbtropfen',
  title: 'Farbtropfen-Wanderung',
  emoji: '🫧',
  category: 'forschen',
  minAge: 4,
  minutes: 20,
  items: ['Klarsichthülle', 'Öl', 'Küchenpapier', 'Farbe', 'Wasser'],
  tags: ['allein', 'leise'],
  order: 260,
  steps: [
    'Malt auf Papier ein Bild mit Kesseln, Blumen oder Pfützen und schiebt es in eine Klarsichthülle.',
    'Klebt kleine Stücke Küchenpapier auf die Ziele.',
    'Bestreicht die Hülle dünn mit Speiseöl.',
    'Setzt Tropfen Farbwasser darauf und schiebt sie mit einem Stift zu den Küchenpapier-Stücken – die saugen die Farbe auf!',
  ],
  learn: 'Öl und Wasser mögen sich nicht – und Papier saugt Wasser auf.',
})
