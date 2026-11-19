import { defineGame } from '../types'

export default defineGame({
  id: 'farbeiswuerfel',
  title: 'Farbige Eiswürfel im Bad',
  emoji: '🧊',
  category: 'wasser',
  minAge: 3,
  minutes: 15,
  items: ['Wasser', 'Farbe'],
  tags: ['allein'],
  order: 60,
  steps: [
    'Am Vortag Wasser mit Lebensmittelfarbe in der Eiswürfelform einfrieren.',
    'Gebt die bunten Eiswürfel ins warme Badewasser.',
    'Schaut zu, wie sie schmelzen und das Wasser färben.',
    'Welche Farbe entsteht am Schluss?',
  ],
  learn: 'Schmelzen und Farben mischen.',
})
