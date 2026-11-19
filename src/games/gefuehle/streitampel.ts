import { defineGame } from '../types'

export default defineGame({
  id: 'streitampel',
  title: 'Streit-Stopp-Ampel',
  emoji: '🚦',
  category: 'gefuehle',
  minAge: 5,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 90,
  steps: [
    'Malt eine Ampel: Rot, Gelb, Grün.',
    'Rot: Stopp! Kurz auseinandergehen.',
    'Gelb: Dreimal tief atmen und sagen, was einen ärgert.',
    'Grün: Zusammen eine Lösung finden. Übt das an einem Beispiel-Streit.',
  ],
  learn: 'Streit lösen mit festen Schritten.',
})
