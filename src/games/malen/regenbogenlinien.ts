import { defineGame } from '../types'

export default defineGame({
  id: 'regenbogenlinien',
  title: 'Regenbogen-Linien',
  emoji: '🌈',
  category: 'malen',
  minAge: 3,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 220,
  steps: [
    'Zeichnet eine geschwungene Linie aufs Papier.',
    'Fahrt sie mit einer anderen Farbe ganz knapp daneben nach.',
    'Dann noch eine und noch eine – bis ein Regenbogen entsteht.',
  ],
  learn: 'Stiftführung, Geduld und Konzentration.',
})
