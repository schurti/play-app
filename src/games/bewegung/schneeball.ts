import { defineGame } from '../types'

export default defineGame({
  id: 'schneeball',
  title: 'Zeitungs-Schneeballschlacht',
  emoji: '☃️',
  category: 'bewegung',
  minAge: 3,
  minutes: 10,
  items: ['Zeitung', 'Kissen'],
  tags: ['gruppe'],
  order: 90,
  steps: [
    'Knüllt Zeitungsseiten zu vielen Bällen.',
    'Baut mit Kissen eine Mauer in der Mitte.',
    'Eine Minute lang alle Bälle auf die andere Seite werfen!',
    'Wer hat am Ende weniger Bälle auf seiner Seite?',
  ],
  learn: 'Austoben, Werfen und Zählen.',
})
