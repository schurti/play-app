import { defineGame } from '../types'

export default defineGame({
  id: 'blindmalen',
  title: 'Blind-Malen',
  emoji: '🙈',
  category: 'malen',
  minAge: 5,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 40,
  steps: [
    'Zu zweit: Eine Person beschreibt ein Bild, z. B. „ein Haus mit einem Baum“.',
    'Die andere malt nur nach der Beschreibung.',
    'Vergleicht danach mit dem Original.',
  ],
  learn: 'Zuhören und genau beschreiben.',
})
