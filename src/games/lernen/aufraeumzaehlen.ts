import { defineGame } from '../types'

export default defineGame({
  id: 'aufraeumzaehlen',
  title: 'Aufräum-Zählen',
  emoji: '🧸',
  category: 'lernen',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['allein'],
  order: 290,
  steps: [
    'Stellt den Timer auf 5 Minuten.',
    'Bei jedem Ding, das ihr aufräumt, zählt ihr laut.',
    'Wie weit kommt ihr? 10? 20? 30?',
    'Ruft zwischendurch: „Jetzt nur rote Sachen!“',
  ],
  learn: 'Weiterzählen – und nebenbei wird es ordentlich.',
})
