import { defineGame } from '../types'

export default defineGame({
  id: 'comic',
  title: 'Mini-Comic',
  emoji: '💬',
  category: 'malen',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 250,
  steps: [
    'Teilt ein Blatt in drei Kästchen.',
    'Kästchen 1: Wer ist die Figur und wo ist sie?',
    'Kästchen 2: Was passiert?',
    'Kästchen 3: Wie geht es aus? Erzählt den Comic danach laut.',
  ],
  learn: 'Geschichten in Anfang, Mitte und Schluss gliedern.',
  variants: 'Sprechblasen dazu: Erwachsene schreiben, was die Figuren sagen.',
})
