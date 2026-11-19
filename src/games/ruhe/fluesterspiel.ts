import { defineGame } from '../types'

export default defineGame({
  id: 'fluesterspiel',
  title: 'Flüster-Zeit',
  emoji: '🐭',
  category: 'ruhe',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 190,
  steps: [
    'Stellt den Timer auf 5 Minuten.',
    'In dieser Zeit wird nur geflüstert – auch die Erwachsenen!',
    'Flüstert euch Aufgaben zu: „Hol bitte einen Löffel.“',
    'Wer laut spricht, muss leise kichern.',
  ],
  learn: 'Lautstärke kontrollieren und leise werden.',
})
