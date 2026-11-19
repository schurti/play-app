import { defineGame } from '../types'

export default defineGame({
  id: 'windrad',
  title: 'Windrad',
  emoji: '🌀',
  category: 'basteln',
  minAge: 4,
  minutes: 20,
  items: ['Papier', 'Strohhalme', 'Stifte'],
  tags: ['allein'],
  order: 150,
  steps: [
    'Schneidet ein quadratisches Papier und bemalt es.',
    'Schneidet von jeder Ecke aus bis knapp vor die Mitte ein.',
    'Biegt jede zweite Spitze zur Mitte.',
    'Ein Erwachsener befestigt alles mit einer Nadel an einem Strohhalm. Pusten!',
  ],
  learn: 'Wind bewegt Dinge – und genaues Schneiden.',
  adultNote:
    'Die Stecknadel steckt ein Erwachsener durch Windrad und Strohhalm.',
})
