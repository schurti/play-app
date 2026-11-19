import { defineGame } from '../types'

export default defineGame({
  id: 'farbensortieren',
  title: 'Farben-Körbe',
  emoji: '🧺',
  category: 'lernen',
  minAge: 2,
  minutes: 10,
  items: ['Bausteine', 'Schüssel'],
  tags: ['allein'],
  order: 630,
  steps: [
    'Stellt zwei oder drei Schüsseln hin und legt in jede einen farbigen Baustein.',
    'Das Kind sortiert die anderen Bausteine dazu.',
    'Benennt die Farben dabei.',
  ],
  learn: 'Farben erkennen und sortieren.',
})
