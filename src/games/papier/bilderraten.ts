import { defineGame } from '../types'

export default defineGame({
  id: 'bilderraten',
  title: 'Bilder-Raten',
  emoji: '🖼️',
  category: 'papier',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 10,
  steps: [
    'Eine Person holt sich heimlich ein Wort aus der App oder denkt sich selbst eins aus.',
    'Sie zeichnet es, ohne Buchstaben und ohne zu sprechen.',
    'Die anderen raten laut. Wer es errät, zeichnet als Nächstes.',
    'Spannender wird es mit Zeitlimit: Jemand zählt langsam bis 60. Schafft ihr es bis dahin?',
  ],
  learn: 'Ideen auf das Wesentliche reduzieren und genau hinschauen.',
  variants:
    'Für Kleine: Erwachsene zeichnen, Kinder raten. Für Grössere: schwierigere Wörter wie „Geburtstag“ oder „Gewitter“.',
  tool: 'term',
})
