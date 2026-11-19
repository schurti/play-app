import { defineGame } from '../types'

export default defineGame({
  id: 'sternenhimmel',
  title: 'Sternenhimmel',
  emoji: '✨',
  category: 'ruhe',
  minAge: 4,
  minutes: 15,
  items: ['Taschenlampe', 'Papier'],
  tags: ['leise'],
  order: 210,
  steps: [
    'Ein Erwachsener sticht viele kleine Löcher in ein Papier.',
    'Legt das Papier über die Taschenlampe und haltet es fest.',
    'Macht das Zimmer dunkel und leuchtet an die Decke.',
    'Legt euch hin und schaut die Sterne an.',
  ],
  learn: 'Zur Ruhe kommen und staunen.',
  adultNote: 'Die Löcher sticht ein Erwachsener.',
})
