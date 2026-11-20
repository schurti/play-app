import { defineGame } from '../types'

export default defineGame({
  id: 'kastanientiere',
  title: 'Kastanien-Tiere',
  emoji: '🌰',
  category: 'basteln',
  minAge: 4,
  minutes: 30,
  items: ['Wattestäbchen'],
  tags: ['allein', 'leise'],
  seasons: ['herbst'],
  order: 360,
  steps: [
    'Sammelt auf einem Spaziergang Kastanien, Eicheln und Zapfen.',
    'Ein Erwachsener bohrt kleine Löcher in die Kastanien.',
    'Steckt Zahnstocher oder halbe Wattestäbchen hinein und verbindet so die Kastanien.',
    'Es entstehen Igel, Spinnen, Giraffen oder Männchen. Wie heissen sie?',
  ],
  learn: 'Feinmotorik, Naturmaterial und Fantasie.',
  adultNote:
    'Löcher mit einem Handbohrer oder einer spitzen Schere vorstechen.',
})
