import { defineGame } from '../types'

export default defineGame({
  id: 'fuehlsocke',
  title: 'Fühl-Socke',
  emoji: '🧦',
  category: 'lernen',
  minAge: 3,
  minutes: 10,
  items: ['Socken'],
  tags: ['leise'],
  order: 60,
  steps: [
    'Steckt heimlich einen Gegenstand in eine grosse Socke. Ideen gibt die App.',
    'Das Kind ertastet ihn, ohne hinzuschauen.',
    'Zuerst beschreiben (rund, kalt, rau …), dann raten.',
  ],
  learn: 'Tastsinn und Wörter für Oberflächen.',
  tool: 'term',
})
