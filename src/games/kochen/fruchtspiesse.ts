import { defineGame } from '../types'

export default defineGame({
  id: 'fruchtspiesse',
  title: 'Frucht-Spiesse',
  emoji: '🍓',
  category: 'kochen',
  minAge: 3,
  minutes: 15,
  items: ['Obst', 'Teller'],
  tags: ['allein'],
  order: 50,
  steps: [
    'Schneidet Früchte in Stücke (Erwachsene helfen).',
    'Steckt sie in einem Muster auf Spiesse: Erdbeere, Banane, Traube …',
    'Legt sie auf einen Teller als Regenbogen.',
  ],
  learn: 'Muster und gesunde Znüni.',
  adultNote: 'Spiesse mit stumpfer Spitze verwenden oder die Spitze abknipsen.',
})
