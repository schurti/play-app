import { defineGame } from '../types'

export default defineGame({
  id: 'pustebild',
  title: 'Puste-Bild',
  emoji: '🌬️',
  category: 'malen',
  minAge: 4,
  minutes: 15,
  items: ['Farbe', 'Wasser', 'Strohhalme', 'Papier'],
  tags: ['allein'],
  order: 130,
  steps: [
    'Verdünnt etwas Farbe mit Wasser.',
    'Tropft mit dem Pinsel oder Löffel einen Klecks aufs Papier.',
    'Pustet mit dem Strohhalm darauf – die Farbe läuft in alle Richtungen.',
    'Was ist entstanden? Ein Baum, ein Monster, ein Feuerwerk?',
  ],
  learn: 'Atemkraft dosieren und Zufallsformen deuten.',
  adultNote:
    'Kinder zeigen, dass man durch den Strohhalm nur pustet und nicht saugt.',
})
