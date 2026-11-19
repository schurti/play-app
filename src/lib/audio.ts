/* Web Audio und Sprachausgabe (aus legacy/index.html). Ohne Browser-Support: No-ops. */

let ac: AudioContext | null = null

export function audioContext(): AudioContext | null {
  if (!ac) {
    try {
      const Ctor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext
      ac = Ctor ? new Ctor() : null
    } catch {
      ac = null
    }
  }
  if (ac && ac.state === 'suspended') {
    try {
      void ac.resume()
    } catch {
      /* ignorieren */
    }
  }
  return ac
}

export function tone(
  freq: number,
  dur: number,
  type?: OscillatorType,
  vol?: number,
  when?: number,
): void {
  const a = audioContext()
  if (!a) return
  const t = (when || 0) + a.currentTime
  const o = a.createOscillator()
  const g = a.createGain()
  o.type = type || 'triangle'
  o.frequency.value = freq
  g.gain.setValueAtTime(vol || 0.18, t)
  g.gain.exponentialRampToValueAtTime(0.001, t + dur)
  o.connect(g)
  g.connect(a.destination)
  o.start(t)
  o.stop(t + dur + 0.05)
}

export function noise(dur: number, vol?: number): void {
  const a = audioContext()
  if (!a) return
  const len = Math.floor(a.sampleRate * dur)
  const buf = a.createBuffer(1, len, a.sampleRate)
  const ch = buf.getChannelData(0)
  for (let i = 0; i < len; i++)
    ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3)
  const s = a.createBufferSource()
  s.buffer = buf
  const g = a.createGain()
  g.gain.value = vol || 0.5
  s.connect(g)
  g.connect(a.destination)
  s.start()
}

export function speak(text: string): void {
  try {
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'de-DE'
    u.rate = 1
    speechSynthesis.cancel()
    speechSynthesis.speak(u)
  } catch {
    /* kein Sprachsupport */
  }
}

export function stopSpeech(): void {
  try {
    speechSynthesis.cancel()
  } catch {
    /* kein Sprachsupport */
  }
}

export function fanfare(): void {
  ;[523, 659, 784, 1047].forEach((f, i) =>
    tone(f, 0.25, 'triangle', 0.15, i * 0.12),
  )
}
