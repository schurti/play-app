import { defineGame } from '../types'

export default defineGame({
  id: 'tagesablauf',
  title: 'Tagesablauf-Bilder',
  emoji: '🕘',
  category: 'lernen',
  minAge: 4,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 490,
  steps: [
    'Malt auf Kärtchen, was ihr an einem Tag macht: aufstehen, Zähne putzen, frühstücken, spielen, schlafen.',
    'Mischt die Kärtchen.',
    'Legt sie in die richtige Reihenfolge.',
    'Was passiert am Morgen, am Mittag, am Abend?',
  ],
  learn: 'Reihenfolgen und Zeitbegriffe verstehen.',
})
