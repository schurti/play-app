import { defineGame } from '../types'

export default defineGame({
  id: 'tschausepp',
  title: 'Tschau Sepp für Kinder',
  emoji: '👋',
  category: 'karten',
  minAge: 6,
  minutes: 20,
  items: ['Spielkarten'],
  tags: ['gruppe'],
  order: 150,
  steps: [
    'Jedes Kind bekommt fünf Karten, eine Karte liegt offen in der Mitte.',
    'Reihum legt man eine Karte mit gleicher Farbe oder gleicher Zahl darauf.',
    'Wer nicht kann, zieht eine Karte vom Stapel.',
    'Bei der zweitletzten Karte ruft man «Tschau!», bei der letzten «Sepp!». Wer es vergisst, zieht zwei Karten.',
  ],
  learn: 'Farben und Zahlen vergleichen, Regeln merken.',
  variants: 'Für Kleinere ohne Rufen und mit offenen Karten spielen.',
})
