import { defineGame } from '../types'

export default defineGame({
  id: 'zusammen',
  title: 'Was gehört zusammen?',
  emoji: '🧩',
  category: 'lernen',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['allein'],
  order: 200,
  steps: [
    'Sammelt Dinge, die zusammengehören: Zahnbürste und Zahnpasta, Socke und Schuh, Löffel und Becher.',
    'Mischt alles auf einen Haufen.',
    'Das Kind findet die Paare und erklärt, warum sie zusammengehören.',
  ],
  learn: 'Zusammenhänge erkennen und begründen.',
})
