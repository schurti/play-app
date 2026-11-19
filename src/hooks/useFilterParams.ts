import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { parseFilters, writeFilters, type Filters } from '../lib/filter'

/** Filter der Suchen-Seite, gespeichert in der URL (Zurück-Knopf und Teilen funktionieren). */
export function useFilterParams(): {
  filters: Filters
  setFilters(next: Partial<Filters>, opts?: { replace?: boolean }): void
} {
  const [params, setParams] = useSearchParams()
  const filters = useMemo(() => parseFilters(params), [params])
  const setFilters = useCallback(
    (next: Partial<Filters>, opts?: { replace?: boolean }) =>
      setParams((p) => writeFilters({ ...parseFilters(p), ...next }, p), {
        replace: opts?.replace ?? true,
      }),
    [setParams],
  )
  return { filters, setFilters }
}
