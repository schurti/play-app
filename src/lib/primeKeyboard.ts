/**
 * iOS öffnet die Tastatur nur, wenn ein Feld noch während des Tippens
 * fokussiert wird. Die neue Seite rendert aber erst danach. Darum hier sofort
 * ein unsichtbares Hilfsfeld fokussieren: Die Tastatur geht auf und bleibt
 * offen, wenn das echte Feld (autoFocus) den Fokus übernimmt.
 */
export function primeKeyboard() {
  const el = document.createElement('input')
  el.type = 'text'
  el.tabIndex = -1
  el.setAttribute('aria-hidden', 'true')
  // 16px, sonst zoomt iOS beim Fokussieren hinein
  el.style.cssText =
    'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;font-size:16px;border:0;padding:0'
  document.body.append(el)
  el.focus({ preventScroll: true })
  setTimeout(() => el.remove(), 1000)
}
