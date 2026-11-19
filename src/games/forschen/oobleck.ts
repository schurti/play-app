import { defineGame } from '../types'

export default defineGame({
  id: 'oobleck',
  title: 'Fest-und-flüssig-Brei',
  emoji: '🥣',
  category: 'forschen',
  minAge: 3,
  minutes: 20,
  items: ['Maisstärke', 'Wasser', 'Schüssel'],
  tags: ['allein'],
  order: 270,
  steps: [
    'Gebt 2 Tassen Maisstärke in eine Schüssel.',
    'Rührt langsam etwa 1 Tasse Wasser dazu, bis ein zäher Brei entsteht.',
    'Schlagt schnell mit der Faust darauf: Er ist hart wie Stein!',
    'Taucht die Hand langsam hinein: Er ist flüssig wie Honig. Wie kann das sein?',
  ],
  learn:
    'Manche Stoffe werden unter Druck fest – das nennt man nicht-newtonsche Flüssigkeit.',
  adultNote: 'Nicht in den Abfluss giessen, sondern im Abfall entsorgen.',
})
