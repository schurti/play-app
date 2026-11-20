import { defineGame } from '../types'

export default defineGame({
  id: 'pinata',
  title: 'Karton-Piñata',
  emoji: '🪅',
  category: 'party',
  minAge: 4,
  minutes: 40,
  items: ['Karton', 'Farbe', 'Schnur', 'Papier'],
  tags: ['gruppe'],
  place: 'beides',
  order: 160,
  steps: [
    'Füllt eine kleine Kartonschachtel mit Süssigkeiten oder kleinen Überraschungen und klebt sie zu.',
    'Beklebt sie mit bunten Papierfransen.',
    'Hängt sie an einer Schnur auf, zum Beispiel an einen Ast.',
    'Mit verbundenen Augen haut reihum jedes Kind dreimal mit einem Kochlöffel, bis sie aufgeht.',
  ],
  learn: 'Basteln, Geduld und Abwechseln.',
  adultNote:
    'Ein Erwachsener hält die Schnur und achtet auf Abstand zu den Zuschauern.',
})
