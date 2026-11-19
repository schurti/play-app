import { defineGame } from '../types'

export default defineGame({
  id: 'flohsamenschleim',
  title: 'Flohsamen-Schleim',
  emoji: '🟢',
  category: 'forschen',
  minAge: 3,
  minutes: 20,
  items: ['Flohsamenschalen', 'Wasser', 'Farbe', 'Schüssel'],
  tags: ['allein'],
  order: 280,
  steps: [
    'Gebt 250 ml Wasser in eine Schüssel.',
    'Rührt 2 Esslöffel Flohsamenschalen und etwas Lebensmittelfarbe dazu.',
    'Lasst alles ein paar Minuten quellen.',
    'Fertig ist der Schleim: kneten, ziehen, matschen!',
  ],
  learn: 'Quellen beobachten – und ein Schleim ganz ohne Chemie.',
})
