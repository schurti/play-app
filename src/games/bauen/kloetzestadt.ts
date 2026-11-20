import { defineGame } from '../types'

export default defineGame({
  id: 'kloetzestadt',
  title: 'Stadt aus Klötzen',
  emoji: '🏙️',
  category: 'bauen',
  minAge: 3,
  minutes: 30,
  items: ['Bausteine', 'Spielzeugauto', 'Klebeband'],
  tags: ['gruppe'],
  order: 180,
  steps: [
    'Klebt mit Malerklebeband Strassen auf den Boden.',
    'Baut Häuser, eine Schule, einen Laden und ein Spital an die Strassen.',
    'Fahrt mit den Autos von Haus zu Haus.',
    'Wer wohnt wo? Erfindet Geschichten zu eurer Stadt.',
  ],
  learn: 'Planen, Verkehr verstehen und Erzählen.',
  adultNote: 'Malerklebeband lässt sich gut wieder vom Boden lösen.',
})
