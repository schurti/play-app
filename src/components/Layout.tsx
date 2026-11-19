import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import BottomNav from './BottomNav'
import GameSheet from './GameSheet'
import styles from './Layout.module.css'
import { ToastProvider } from './Toast'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <ToastProvider>
      {/* Titel nur für Screenreader – spart oben Platz */}
      <h1 className="sr-only">Pömpgeck</h1>
      <main className={styles.wrap}>
        <Outlet />
      </main>
      <BottomNav />
      <GameSheet />
    </ToastProvider>
  )
}
