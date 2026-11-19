import { defineGame } from '../types'

export default defineGame({
  id: 'bohnenglas',
  title: 'Bohnen-Keimglas',
  emoji: '🫘',
  category: 'forschen',
  minAge: 3,
  minutes: 10,
  items: ['Gläser', 'Küchenpapier', 'Wasser', 'Bohnen'],
  tags: ['allein', 'leise'],
  order: 160,
  steps: [
    'Rollt nasses Küchenpapier und steckt es rundherum in ein Glas.',
    'Klemmt ein paar Bohnen zwischen Glas und Papier.',
    'Haltet das Papier jeden Tag feucht.',
    'Beobachtet: Wann kommt die Wurzel, wann der Spross? Malt jeden Tag ein Bild.',
  ],
  learn: 'Wie eine Pflanze aus einem Samen wächst.',
})
