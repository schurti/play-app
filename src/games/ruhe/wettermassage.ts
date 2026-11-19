import { defineGame } from '../types'

export default defineGame({
  id: 'wettermassage',
  title: 'Wetter-Massage',
  emoji: '🌦️',
  category: 'ruhe',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['leise'],
  order: 150,
  steps: [
    'Das Kind liegt auf dem Bauch.',
    'Regen: Mit den Fingerspitzen sanft auf den Rücken tippen.',
    'Wind: Mit flachen Händen über den Rücken streichen.',
    'Sonne: Hände warm reiben und auflegen. Dann tauschen!',
  ],
  learn: 'Berührung, Nähe und Entspannung.',
})
