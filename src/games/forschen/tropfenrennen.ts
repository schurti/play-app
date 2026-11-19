import { defineGame } from '../types'

export default defineGame({
  id: 'tropfenrennen',
  title: 'Tropfen-Rennen',
  emoji: '🏁',
  category: 'forschen',
  minAge: 4,
  minutes: 10,
  items: ['Wasser', 'Backpapier', 'Alufolie', 'Teller'],
  tags: ['allein'],
  order: 240,
  steps: [
    'Legt Backpapier, Alufolie und ein normales Papier schräg auf Teller.',
    'Setzt oben auf jede Bahn einen Wassertropfen.',
    'Welcher Tropfen rutscht am schnellsten? Welcher bleibt kleben?',
  ],
  learn: 'Oberflächen: Manche stossen Wasser ab, andere saugen es auf.',
})
