import { defineGame } from '../types'

export default defineGame({
  id: 'zweihandbausteine',
  title: 'Zwei-Hand-Bausteine',
  emoji: '🙌',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: ['Bausteine', 'Papier', 'Stifte'],
  tags: ['allein'],
  order: 510,
  steps: [
    'Malt eine Vorlage: zwei Reihen mit farbigen Kästchen, links und rechts.',
    'Das Kind legt mit beiden Händen gleichzeitig die passenden Bausteine auf die Kästchen.',
    'Nach jeder Reihe wird einmal geklatscht.',
    'Schwieriger: schneller werden oder die Hände über Kreuz nehmen.',
  ],
  learn: 'Beide Hände gleichzeitig steuern, Farben zuordnen, konzentrieren.',
})
