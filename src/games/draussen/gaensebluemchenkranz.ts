import { defineGame } from '../types'

export default defineGame({
  id: 'gaensebluemchenkranz',
  title: 'Gänseblümchen-Kranz',
  emoji: '🌼',
  category: 'draussen',
  minAge: 4,
  minutes: 20,
  items: [],
  tags: ['allein', 'leise'],
  order: 160,
  steps: [
    'Pflückt Gänseblümchen mit langen Stielen.',
    'Macht mit dem Fingernagel einen kleinen Schlitz in einen Stiel.',
    'Fädelt das nächste Blümchen hindurch.',
    'Weiter so, bis die Kette lang genug für ein Armband oder eine Krone ist.',
  ],
  learn: 'Feinmotorik und Geduld.',
})
