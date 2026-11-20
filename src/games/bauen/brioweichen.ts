import { defineGame } from '../types'

export default defineGame({
  id: 'brioweichen',
  title: 'Weichen-Rätsel',
  emoji: '🔀',
  category: 'bauen',
  minAge: 4,
  minutes: 15,
  items: ['Brio-Bahn'],
  tags: ['gruppe'],
  order: 60,
  steps: [
    'Baut eine Strecke mit zwei oder drei Weichen und mehreren Enden.',
    'Stellt an jedes Ende ein Kuscheltier oder einen Gegenstand.',
    'Bevor der Zug losfährt: Zu wem fährt er wohl? Ratet!',
    'Lasst den Zug fahren und schaut, ob ihr recht hattet. Dann Weichen umstellen.',
  ],
  learn: 'Vorausdenken und Wege verfolgen.',
})
