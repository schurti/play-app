import { defineGame } from '../types'

export default defineGame({
  id: 'kaesekaestchen',
  title: 'Käsekästchen',
  emoji: '🧀',
  category: 'papier',
  minAge: 5,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe', 'leise'],
  order: 20,
  steps: [
    'Zeichnet ein Gitter aus Punkten, z. B. 5 × 5.',
    'Abwechselnd verbindet jeder zwei benachbarte Punkte mit einem Strich.',
    'Wer ein Kästchen schliesst, schreibt seinen Anfangsbuchstaben hinein und darf nochmals.',
    'Sind alle Kästchen voll, wird gezählt: Wer hat mehr?',
  ],
  learn: 'Vorausdenken, Zählen und faires Abwechseln.',
})
