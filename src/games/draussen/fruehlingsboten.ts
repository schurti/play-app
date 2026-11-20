import { defineGame } from '../types'

export default defineGame({
  id: 'fruehlingsboten',
  title: 'Frühlings-Boten suchen',
  emoji: '🌷',
  category: 'draussen',
  minAge: 3,
  minutes: 30,
  items: [],
  tags: ['gruppe'],
  seasons: ['fruehling'],
  order: 310,
  steps: [
    'Geht auf einen Frühlings-Spaziergang.',
    'Sucht Zeichen des Frühlings: Knospen, Schneeglöckchen, Krokusse, Bienen, singende Vögel.',
    'Für jeden Fund gibt es einen Strich auf dem Notizzettel oder einen Finger mehr.',
    'Wie viele Frühlingsboten habt ihr gefunden? Nächste Woche wieder: Sind es mehr?',
  ],
  learn: 'Natur beobachten und Jahreszeiten verstehen.',
})
