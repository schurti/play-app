import { defineGame } from '../types'

export default defineGame({
  id: 'mumien',
  title: 'Mumien wickeln',
  emoji: '🧟',
  category: 'party',
  minAge: 4,
  minutes: 10,
  items: ['WC-Rollen'],
  tags: ['gruppe'],
  order: 30,
  steps: [
    'Teilt euch in Zweierteams.',
    'Eine Person wickelt die andere mit Klopapier ein – nur das Gesicht bleibt frei.',
    'Wer hat zuerst eine fertige Mumie?',
    'Danach darf sich die Mumie befreien.',
  ],
  learn: 'Teamarbeit und Tempo.',
})
