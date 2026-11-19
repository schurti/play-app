import { defineGame } from '../types'

export default defineGame({
  id: 'fernglas',
  title: 'Rollen-Fernglas',
  emoji: '🔭',
  category: 'basteln',
  minAge: 3,
  minutes: 15,
  items: ['WC-Rollen', 'Klebeband', 'Stifte'],
  tags: ['allein'],
  order: 40,
  steps: [
    'Klebt zwei WC-Rollen nebeneinander zusammen.',
    'Bemalt sie bunt.',
    'Macht eine Schnur als Band dran.',
    'Jetzt auf Expedition: „Ich sehe was, was du nicht siehst!“',
  ],
  learn: 'Basteln und genau beobachten.',
})
