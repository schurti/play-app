import { defineGame } from '../types'

export default defineGame({
  id: 'wattepusten',
  title: 'Watte-Pusten',
  emoji: '☁️',
  category: 'ruhe',
  minAge: 3,
  minutes: 10,
  items: ['Watte', 'Strohhalme'],
  tags: ['allein', 'leise'],
  order: 130,
  steps: [
    'Legt einen Wattebausch auf den Tisch.',
    'Pustet ihn mit dem Strohhalm ganz sanft über den Tisch.',
    'Er darf nicht herunterfallen!',
    'Baut eine Strecke mit Bechern als Toren.',
  ],
  learn: 'Atem dosieren und fein steuern.',
})
