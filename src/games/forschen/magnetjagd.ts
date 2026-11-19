import { defineGame } from '../types'

export default defineGame({
  id: 'magnetjagd',
  title: 'Magnet-Detektiv',
  emoji: '🧲',
  category: 'forschen',
  minAge: 4,
  minutes: 15,
  items: ['Magnet', 'Schüssel'],
  tags: ['allein'],
  order: 110,
  steps: [
    'Nehmt einen Kühlschrank-Magneten.',
    'Sammelt Dinge: Löffel, Münze, Schlüssel, Stift, Klammer, Alufolie.',
    'Raten: Bleibt es am Magneten hängen?',
    'Testet und sortiert in zwei Gruppen.',
  ],
  learn: 'Magnete ziehen nur manche Metalle an.',
  adultNote:
    'Kleine Magnete nicht in den Mund nehmen – verschluckte Magnete sind gefährlich.',
})
