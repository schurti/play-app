import { renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useTimers } from './useTimers'

describe('useTimers', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('stoppt alle Intervalle und Timeouts beim Unmount', () => {
    const fn = vi.fn()
    const fn2 = vi.fn()
    const { result, unmount } = renderHook(() => useTimers())
    result.current.every(fn, 100)
    result.current.later(fn2, 500)

    vi.advanceTimersByTime(250)
    unmount()
    vi.advanceTimersByTime(1000)

    expect(fn).toHaveBeenCalledTimes(2)
    expect(fn2).toHaveBeenCalledTimes(0)
  })

  it('clear stoppt Intervall und Timeout einzeln', () => {
    const fn = vi.fn()
    const fn2 = vi.fn()
    const { result } = renderHook(() => useTimers())
    const a = result.current.every(fn, 100)
    const b = result.current.later(fn2, 100)
    result.current.clear(a)
    result.current.clear(b)
    vi.advanceTimersByTime(500)
    expect(fn).not.toHaveBeenCalled()
    expect(fn2).not.toHaveBeenCalled()
  })

  it('clearAll stoppt alles, das Objekt bleibt stabil', () => {
    const fn = vi.fn()
    const { result, rerender } = renderHook(() => useTimers())
    const first = result.current
    rerender()
    expect(result.current).toBe(first)
    first.every(fn, 100)
    first.clearAll()
    vi.advanceTimersByTime(500)
    expect(fn).not.toHaveBeenCalled()
  })
})
