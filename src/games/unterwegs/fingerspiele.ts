import { defineGame } from '../types'

export default defineGame({
  id: 'fingerspiele',
  title: 'Fingerfiguren-Theater',
  emoji: '🖐️',
  category: 'unterwegs',
  minAge: 3,
  minutes: 10,
  items: ['Stifte'],
  tags: ['allein'],
  order: 160,
  steps: [
    'Malt mit einem abwaschbaren Stift kleine Gesichter auf eure Fingerkuppen.',
    'Jeder Finger wird eine Figur: Papa, Kind, Hund …',
    'Spielt eine kleine Geschichte auf dem Schoss.',
  ],
  learn: 'Erzählen und Fantasie mit ganz wenig Platz.',
})
