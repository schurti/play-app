import { defineGame } from '../types'

export default defineGame({
  id: 'blindschmecken',
  title: 'Blind-Schmecken',
  emoji: '👅',
  category: 'forschen',
  minAge: 4,
  minutes: 15,
  items: ['Obst', 'Salz', 'Zitrone', 'Teller', 'Tuch'],
  tags: ['gruppe'],
  order: 220,
  steps: [
    'Legt kleine Kostproben auf einen Teller: Apfel, Zitrone, ein paar Salzkörner, Banane.',
    'Das Kind verbindet die Augen mit einem Tuch.',
    'Es probiert und sagt: süss, sauer, salzig oder bitter?',
    'Dann raten: Was war es?',
  ],
  learn: 'Die Grundgeschmäcker unterscheiden.',
  adultNote: 'Auf Allergien achten. Nur winzige Mengen probieren.',
})
