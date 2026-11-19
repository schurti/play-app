import { defineGame } from '../types'

export default defineGame({
  id: 'schaumbilder',
  title: 'Schaum-Bilder',
  emoji: '🫧',
  category: 'wasser',
  minAge: 3,
  minutes: 15,
  items: ['Badeschaum'],
  tags: ['allein'],
  order: 30,
  steps: [
    'Gebt Badeschaum oder Seifenschaum auf die Fliesen an der Wanne.',
    'Malt mit den Fingern Bilder hinein.',
    'Mit etwas Wasser ist alles weg – und ihr könnt neu malen.',
  ],
  learn: 'Fühlen, Malen und ganz ohne Aufräumen.',
})
