import { defineGame } from '../types'

export default defineGame({
  id: 'guetzli',
  title: 'Guetzli ausstechen',
  emoji: '🍪',
  category: 'kochen',
  minAge: 4,
  minutes: 45,
  items: ['Mehl', 'Ausstechformen', 'Teller'],
  tags: ['gruppe'],
  order: 100,
  steps: [
    'Knetet einen einfachen Mürbeteig (oder kauft einen fertigen).',
    'Wallt ihn aus, so dick wie ein Finger.',
    'Stecht Sterne, Herzen und Tiere aus.',
    'Backt sie etwa 10 Minuten und verziert sie mit Zuckerguss.',
  ],
  learn: 'Formen, Kneten und Geduld.',
  adultNote: 'Den Backofen bedient ein Erwachsener.',
})
