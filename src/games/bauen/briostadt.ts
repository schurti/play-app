import { defineGame } from '../types'

export default defineGame({
  id: 'briostadt',
  title: 'Eisenbahn durch die Wohnung',
  emoji: '🚂',
  category: 'bauen',
  minAge: 3,
  minutes: 30,
  items: ['Brio-Bahn'],
  tags: ['gruppe'],
  order: 50,
  steps: [
    'Plant gemeinsam: Wo soll die Bahn durchfahren? Unter dem Tisch? Am Sofa vorbei?',
    'Baut eine lange Strecke mit mindestens einem Tunnel, zum Beispiel unter einem Stuhl.',
    'Legt Bahnhöfe an: Küche, Kinderzimmer, Sofa.',
    'Fahrt die Strecke ab und ruft die Stationen aus.',
  ],
  learn: 'Planen, Raum erkunden und zusammen bauen.',
  variants: 'Mit Bausteinen Häuser und Brücken neben die Strecke bauen.',
})
