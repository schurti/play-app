import { defineGame } from '../types'

export default defineGame({
  id: 'wasserglastrick',
  title: 'Wasserglas-Trick',
  emoji: '🥛',
  category: 'forschen',
  minAge: 5,
  minutes: 10,
  items: ['Gläser', 'Wasser', 'Karton'],
  tags: ['allein'],
  order: 190,
  steps: [
    'Füllt ein Glas randvoll mit Wasser.',
    'Legt ein Stück glatten Karton darauf.',
    'Haltet den Karton fest und dreht das Glas über dem Spülbecken um.',
    'Lasst den Karton los: Das Wasser bleibt drin!',
  ],
  learn: 'Der Luftdruck drückt den Karton gegen das Glas.',
  adultNote: 'Über dem Spülbecken üben!',
})
