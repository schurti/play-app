import { defineGame } from '../types'

export default defineGame({
  id: 'blindmalen',
  title: 'Blind-Malen',
  emoji: '🙈',
  category: 'malen',
  minAge: 5,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 40,
  steps: [
    'Zu zweit: Eine Person holt sich heimlich ein Bild aus der App, z. B. «Ein Hund mit einer Krone auf dem Mond».',
    'Sie beschreibt es, die andere malt nur nach der Beschreibung.',
    'Vergleicht danach: Was stimmt, was ist lustig geworden?',
  ],
  learn: 'Zuhören und genau beschreiben.',
  tool: 'term',
})
