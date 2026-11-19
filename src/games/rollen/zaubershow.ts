import { defineGame } from '../types'

export default defineGame({
  id: 'zaubershow',
  title: 'Zauber-Show',
  emoji: '🎩',
  category: 'rollen',
  minAge: 5,
  minutes: 20,
  items: ['Becher', 'Tuch'],
  tags: ['gruppe'],
  order: 190,
  steps: [
    'Übt einen einfachen Trick: Unter einem von drei Bechern verschwindet ein Kügelchen.',
    'Erfindet einen Zauberspruch.',
    'Legt ein Tuch als Umhang um.',
    'Zeigt die Show und verbeugt euch!',
  ],
  learn: 'Geschicklichkeit, Auftreten und Selbstvertrauen.',
})
