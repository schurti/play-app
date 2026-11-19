import { defineGame } from '../types'

export default defineGame({
  id: 'komplimentkette',
  title: 'Kompliment-Kette',
  emoji: '🌟',
  category: 'gefuehle',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 40,
  steps: [
    'Setzt euch im Kreis.',
    'Jeder sagt der Person rechts etwas Schönes: „Ich mag, wie du lachst.“',
    'Die Person bedankt sich und gibt ein Kompliment weiter.',
    'Wie fühlt es sich an, ein Kompliment zu bekommen?',
  ],
  learn: 'Wertschätzung zeigen und annehmen.',
})
