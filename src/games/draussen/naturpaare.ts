import { defineGame } from '../types'

export default defineGame({
  id: 'naturpaare',
  title: 'Natur-Paare',
  emoji: '🌰',
  category: 'draussen',
  minAge: 4,
  minutes: 20,
  items: ['Tuch'],
  tags: ['gruppe'],
  order: 250,
  steps: [
    'Sammelt draussen je zwei gleiche Dinge: zwei Zapfen, zwei Eicheln, zwei Ahornblätter …',
    'Legt alles verdeckt unter ein Tuch oder versteckt es im Gras.',
    'Deckt abwechselnd zwei Dinge auf: Passen sie zusammen?',
    'Wer findet die meisten Paare?',
  ],
  learn: 'Gedächtnis und Naturdinge unterscheiden.',
})
