import { defineGame } from '../types'

export default defineGame({
  id: 'schatztransport',
  title: 'Schatz-Transport',
  emoji: '🚚',
  category: 'bewegung',
  minAge: 3,
  minutes: 15,
  items: ['Kuscheltier'],
  tags: ['gruppe'],
  order: 290,
  steps: [
    'Legt einen Haufen Spielzeug und Kuscheltiere auf eine Seite des Raums.',
    'Die Kinder bringen alles gemeinsam auf die andere Seite – aber immer nur ein Ding pro Weg.',
    'Ein Erwachsener sitzt in der Mitte als „Meer“ und darf ab und zu sanft im Weg sein.',
    'Geschafft? Dann alles wieder zurück – diesmal hüpfend oder rückwärts.',
  ],
  learn: 'Zusammenarbeiten, Ausdauer und gemeinsam planen.',
})
