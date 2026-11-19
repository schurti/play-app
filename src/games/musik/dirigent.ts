import { defineGame } from '../types'

export default defineGame({
  id: 'dirigent',
  title: 'Tempo-Orchester',
  emoji: '🎻',
  category: 'musik',
  minAge: 4,
  minutes: 10,
  items: ['Töpfe', 'Löffel'],
  tags: ['gruppe'],
  order: 110,
  steps: [
    'Jeder nimmt ein „Instrument“: Topf, Becher, Löffel.',
    'Der Dirigent zeigt das Tempo: langsam schwingen, schnell schwingen.',
    'Das Orchester spielt genau in diesem Tempo.',
    'Bei geballter Faust: sofort Stille!',
  ],
  learn: 'Tempo erkennen und gemeinsam spielen.',
})
