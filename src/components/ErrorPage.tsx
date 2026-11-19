import styles from './ErrorPage.module.css'

/** Deutsche Fehleransicht statt der englischen Standardseite von React Router. */
export default function ErrorPage() {
  return (
    <main className={styles.wrap} role="alert">
      <h1>Hoppla, da ist etwas schiefgelaufen.</h1>
      <button className={styles.btn} onClick={() => window.location.reload()}>
        🔄 Neu laden
      </button>
    </main>
  )
}
