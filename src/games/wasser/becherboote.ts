import { defineGame } from '../types'

export default defineGame({
  id: 'becherboote',
  title: 'Becher-Boote-Rennen',
  emoji: '🛶',
  category: 'wasser',
  minAge: 3,
  minutes: 15,
  items: ['Becher', 'Strohhalme'],
  tags: ['gruppe'],
  order: 20,
  steps: [
    'Lasst Plastikbecher als Boote in der Badewanne schwimmen.',
    'Pustet sie mit dem Strohhalm über das Wasser.',
    'Wer ist zuerst auf der anderen Seite?',
  ],
  learn: 'Puste-Kraft und Wasser erleben.',
})
