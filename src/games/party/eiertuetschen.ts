import { defineGame } from '../types'

export default defineGame({
  id: 'eiertuetschen',
  title: 'Eiertütschen',
  emoji: '🥚',
  category: 'party',
  minAge: 3,
  minutes: 15,
  items: ['Ei', 'Farbe'],
  tags: ['gruppe'],
  seasons: ['fruehling'],
  order: 210,
  steps: [
    'Färbt oder bemalt hart gekochte Eier.',
    'Je zwei Kinder halten ihr Ei fest in der Hand.',
    'Eines tütscht mit der Spitze vorsichtig auf die Spitze des anderen.',
    'Wessen Ei bleibt ganz? Dann wird mit der runden Seite getütscht.',
  ],
  learn: 'Brauchtum, Kraft dosieren und Spannung.',
})
