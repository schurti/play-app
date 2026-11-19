import { defineGame } from '../types'

export default defineGame({
  id: 'ichpacke',
  title: 'Ich packe meinen Koffer',
  emoji: '🧳',
  category: 'lernen',
  minAge: 5,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 140,
  steps: [
    'Die erste Person sagt: „Ich packe meinen Koffer und nehme mit: eine Zahnbürste.“',
    'Die nächste wiederholt alles und hängt ein neues Ding an.',
    'So wird der Koffer immer voller.',
    'Wer etwas vergisst, darf neu anfangen.',
  ],
  learn: 'Gedächtnis, Reihenfolgen und Wortschatz.',
  variants:
    'Leichter: Zu jedem Ding eine Bewegung machen – das hilft beim Merken.',
})
