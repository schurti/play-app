import { defineGame } from '../types'

export default defineGame({
  id: 'zahlenstrahlauto',
  title: 'Zahlenstrahl-Auto',
  emoji: '🚗',
  category: 'lernen',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte', 'Klebeband', 'Spielzeugauto'],
  tags: ['allein', 'gruppe'],
  order: 540,
  steps: [
    'Klebt Papierstreifen zu einer langen Strasse zusammen und schreibt die Zahlen 0 bis 20 darauf.',
    'Stellt ein Spielzeugauto auf die 0.',
    'Ruft eine Zahl – das Kind fährt das Auto genau dorthin.',
    'Für Grössere: „Fahr 3 weiter. Wo bist du jetzt?“',
  ],
  learn: 'Zahlenreihe, Weiterzählen und erste Plus-Aufgaben.',
})
