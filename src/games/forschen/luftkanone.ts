import { defineGame } from '../types'

export default defineGame({
  id: 'luftkanone',
  title: 'Luftkanone',
  emoji: '💨',
  category: 'forschen',
  minAge: 5,
  minutes: 25,
  items: ['Karton', 'Klebeband', 'Becher'],
  tags: ['gruppe'],
  order: 310,
  steps: [
    'Nehmt einen Schuhkarton und klebt ihn rundherum dicht zu.',
    'Schneidet auf einer Seite ein rundes Loch, etwa so gross wie ein Becher.',
    'Stellt Papierbecher-Türme auf und zielt mit dem Loch darauf.',
    'Klopft kräftig auf die Rückseite – ein unsichtbarer Luftring wirft die Becher um!',
  ],
  learn: 'Luft ist ein Stoff und kann Kraft haben.',
  adultNote: 'Das runde Loch schneidet ein Erwachsener.',
})
