import { defineGame } from '../types'

export default defineGame({
  id: 'schiffeversenken',
  title: 'Schiffe versenken',
  emoji: '🚢',
  category: 'papier',
  minAge: 6,
  minutes: 25,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 40,
  steps: [
    'Jeder zeichnet zwei Gitter mit 6 × 6 Feldern, beschriftet mit A–F und 1–6.',
    'Im eigenen Gitter versteckt jeder heimlich drei Schiffe (je 2 Felder lang).',
    'Abwechselnd ruft ihr ein Feld, z. B. „C4!“. Die andere Person sagt „Wasser“ oder „Treffer“.',
    'Im zweiten Gitter haltet ihr eure Schüsse fest. Wer zuerst alle Schiffe findet, gewinnt.',
  ],
  learn: 'Koordinaten lesen, Buchstaben und Zahlen verbinden, logisch denken.',
  variants: 'Leichter: 4 × 4 Felder und nur zwei Schiffe aus je einem Feld.',
})
