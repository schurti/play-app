import { defineGame } from '../types'

export default defineGame({
  id: 'geheimehelfer',
  title: 'Geheime Helfer',
  emoji: '🕵️',
  category: 'gefuehle',
  minAge: 5,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 140,
  steps: [
    'Jeder zieht heimlich einen Namen aus der Familie.',
    'Einen Tag lang tut ihr dieser Person heimlich etwas Gutes: Schuhe hinstellen, Zettel mit Herz verstecken.',
    'Am Abend: Wer war wohl euer geheimer Helfer?',
  ],
  learn: 'Hilfsbereitschaft und Freude schenken.',
})
