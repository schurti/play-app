import { defineGame } from '../types'

export default defineGame({
  id: 'zaehlbecherturm',
  title: 'Zählbecher-Turm',
  emoji: '🏗️',
  category: 'lernen',
  minAge: 4,
  minutes: 20,
  items: ['Becher', 'Stifte', 'Gummibänder', 'Schnur'],
  tags: ['gruppe'],
  order: 530,
  steps: [
    'Malt auf 10 Becher 1 bis 10 Punkte.',
    'Bindet an ein Gummiband 3 oder 4 Schnüre – das ist euer Greifer.',
    'Jeder zieht an einer Schnur: So wird das Gummiband weit und eng und kann einen Becher greifen.',
    'Stapelt die Becher gemeinsam in der richtigen Reihenfolge zu einer Pyramide – ohne die Becher mit den Händen zu berühren!',
  ],
  learn: 'Zählen, Reihenfolgen und echte Teamarbeit.',
})
