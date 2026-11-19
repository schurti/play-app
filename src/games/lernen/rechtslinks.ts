import { defineGame } from '../types'

export default defineGame({
  id: 'rechtslinks',
  title: 'Rechts-links-Schatzweg',
  emoji: '🧭',
  category: 'lernen',
  minAge: 5,
  minutes: 15,
  items: [],
  tags: ['gruppe'],
  order: 210,
  steps: [
    'Versteckt ein Kuscheltier im Raum.',
    'Führt das Kind nur mit Worten hin: „Drei Schritte geradeaus, dann nach rechts drehen …“',
    'Hat es den Schatz gefunden, darf es euch führen.',
  ],
  learn: 'Rechts und links unterscheiden und Anweisungen folgen.',
  variants: 'Leichter: ein Band ums rechte Handgelenk binden.',
})
