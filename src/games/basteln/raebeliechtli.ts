import { defineGame } from '../types'

export default defineGame({
  id: 'raebeliechtli',
  title: 'Räbeliechtli schnitzen',
  emoji: '🏮',
  category: 'basteln',
  minAge: 4,
  minutes: 45,
  items: ['Löffel', 'Schnur'],
  tags: ['gruppe'],
  seasons: ['herbst'],
  order: 350,
  steps: [
    'Schneidet bei einer Räbe oben einen Deckel ab.',
    'Das Kind höhlt sie mit einem Löffel aus: Das braucht Kraft und Geduld!',
    'Ritzt Muster in die Schale: Sterne, Monde, Gesichter.',
    'Teelicht hinein, Schnur zum Tragen anbringen und beim Eindunkeln leuchten lassen.',
  ],
  learn: 'Ausdauer, Feinmotorik und Brauchtum.',
  variants: 'Statt einer Räbe geht auch ein Kürbis oder eine grosse Kartoffel.',
  adultNote:
    'Das Schneiden und Ritzen mit dem Messer übernimmt ein Erwachsener. Teelicht nur unter Aufsicht.',
})
