import { defineGame } from '../types'

export default defineGame({
  id: 'wandern',
  title: 'Wandernde Farben',
  emoji: '🌈',
  category: 'forschen',
  minAge: 4,
  minutes: 15,
  items: ['Gläser', 'Wasser', 'Farbe', 'Küchenpapier'],
  tags: ['allein', 'leise'],
  order: 30,
  steps: [
    'Stellt drei Gläser nebeneinander. Das erste und dritte mit Farbwasser füllen, das mittlere leer lassen.',
    'Rollt Küchenpapier-Streifen und hängt sie als Brücken zwischen die Gläser.',
    'Wartet eine Stunde: Das Wasser wandert ins mittlere Glas und mischt sich!',
  ],
  learn: 'Wasser kann im Papier nach oben „klettern“.',
})
