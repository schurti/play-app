import { defineGame } from '../types'

export default defineGame({
  id: 'sonnenbilder',
  title: 'Sonnen-Bilder',
  emoji: '☀️',
  category: 'draussen',
  minAge: 4,
  minutes: 20,
  items: ['Papier'],
  tags: ['allein'],
  seasons: ['sommer'],
  order: 320,
  steps: [
    'Legt ein dunkles, farbiges Papier an einen sonnigen Platz.',
    'Legt Blätter, Schlüssel, Bausteine oder Scheren darauf.',
    'Wartet einige Stunden in der Sonne.',
    'Nehmt die Sachen weg: Ihre Umrisse sind dunkel geblieben, das Papier rundherum ist verblasst!',
  ],
  learn: 'Licht und Sonne wirken lassen, Geduld.',
})
