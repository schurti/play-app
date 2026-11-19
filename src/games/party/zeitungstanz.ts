import { defineGame } from '../types'

export default defineGame({
  id: 'zeitungstanz',
  title: 'Zeitungs-Tanz',
  emoji: '💃',
  category: 'party',
  minAge: 4,
  minutes: 10,
  items: ['Zeitung'],
  tags: ['gruppe'],
  order: 60,
  steps: [
    'Jedes Paar bekommt eine Zeitungsseite.',
    'Startet die Musik in der App und tanzt auf der Zeitung.',
    'Bei jeder Pause wird die Zeitung einmal gefaltet.',
    'Welches Paar bleibt am längsten auf seiner Zeitung?',
  ],
  learn: 'Gleichgewicht, Zusammenarbeit und viel Kichern.',
  tool: 'dance',
})
