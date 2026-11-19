import { defineGame } from '../types'

export default defineGame({
  id: 'selbstportraet',
  title: 'Spiegel-Selbstporträt',
  emoji: '🙂',
  category: 'malen',
  minAge: 4,
  minutes: 15,
  items: ['Spiegel', 'Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 210,
  steps: [
    'Stellt einen Spiegel vor das Kind.',
    'Schaut genau hin: Welche Farbe haben die Augen? Wo sind die Ohren?',
    'Malt euch selbst – so genau wie möglich oder ganz verrückt.',
    'Datum drauf schreiben und in einem Jahr wiederholen!',
  ],
  learn: 'Sich selbst wahrnehmen und Gesichter genau beobachten.',
})
