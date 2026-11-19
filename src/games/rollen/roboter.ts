import { defineGame } from '../types'

export default defineGame({
  id: 'roboter',
  title: 'Roboter-Spiel',
  emoji: '🤖',
  category: 'rollen',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 240,
  steps: [
    'Eine Person ist ein Roboter und kann nur Befehle ausführen.',
    'Die andere programmiert: „Zwei Schritte vorwärts. Drehen. Arm heben.“',
    'Der Roboter macht alles genau – auch Fehler!',
    'Schafft ihr es, den Roboter zur Küche zu steuern?',
  ],
  learn: 'Genaue Anweisungen geben – die Grundidee des Programmierens.',
})
