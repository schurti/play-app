import { defineGame } from '../types'

export default defineGame({
  id: 'ueberkreuz',
  title: 'Bausteine über Kreuz',
  emoji: '🧱',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: ['Bausteine'],
  tags: ['allein'],
  order: 330,
  steps: [
    'Legt links und rechts vom Kind je einen Haufen Bausteine.',
    'Das Kind darf Steine nur mit der gegenüberliegenden Hand holen: links liegende mit der rechten Hand und umgekehrt.',
    'Die Steine werden in der Mitte zu einem Turm gestapelt.',
    'Wie hoch wird der Turm, ohne dass die Hand die Seite „falsch“ wechselt?',
  ],
  learn: 'Die Körpermitte kreuzen – das verbindet beide Körperseiten.',
})
