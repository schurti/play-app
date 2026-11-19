import { defineGame } from '../types'

export default defineGame({
  id: 'schubkarre',
  title: 'Schubkarren-Rennen',
  emoji: '🛞',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  place: 'beides',
  order: 240,
  steps: [
    'Das Kind stützt sich auf die Hände.',
    'Ein Erwachsener hält die Beine an den Oberschenkeln fest.',
    'Das Kind läuft auf den Händen eine kurze Strecke.',
    'Dann Pause und noch eine Runde.',
  ],
  learn: 'Kraft in Armen und Rumpf.',
  adultNote:
    'Nur kurze Strecken und den Bauch nicht durchhängen lassen. Erwachsene halten an den Oberschenkeln.',
})
