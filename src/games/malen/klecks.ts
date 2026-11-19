import { defineGame } from '../types'

export default defineGame({
  id: 'klecks',
  title: 'Klecks-Falt-Bild',
  emoji: '🦋',
  category: 'malen',
  minAge: 3,
  minutes: 10,
  items: ['Farbe', 'Papier'],
  tags: ['allein', 'leise'],
  order: 140,
  steps: [
    'Faltet ein Blatt in der Mitte und öffnet es wieder.',
    'Macht auf eine Seite ein paar dicke Farbkleckse.',
    'Klappt das Blatt zu und streicht fest darüber.',
    'Aufklappen: Ein Schmetterling? Ein Käfer? Malt Fühler und Augen dazu.',
  ],
  learn: 'Spiegelbilder und Symmetrie entdecken.',
})
