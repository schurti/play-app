import { defineGame } from '../types'

export default defineGame({
  id: 'kartonkuh',
  title: 'Hungrige Karton-Kuh',
  emoji: '🐄',
  category: 'lernen',
  minAge: 3,
  minutes: 20,
  items: ['Karton', 'Stifte', 'Socken'],
  tags: ['allein', 'gruppe'],
  order: 560,
  steps: [
    'Malt auf einen grossen Karton ein Tier mit weit offenem Maul.',
    'Schneidet das Maul als Loch aus und stellt den Karton auf.',
    'Rollt Socken zu Bällen – das ist das Futter.',
    'Werft das Futter ins Maul und zählt: Wie viele Bälle hat die Kuh gefressen?',
  ],
  learn: 'Zielen, Zählen und Fantasie.',
  variants: 'Ruft eine Zahl: „Die Kuh will genau 4 Bälle!“',
  adultNote: 'Das Mundloch schneidet ein Erwachsener aus.',
})
