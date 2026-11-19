import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './Toast.module.css'

const VISIBLE_MS = 2600

const ToastContext = createContext<(msg: string) => void>(() => {})

export function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState('')
  const [shown, setShown] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const toast = useCallback((m: string) => {
    setMsg(m)
    setShown(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setShown(false), VISIBLE_MS)
  }, [])

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <ToastContext value={toast}>
      {children}
      <div className={shown ? `${styles.toast} ${styles.show}` : styles.toast} role="status" aria-live="polite">
        {msg}
      </div>
    </ToastContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToast(): (msg: string) => void {
  return useContext(ToastContext)
}
