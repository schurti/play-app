import { defineGame } from '../types'

export default defineGame({
  id: 'hindernis',
  title: 'Sofa-Hindernisparcours',
  emoji: '🧗',
  category: 'bewegung',
  minAge: 3,
  minutes: 20,
  items: ['Kissen', 'Decke'],
  tags: ['allein'],
  order: 200,
  steps: [
    'Baut einen Parcours: über Kissen steigen, unter einer Decke durchkriechen, um Stühle laufen.',
    'Zeigt den Weg einmal vor.',
    'Das Kind läuft den Parcours – jemand zählt laut mit, wie lange es dauert.',
    'Baut ihn um und versucht es nochmals.',
  ],
  learn: 'Grobmotorik, Planen und Ausdauer.',
})
