import { defineGame } from '../types'

export default defineGame({
  id: 'puppenwaesche',
  title: 'Puppen-Waschtag',
  emoji: '🧼',
  category: 'wasser',
  minAge: 3,
  minutes: 20,
  items: ['Schüssel', 'Wasser', 'Klammern', 'Schnur'],
  tags: ['allein'],
  place: 'beides',
  order: 110,
  steps: [
    'Füllt eine Schüssel mit Seifenwasser.',
    'Wascht Puppenkleider oder kleine Tücher.',
    'Spült sie aus und wringt sie aus.',
    'Hängt sie mit Klammern an eine Schnur zum Trocknen.',
  ],
  learn: 'Fingerkraft und Alltag nachspielen.',
})
