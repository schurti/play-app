import { defineGame } from '../types'

export default defineGame({
  id: 'schatzwanne',
  title: 'Schatz-Wanne',
  emoji: '🌽',
  category: 'ruhe',
  minAge: 3,
  minutes: 15,
  items: ['Reis', 'Schüssel'],
  tags: ['allein', 'leise'],
  order: 270,
  steps: [
    'Füllt eine grosse Schüssel mit Reis oder getrocknetem Mais.',
    'Versteckt kleine Schätze darin: Knöpfe, Löffel, Figuren.',
    'Das Kind sucht mit den Händen – erst mit offenen, dann mit geschlossenen Augen.',
    'Was fühlt sich wie an?',
  ],
  learn: 'Tastsinn, Ruhe und Konzentration.',
  adultNote:
    'Kleine Gegenstände nur mit Kindern, die nichts mehr in den Mund nehmen.',
})
