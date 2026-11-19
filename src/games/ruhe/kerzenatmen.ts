import { defineGame } from '../types'

export default defineGame({
  id: 'kerzenatmen',
  title: 'Blume und Kerze',
  emoji: '🌷',
  category: 'ruhe',
  minAge: 3,
  minutes: 5,
  items: [],
  tags: ['allein', 'leise'],
  order: 120,
  steps: [
    'Haltet eine Hand wie eine Blume vor die Nase und den Zeigefinger der anderen Hand wie eine Kerze.',
    'Riecht langsam an der Blume – tief einatmen durch die Nase.',
    'Pustet die Kerze langsam aus – lange ausatmen durch den Mund.',
    'Fünfmal wiederholen.',
  ],
  learn: 'Bewusst atmen, um sich zu beruhigen.',
})
