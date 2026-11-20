import { defineGame } from '../types'

export default defineGame({
  id: 'pferderennen',
  title: 'Pferderennen',
  emoji: '🐎',
  category: 'karten',
  minAge: 4,
  minutes: 15,
  items: ['Spielkarten'],
  tags: ['gruppe'],
  order: 190,
  steps: [
    'Legt die vier Asse als Pferde nebeneinander an eine Startlinie.',
    'Legt sechs Karten verdeckt als Rennbahn daneben.',
    'Deckt vom Stapel Karte für Karte auf: Das Pferd mit derselben Farbe rückt einen Platz vor.',
    'Jedes Kind wettet vorher auf ein Pferd. Welches ist zuerst im Ziel?',
  ],
  learn: 'Spannung aushalten, Zeichen zuordnen und zählen.',
})
