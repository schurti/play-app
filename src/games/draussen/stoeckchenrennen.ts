import { defineGame } from '../types'

export default defineGame({
  id: 'stoeckchenrennen',
  title: 'Stöckchen-Rennen',
  emoji: '🪵',
  category: 'draussen',
  minAge: 3,
  minutes: 15,
  items: [],
  tags: ['gruppe'],
  order: 40,
  steps: [
    'Jeder sucht sich ein eigenes Stöckchen und merkt es sich gut.',
    'Stellt euch auf eine Brücke über einem Bach, mit Blick flussaufwärts.',
    'Lasst alle Stöckchen gleichzeitig ins Wasser fallen.',
    'Rennt auf die andere Seite: Welches Stöckchen kommt zuerst unter der Brücke hervor?',
  ],
  learn: 'Strömung beobachten und Geduld.',
  adultNote:
    'Nur an sicheren Brücken über flachem Wasser und immer mit Erwachsenen.',
})
