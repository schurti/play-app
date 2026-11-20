export function pick<T>(arr: readonly T[], rng: () => number = Math.random): T {
  return arr[Math.floor(rng() * arr.length)]
}

/** Gemischte Kopie (Fisher-Yates), das Original bleibt unverändert. */
export function shuffle<T>(
  arr: readonly T[],
  rng: () => number = Math.random,
): T[] {
  const out = [...arr]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}
