import { defineGame } from '../types'

export default defineGame({
  id: 'schneeburg',
  title: 'Schneeburg bauen',
  emoji: '🏰',
  category: 'draussen',
  minAge: 3,
  minutes: 40,
  items: ['Eimer', 'Schüssel'],
  tags: ['gruppe'],
  seasons: ['winter'],
  order: 300,
  steps: [
    'Füllt Eimer und Schüsseln mit Schnee und drückt ihn fest.',
    'Stürzt sie um wie Sandkuchen: Das sind die Bausteine.',
    'Baut Mauern, Türme und ein Tor.',
    'Steckt Äste als Fahnen hinein. Wer wohnt in eurer Burg?',
  ],
  learn: 'Bauen, Zusammenarbeit und Durchhalten in der Kälte.',
})
