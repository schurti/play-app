import { defineGame } from '../types'

export default defineGame({
  id: 'kreidestrassen',
  title: 'Kreide-Strassen',
  emoji: '🚲',
  category: 'draussen',
  minAge: 3,
  minutes: 25,
  items: ['Kreide'],
  tags: ['allein'],
  order: 120,
  steps: [
    'Malt mit Strassenkreide eine ganze Stadt auf den Platz: Strassen, Kreisel, Zebrastreifen, Parkplätze.',
    'Fahrt mit Laufrad, Velo oder Spielzeugautos durch die Stadt.',
    'Spielt Verkehr: Wer hat Vortritt? Wo muss man anhalten?',
  ],
  learn: 'Verkehrsregeln und Fantasie.',
})
