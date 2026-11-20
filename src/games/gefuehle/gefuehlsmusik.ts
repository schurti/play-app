import { defineGame } from '../types'

export default defineGame({
  id: 'gefuehlsmusik',
  title: 'Wie klingt die Musik?',
  emoji: '🎶',
  category: 'gefuehle',
  minAge: 3,
  minutes: 10,
  items: ['Handy'],
  tags: ['gruppe'],
  order: 180,
  steps: [
    'Spielt kurze Musikstücke ab: fröhlich, traurig, gruselig, ruhig, wild.',
    'Bewegt euch so, wie sich die Musik anfühlt.',
    'Fragt: Wie fühlt sich diese Musik an? Welche Farbe hat sie?',
    'Welche Musik passt zu dir, wenn du müde bist? Und wenn du wütend bist?',
  ],
  learn: 'Gefühle wahrnehmen und ausdrücken.',
})
