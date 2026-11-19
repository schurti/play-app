import { defineGame } from '../types'

export default defineGame({
  id: 'salzei',
  title: 'Schwimmendes Ei',
  emoji: '🥚',
  category: 'forschen',
  minAge: 4,
  minutes: 15,
  items: ['Ei', 'Gläser', 'Wasser', 'Salz'],
  tags: ['allein'],
  order: 250,
  steps: [
    'Legt ein rohes Ei vorsichtig in ein Glas Leitungswasser: Es sinkt.',
    'Füllt ein zweites Glas mit Wasser und rührt viele Löffel Salz hinein.',
    'Legt das Ei hinein: Es schwimmt!',
    'Gelingt es, das Ei in der Mitte schweben zu lassen?',
  ],
  learn: 'Salzwasser ist schwerer und trägt mehr.',
})
