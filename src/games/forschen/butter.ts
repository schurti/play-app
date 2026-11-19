import { defineGame } from '../types'

export default defineGame({
  id: 'butter',
  title: 'Butter schütteln',
  emoji: '🧈',
  category: 'forschen',
  minAge: 4,
  minutes: 20,
  items: ['Rahm', 'Gläser'],
  tags: ['gruppe'],
  order: 170,
  steps: [
    'Füllt ein Glas mit Schraubdeckel zur Hälfte mit kaltem Rahm.',
    'Deckel gut zu – und schütteln, schütteln, schütteln! Wechselt euch ab.',
    'Zuerst wird Schlagrahm daraus, dann plötzlich ein gelber Klumpen und Flüssigkeit.',
    'Giesst die Buttermilch ab und probiert eure Butter aufs Brot.',
  ],
  learn: 'Durch Schütteln klebt das Fett im Rahm zusammen.',
})
