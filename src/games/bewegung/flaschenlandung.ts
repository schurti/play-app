import { defineGame } from '../types'

export default defineGame({
  id: 'flaschenlandung',
  title: 'Flaschen-Landung',
  emoji: '🧴',
  category: 'bewegung',
  minAge: 5,
  minutes: 10,
  items: ['PET-Flasche', 'Wasser', 'Klebeband'],
  tags: ['allein', 'gruppe'],
  order: 380,
  steps: [
    'Füllt eine Plastikflasche zu etwa einem Drittel mit Wasser und schraubt sie gut zu.',
    'Klebt mit Klebeband ein Quadrat auf den Boden.',
    'Werft die Flasche mit einer Drehung so, dass sie stehend im Quadrat landet.',
    'Wer schafft 3 Landungen hintereinander?',
  ],
  learn: 'Geschicklichkeit und Ausprobieren.',
})
