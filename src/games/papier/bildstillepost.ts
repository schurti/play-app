import { defineGame } from '../types'

export default defineGame({
  id: 'bildstillepost',
  title: 'Bilder-Stille-Post',
  emoji: '✉️',
  category: 'papier',
  minAge: 5,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 250,
  steps: [
    'Die erste Person holt sich heimlich ein Motiv aus der App, zeichnet es oben auf ein Blatt und faltet es um.',
    'Die nächste schaut kurz und zeichnet es aus dem Gedächtnis darunter.',
    'Wieder umfalten und weitergeben.',
    'Am Ende alles aufklappen: Was ist aus dem ersten Bild geworden? Und was stand in der App?',
  ],
  learn: 'Merkfähigkeit und genaues Hinschauen.',
  tool: 'term',
})
