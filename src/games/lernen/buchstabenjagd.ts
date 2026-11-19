import { defineGame } from '../types'

export default defineGame({
  id: 'buchstabenjagd',
  title: 'Buchstaben-Jagd',
  emoji: '🕵️',
  category: 'lernen',
  minAge: 5,
  minutes: 10,
  items: ['Zeitung', 'Stifte'],
  tags: ['allein', 'gruppe'],
  order: 400,
  steps: [
    'Wählt einen Buchstaben, z. B. das A.',
    'Stellt einen Küchenwecker auf 1 Minute – oder jemand zählt langsam bis 60.',
    'Kreist in einem Zeitungsartikel jedes A ein, das ihr findet.',
    'Zählt am Ende: Wer hat die meisten gefunden?',
  ],
  learn: 'Buchstaben erkennen und genau hinschauen.',
})
