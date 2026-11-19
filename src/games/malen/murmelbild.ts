import { defineGame } from '../types'

export default defineGame({
  id: 'murmelbild',
  title: 'Murmel-Rollbild',
  emoji: '🔵',
  category: 'malen',
  minAge: 4,
  minutes: 15,
  items: ['Karton', 'Farbe', 'Papier', 'Murmeln'],
  tags: ['allein'],
  order: 230,
  steps: [
    'Legt ein Papier in einen Schuhkarton oder Deckel.',
    'Tunkt eine Murmel in Farbe und legt sie hinein.',
    'Kippt den Karton hin und her – die Murmel malt Spuren.',
    'Mit einer zweiten Farbe wiederholen.',
  ],
  learn: 'Bewegung steuern und Zufallsmuster erzeugen.',
  adultNote:
    'Murmeln sind klein und können verschluckt werden – nur mit Erwachsenen spielen.',
})
