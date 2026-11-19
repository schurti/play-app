import { defineGame } from '../types'

export default defineGame({
  id: 'schnuppern',
  title: 'Riech-Memory',
  emoji: '👃',
  category: 'forschen',
  minAge: 4,
  minutes: 15,
  items: ['Becher', 'Gewürze'],
  tags: ['leise'],
  order: 80,
  steps: [
    'Füllt Gewürze und Duftendes in Becher: Zimt, Kaffee, Zitrone, Kakao, Basilikum.',
    'Das Kind schliesst die Augen und riecht.',
    'Was ist es? Wer errät am meisten?',
  ],
  learn: 'Geruchssinn und Wörter für Gerüche.',
})
