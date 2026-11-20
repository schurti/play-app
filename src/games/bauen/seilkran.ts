import { defineGame } from '../types'

export default defineGame({
  id: 'seilkran',
  title: 'Seilkran',
  emoji: '🪝',
  category: 'bauen',
  minAge: 5,
  minutes: 20,
  items: ['Bausteine', 'Schnur', 'Becher'],
  tags: ['allein'],
  order: 210,
  steps: [
    'Bohrt zwei Löcher in einen Becher und knotet eine Schnur als Henkel daran.',
    'Vom Sofa oder Hochbett aus wird der Becher heruntergelassen.',
    'Unten werden Klötze eingeladen, oben zieht jemand hoch.',
    'Baut oben mit den gelieferten Klötzen einen Turm.',
  ],
  learn: 'Einfache Technik, Zusammenarbeit und Kraft.',
  adultNote: 'Die Löcher sticht ein Erwachsener mit der Schere vor.',
})
