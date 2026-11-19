import { defineGame } from '../types'

export default defineGame({
  id: 'doktor',
  title: 'Kuscheltier-Doktor',
  emoji: '🩺',
  category: 'rollen',
  minAge: 3,
  minutes: 20,
  items: ['Kuscheltier', 'WC-Rollen', 'Tuch'],
  tags: ['allein'],
  order: 80,
  steps: [
    'Ein Kuscheltier ist krank.',
    'Untersucht es: WC-Rolle als Hörrohr, Löffel als Spatel.',
    'Macht einen Verband aus einem Tuch.',
    'Erklärt dem Kuscheltier, was ihm fehlt.',
  ],
  learn: 'Körperteile benennen und Angst vor dem Arzt abbauen.',
})
