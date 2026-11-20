import { defineGame } from '../types'

export default defineGame({
  id: 'fischen',
  title: 'Fischen',
  emoji: '🎣',
  category: 'karten',
  minAge: 5,
  minutes: 15,
  items: ['Spielkarten'],
  tags: ['gruppe'],
  order: 160,
  steps: [
    'Jedes Kind bekommt fünf Karten, der Rest liegt als «Teich» verdeckt in der Mitte.',
    'Fragt reihum jemanden: «Hast du eine Sieben?»',
    'Wenn ja, bekommt man sie. Wenn nein, heisst es «Geh fischen!» und man zieht vom Teich.',
    'Wer vier gleiche Zahlen hat, legt sie ab. Wer hat am Schluss die meisten Vierer?',
  ],
  learn: 'Zahlen erkennen, merken und fragen.',
})
