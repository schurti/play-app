export interface Riddle {
  hint: string
  answer: string
}

const r = (hint: string, answer: string): Riddle => ({ hint, answer })

export const TREASURE: readonly Riddle[] = [
  r('Hier ist es kalt und hell, wenn man die Tür aufmacht.', 'Kühlschrank'),
  r('Ich habe vier Beine, aber laufen kann ich nicht.', 'Stuhl oder Tisch'),
  r('Hier legst du jede Nacht deinen Kopf hin.', 'Kopfkissen'),
  r('Hier sammelt sich die schmutzige Wäsche.', 'Wäschekorb'),
  r('Schau hinein, und du siehst dich selbst.', 'Spiegel'),
  r('Hier warten die Schuhe, bis ihr rausgeht.', 'Schuhregal'),
  r('Ich habe viele Seiten, bin aber kein Würfel.', 'Bücherregal'),
  r('Hier wird geplanscht und gebadet.', 'Badewanne'),
  r('In mir wohnen Töpfe und Pfannen.', 'Küchenschrank'),
  r('Auf mir sitzt die ganze Familie zusammen.', 'Sofa'),
  r('Ich bin aus Stoff und halte morgens die Sonne draussen.', 'Vorhang'),
  r('Ich mache Licht, wenn es dunkel ist.', 'Lampe'),
  r('Hier hängen die Jacken.', 'Garderobe'),
  r('Hier wird das Geschirr wieder sauber.', 'Spülbecken oder Abwaschmaschine'),
  r('Ich bin grün und brauche Wasser.', 'Zimmerpflanze'),
  r('Ich tick-tacke den ganzen Tag.', 'Uhr'),
  r('Hier wohnen die Kuscheltiere.', 'Kuscheltier-Ecke'),
]
