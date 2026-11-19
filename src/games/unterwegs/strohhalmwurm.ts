import { defineGame } from '../types'

export default defineGame({
  id: 'strohhalmwurm',
  title: 'Strohhalm-Wurm',
  emoji: '🪱',
  category: 'unterwegs',
  minAge: 4,
  minutes: 5,
  items: ['Strohhalme', 'Wasser'],
  tags: ['allein'],
  place: 'beides',
  order: 140,
  steps: [
    'Schiebt die Papierhülle eines Strohhalms ganz zusammen, sodass ein kleiner „Wurm“ entsteht.',
    'Legt ihn auf den Tisch.',
    'Tropft mit dem Strohhalm ein paar Wassertropfen darauf.',
    'Der Wurm streckt sich und kriecht!',
  ],
  learn: 'Papier saugt Wasser auf und dehnt sich aus.',
})
