import { defineGame } from '../types'

export default defineGame({
  id: 'janeinhuepfen',
  title: 'Ja-Nein-Hüpfen',
  emoji: '✅',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: ['Klebeband', 'Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 570,
  steps: [
    'Klebt eine lange Linie auf den Boden. Links liegt ein Zettel „JA“, rechts „NEIN“.',
    'Alle stehen auf der Linie.',
    'Eine Person stellt Fragen: „Ist ein Elefant grösser als eine Maus?“ – „Hat eine Spinne 6 Beine?“',
    'Hüpft auf die richtige Seite. Wer falsch steht, stellt die nächste Frage.',
  ],
  learn: 'Wissen, schnelles Entscheiden und Fragen stellen.',
})
