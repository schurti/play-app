import { defineGame } from '../types'

export default defineGame({
  id: 'kugelstaffel',
  title: 'Kugel-Rinnen-Staffel',
  emoji: '🛤️',
  category: 'bewegung',
  minAge: 4,
  minutes: 20,
  items: ['Karton', 'Ball'],
  tags: ['gruppe'],
  order: 350,
  steps: [
    'Schneidet Karton in lange Streifen und knickt sie zu Rinnen.',
    'Jedes Kind hält eine Rinne. Ein kleiner Ball wird oben hineingelegt.',
    'Der Ball rollt von Rinne zu Rinne. Wer seine Rinne geleert hat, rennt ans Ende und hält sie wieder hin.',
    'Schafft ihr es ohne Absturz bis ins Ziel, z. B. in eine Schüssel?',
  ],
  learn: 'Zusammenarbeit, Timing und Koordination.',
})
