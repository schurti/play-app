import { defineGame } from '../types'

export default defineGame({
  id: 'tropfenmuenze',
  title: 'Tropfen auf der Münze',
  emoji: '🪙',
  category: 'wasser',
  minAge: 5,
  minutes: 10,
  items: ['Münzen', 'Wasser', 'Strohhalme'],
  tags: ['allein'],
  order: 100,
  steps: [
    'Legt eine Münze auf den Tisch.',
    'Schätzt: Wie viele Wassertropfen passen darauf?',
    'Tropft mit dem Strohhalm vorsichtig einen Tropfen nach dem anderen.',
    'Schaut, wie sich das Wasser wölbt, bevor es überläuft!',
  ],
  learn: 'Oberflächenspannung – Wasser hat eine „Haut“.',
})
