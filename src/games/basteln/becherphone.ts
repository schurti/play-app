import { defineGame } from '../types'

export default defineGame({
  id: 'becherphone',
  title: 'Becher-Telefon',
  emoji: '📞',
  category: 'basteln',
  minAge: 5,
  minutes: 20,
  items: ['Becher', 'Schnur'],
  tags: ['gruppe'],
  order: 20,
  steps: [
    'Macht ein kleines Loch in den Boden von zwei Bechern.',
    'Zieht die Schnur durch und macht innen einen dicken Knoten.',
    'Spannt die Schnur straff und flüstert hinein.',
  ],
  learn: 'Schall wandert durch die gespannte Schnur.',
  adultNote: 'Die kleinen Löcher in den Bechern macht ein Erwachsener.',
})
