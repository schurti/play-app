import { defineGame } from '../types'

export default defineGame({
  id: 'strohhalmfloete',
  title: 'Strohhalm-Tröte',
  emoji: '🎺',
  category: 'musik',
  minAge: 6,
  minutes: 10,
  items: ['Strohhalme'],
  tags: ['allein'],
  order: 90,
  steps: [
    'Drückt ein Ende eines Strohhalms flach.',
    'Ein Erwachsener schneidet das flache Ende zu einer Spitze.',
    'Nehmt die Spitze in den Mund, presst die Lippen leicht zusammen und blast kräftig.',
    'Kürzt den Strohhalm: Wird der Ton höher?',
  ],
  learn: 'Kürzere Röhren klingen höher.',
  adultNote: 'Das Zuschneiden der Spitze macht ein Erwachsener.',
})
