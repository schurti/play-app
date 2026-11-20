import { defineGame } from '../types'

export default defineGame({
  id: 'schaumfrisur',
  title: 'Schaum-Coiffeur',
  emoji: '💇',
  category: 'wasser',
  minAge: 2,
  minutes: 10,
  items: ['Badeschaum', 'Spiegel'],
  tags: ['allein'],
  order: 200,
  steps: [
    'Macht in der Badewanne viel Schaum.',
    'Formt daraus Frisuren auf dem Kopf: Hörner, Irokese, Krone.',
    'Auch ein Schaum-Bart ist möglich!',
    'Schaut euch im Spiegel an und macht Fotos.',
  ],
  learn: 'Fantasie und Spass beim Baden.',
})
