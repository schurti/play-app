import { defineGame } from '../types'

export default defineGame({
  id: 'muenztrick',
  title: 'Münz-Trick',
  emoji: '🪙',
  category: 'forschen',
  minAge: 5,
  minutes: 10,
  items: ['Münzen', 'Gläser', 'Karton'],
  tags: ['allein'],
  order: 290,
  steps: [
    'Legt eine Karte aus Karton auf ein Glas und eine Münze in die Mitte der Karte.',
    'Schnipst die Karte mit dem Finger kräftig waagrecht weg.',
    'Die Münze fällt ins Glas!',
    'Warum? Die Münze bleibt lieber, wo sie ist – das nennt man Trägheit.',
  ],
  learn: 'Trägheit spielerisch entdecken.',
})
