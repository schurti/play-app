import { defineGame } from '../types'

export default defineGame({
  id: 'grittibaenz',
  title: 'Grittibänz backen',
  emoji: '🥖',
  category: 'kochen',
  minAge: 3,
  minutes: 60,
  items: ['Mehl', 'Ei', 'Rahm'],
  tags: ['gruppe'],
  seasons: ['winter'],
  order: 190,
  steps: [
    'Macht einen Zopfteig oder kauft ihn fertig.',
    'Formt aus einer Teigrolle einen Grittibänz: Kopf abdrehen, Arme und Beine einschneiden.',
    'Verziert ihn mit Rosinen als Augen und Knöpfe, Mandeln als Nase.',
    'Mit Ei bestreichen und backen. Am Samichlaus-Tag schmeckt er am besten!',
  ],
  learn: 'Formen, Brauchtum und Backen.',
  adultNote: 'Das Einschneiden und den Ofen übernimmt ein Erwachsener.',
})
