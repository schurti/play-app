import { defineGame } from '../types'

export default defineGame({
  id: 'abfalltrennen',
  title: 'Abfall-Sortier-Spiel',
  emoji: '♻️',
  category: 'haushalt',
  minAge: 4,
  minutes: 15,
  items: ['Verpackungen'],
  tags: ['allein'],
  order: 130,
  steps: [
    'Sammelt saubere leere Verpackungen: Karton, PET-Flasche, Dose, Glas, Joghurtbecher.',
    'Stellt Kisten auf: Papier, PET, Glas, Rest.',
    'Das Kind sortiert alles in die richtige Kiste.',
    'Bringt das Altpapier zusammen weg.',
  ],
  learn: 'Abfall trennen und die Umwelt schützen.',
})
