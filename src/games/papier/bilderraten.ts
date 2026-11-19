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
    'Eine Person denkt sich heimlich ein Wort aus: Hund, Velo, Glace, Regenschirm.',
    'Sie zeichnet es – ohne Buchstaben und ohne zu sprechen.',
    'Die anderen raten laut. Wer es errät, zeichnet als Nächstes.',
    'Mit dem Timer wird es spannender: Schafft ihr es in einer Minute?',
  ],
  learn: 'Ideen auf das Wesentliche reduzieren und genau hinschauen.',
  variants:
    'Für Kleine: Erwachsene zeichnen, Kinder raten. Für Grössere: schwierigere Wörter wie „Geburtstag“ oder „Gewitter“.',
})
