import { defineGame } from '../types'

export default defineGame({
  id: 'oelwasser',
  title: 'Öl und Wasser',
  emoji: '🫗',
  category: 'forschen',
  minAge: 4,
  minutes: 15,
  items: ['Gläser', 'Wasser', 'Öl', 'Farbe', 'Spülmittel'],
  tags: ['allein'],
  order: 140,
  steps: [
    'Füllt ein Glas halb mit Wasser und färbt es.',
    'Giesst vorsichtig etwas Öl dazu: Es schwimmt oben!',
    'Rührt um – und wartet: Öl und Wasser trennen sich wieder.',
    'Gebt einen Tropfen Spülmittel dazu und rührt nochmals. Was passiert jetzt?',
  ],
  learn: 'Öl und Wasser mischen sich nicht – Spülmittel hilft.',
})
