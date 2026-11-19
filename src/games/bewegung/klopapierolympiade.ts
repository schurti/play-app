import { defineGame } from '../types'

export default defineGame({
  id: 'klopapierolympiade',
  title: 'Klopapier-Olympiade',
  emoji: '🏅',
  category: 'bewegung',
  minAge: 3,
  minutes: 30,
  items: ['WC-Rollen', 'Ball'],
  tags: ['gruppe'],
  order: 410,
  steps: [
    'Station 1 – Kegeln: Stellt 6 Rollen auf und rollt einen Ball darauf.',
    'Station 2 – Turm: Wer baut den höchsten Rollen-Turm, bevor er umfällt?',
    'Station 3 – Sprungstern: Legt Rollen in einer Sternform aus und springt über jede Reihe.',
    'Station 4 – Gasse: Rollt den Ball durch eine Gasse aus Rollen, ohne eine zu berühren.',
  ],
  learn: 'Zielen, Bauen, Springen – mit dem, was im Badezimmer steht.',
})
