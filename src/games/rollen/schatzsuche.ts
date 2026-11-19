import { defineGame } from '../types'

export default defineGame({
  id: 'schatzsuche',
  title: 'Schatzsuche',
  emoji: '🗺️',
  category: 'rollen',
  minAge: 4,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 50,
  steps: [
    'Erwachsene wählen in der App Hinweise aus und schreiben sie auf Zettel.',
    'Hinweis 1 bekommt das Kind. Hinweis 2 liegt am Ort von Hinweis 1, und so weiter.',
    'Am letzten Ort wartet der Schatz: ein Snack, ein Spielzeug oder eine Urkunde.',
  ],
  learn: 'Rätsel lösen und die Wohnung kennen.',
  tool: 'treasure',
})
