import { defineGame } from '../types'

export default defineGame({
  id: 'spiegelgesichter',
  title: 'Spiegel-Gesichter',
  emoji: '🪞',
  category: 'gefuehle',
  minAge: 1,
  maxAge: 4,
  minutes: 5,
  items: ['Spiegel'],
  tags: ['leise'],
  order: 150,
  steps: [
    'Setzt euch zusammen vor einen Spiegel.',
    'Macht Gesichter: fröhlich, traurig, überrascht.',
    'Sagt das Gefühl dazu: „Jetzt bin ich fröhlich!“',
  ],
  learn: 'Gefühle sehen und benennen.',
})
