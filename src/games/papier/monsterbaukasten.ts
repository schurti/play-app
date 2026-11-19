import { defineGame } from '../types'

export default defineGame({
  id: 'monsterbaukasten',
  title: 'Monster-Baukasten',
  emoji: '👾',
  category: 'papier',
  minAge: 4,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'gruppe', 'leise'],
  order: 115,
  steps: [
    'Die App würfelt ein Monster: Körper, Farbe, Augen, Hörner, Schwanz, Flügel und noch mehr.',
    'Zeichnet das Monster Teil für Teil – genau so, wie die App es sagt.',
    'Passt euch ein Teil nicht? Tippt auf die Zeile, und nur dieser Teil wird neu gewürfelt.',
    'Zum Schluss: Wie heisst euer Monster, und was frisst es am liebsten?',
  ],
  learn: 'Genau zuhören oder lesen, Fantasie und sorgfältiges Zeichnen.',
  variants:
    'Zu zweit: Beide zeichnen dasselbe Monster, ohne sich gegenseitig zuzuschauen – und vergleichen danach. Für Kleine: nur die ersten fünf Zeilen zeichnen.',
  tool: 'monster',
})
