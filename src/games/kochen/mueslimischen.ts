import { defineGame } from '../types'

export default defineGame({
  id: 'mueslimischen',
  title: 'Müesli-Bar',
  emoji: '🥣',
  category: 'kochen',
  minAge: 3,
  minutes: 10,
  items: ['Schüssel', 'Obst', 'Löffel'],
  tags: ['allein'],
  order: 90,
  steps: [
    'Stellt kleine Schüsseln mit Haferflocken, Nüssen, Rosinen und Früchten bereit.',
    'Jeder mischt sein eigenes Müesli.',
    'Gebt ihm einen Namen: „Bananen-Raketen-Müesli“!',
  ],
  learn: 'Selber wählen und gesund frühstücken.',
  adultNote: 'Ganze Nüsse erst für Kinder ab etwa 4 Jahren.',
})
