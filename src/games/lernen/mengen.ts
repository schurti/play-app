import { defineGame } from '../types'

export default defineGame({
  id: 'mengen',
  title: 'Mehr oder weniger?',
  emoji: '⚖️',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: ['Nudeln', 'Teller'],
  tags: ['allein'],
  order: 150,
  steps: [
    'Legt auf zwei Teller unterschiedlich viele Nudeln.',
    'Das Kind schätzt nur mit den Augen: Wo sind mehr?',
    'Dann legt ihr die Nudeln paarweise nebeneinander.',
    'Auf welchem Teller bleiben Nudeln übrig?',
  ],
  learn: 'Mengen vergleichen und Eins-zu-eins-Zuordnung.',
  variants:
    'Schwieriger: Nudeln auf einem Teller weit auseinanderlegen – sieht nach mehr aus, ist es aber nicht!',
})
