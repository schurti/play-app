import { defineGame } from '../types'

export default defineGame({
  id: 'blindfuehren',
  title: 'Blinden-Führer',
  emoji: '🙈',
  category: 'geschwister',
  minAge: 4,
  minutes: 10,
  items: ['Tuch'],
  tags: ['gruppe'],
  order: 30,
  steps: [
    'Ein Kind schliesst die Augen oder bekommt ein Tuch über die Augen.',
    'Das andere nimmt es an der Hand und führt es langsam durch die Wohnung.',
    'Unterwegs darf es Dinge ertasten lassen: «Was ist das?»',
    'Am Ziel Augen auf: Wo bist du? Dann Rollen tauschen.',
  ],
  learn: 'Vertrauen, Verantwortung und Tasten.',
})
