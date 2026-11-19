import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { useProgress } from '../store/progress'
import BottomNav from './BottomNav'
import styles from './Layout.module.css'
import { ToastProvider } from './Toast'

export default function Layout() {
  const stars = useProgress((s) => s.stars)
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <ToastProvider>
      <header>
        <h1>
          🏠 Haushalts-
          <br />
          Spielplatz
        </h1>
        <div className="pill">⭐ {stars}</div>
      </header>
      <main className={styles.wrap}>
        <Outlet />
      </main>
      <BottomNav />
    </ToastProvider>
  )
}
