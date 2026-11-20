import { defineGame } from '../types'

export default defineGame({
  id: 'wackelturm',
  title: 'Wackelturm',
  emoji: '🏗️',
  category: 'bauen',
  minAge: 5,
  minutes: 15,
  items: ['Bausteine'],
  tags: ['gruppe'],
  order: 160,
  steps: [
    'Baut einen Turm aus Schichten: immer drei gleich lange Klötze nebeneinander, die nächste Schicht quer.',
    'Reihum zieht jedes Kind einen Klotz unten heraus und legt ihn oben drauf.',
    'Nur eine Hand benutzen!',
    'Wer den Turm umwirft, baut ihn neu auf.',
  ],
  learn: 'Ruhige Hand, Abwarten und Gleichgewicht.',
})
