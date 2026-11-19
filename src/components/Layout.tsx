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
      <header>
        <h1>
          <small>Spielideen</small>
          <span>Pömpgeck</span>
        </h1>
      </header>
      <main className={styles.wrap}>
        <Outlet />
      </main>
      <BottomNav />
      <GameSheet />
    </ToastProvider>
  )
}
