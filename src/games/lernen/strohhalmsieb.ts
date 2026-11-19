import { defineGame } from '../types'

export default defineGame({
  id: 'strohhalmsieb',
  title: 'Strohhalm-Sieb',
  emoji: '🥢',
  category: 'lernen',
  minAge: 1,
  maxAge: 4,
  minutes: 10,
  items: ['Strohhalme'],
  tags: ['allein', 'leise'],
  order: 610,
  steps: [
    'Dreht ein Sieb oder einen Salzstreuer mit grossen Löchern um.',
    'Das Kind steckt Strohhalme oder Pfeifenputzer in die Löcher.',
    'Und zieht sie wieder heraus.',
  ],
  learn: 'Feinmotorik und Konzentration.',
})
