import { defineGame } from '../types'

export default defineGame({
  id: 'kuschelrolle',
  title: 'Kuschel-Rolle',
  emoji: '🌯',
  category: 'ruhe',
  minAge: 1,
  minutes: 5,
  items: ['Decke'],
  tags: ['leise'],
  order: 350,
  steps: [
    'Legt das Kind an den Rand einer Decke.',
    'Rollt es sanft ein wie einen Wrap – „Jetzt kommt der Käse, jetzt der Salat …“',
    'Und langsam wieder ausrollen.',
  ],
  learn: 'Körpergefühl und Geborgenheit.',
  adultNote: 'Das Gesicht bleibt immer frei.',
})
