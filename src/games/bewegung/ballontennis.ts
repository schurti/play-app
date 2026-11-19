import { defineGame } from '../types'

export default defineGame({
  id: 'ballontennis',
  title: 'Ballon-Tennis',
  emoji: '🎾',
  category: 'bewegung',
  minAge: 4,
  minutes: 15,
  items: ['Ballon', 'Teller'],
  tags: ['gruppe'],
  order: 150,
  steps: [
    'Nehmt Papp- oder Plastikteller als Schläger.',
    'Spielt euch einen Ballon über eine Schnur oder ein Sofa zu.',
    'Fällt er auf eurer Seite zu Boden, bekommt die andere Seite einen Punkt.',
  ],
  learn: 'Zielen, Timing und faires Zählen.',
  adultNote: 'Geplatzte Ballonstücke sofort wegräumen.',
})
