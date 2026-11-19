import { existsSync, readFileSync } from 'node:fs'
import { expect, test } from '@playwright/test'

test('Kategorie öffnen, Spiel öffnen und mit Zurück wieder schliessen', async ({
  page,
}) => {
  await page.goto('')
  await page.getByRole('link', { name: /Lernen\s*\d+ Spiele/ }).click()
  await expect(page).toHaveURL(/\/k\/lernen$/)
  await page.getByRole('button', { name: /Farben-Jagd/ }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page).toHaveURL(/\?spiel=farben/)
  await page.goBack()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  expect(new URL(page.url()).pathname).toBe('/k/lernen')
})

test('Suche mit Filter bleibt nach dem Neuladen erhalten', async ({ page }) => {
  await page.goto('suche')
  await page.getByRole('searchbox', { name: 'Spiele suchen' }).fill('ballon')
  await page.getByRole('button', { name: 'Ruhig', exact: true }).click()
  await expect(page).toHaveURL(/q=ballon/)
  await expect(page).toHaveURL(/stimmung=ruhig/)
  await page.reload()
  await expect(
    page.getByRole('searchbox', { name: 'Spiele suchen' }),
  ).toHaveValue('ballon')
  await expect(
    page.getByRole('button', { name: 'Filter Ruhig entfernen' }),
  ).toBeVisible()
})

test('Direktaufruf einer Kategorie und des Wunsch-Assistenten', async ({
  page,
}) => {
  await page.goto('k/karten')
  await expect(
    page.getByRole('heading', { level: 2, name: 'Karten & Würfel' }),
  ).toBeVisible()
  await page.goto('zufall')
  await page.getByRole('button', { name: /Spiel finden/ }).click()
  await page.getByRole('button', { name: '▶ Los geht’s' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
})

test('Direktaufruf /favoriten zeigt die Favoriten', async ({ page }) => {
  await page.goto('favoriten')
  await expect(
    page.getByRole('heading', { name: '❤️ Eure Lieblingsspiele' }),
  ).toBeVisible()
})

test('Favorit bleibt nach dem Neuladen erhalten', async ({ page }) => {
  await page.goto('?spiel=farben')
  await page.getByRole('button', { name: 'Favorit' }).click()
  await expect(page.getByRole('status')).toContainText(
    'Zu Favoriten hinzugefügt',
  )
  await page.reload()
  await page.goto('favoriten')
  await expect(
    page.getByRole('button', { name: /Farben-Jagd/ }).first(),
  ).toBeVisible()
  const stored = await page.evaluate(() =>
    localStorage.getItem('play-app:progress'),
  )
  expect(JSON.parse(stored ?? 'null')?.state).toEqual({
    fav: { farben: true },
    recent: ['farben'],
  })
})

test('Zufall öffnet ein Spiel', async ({ page }) => {
  await page.goto('')
  await page.getByRole('button', { name: /Zufall/ }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
})

test('Manifest und Build-Artefakte', async ({ request }) => {
  const res = await request.get('manifest.webmanifest')
  expect(res.ok()).toBe(true)
  const manifest = await res.json()
  expect(manifest.short_name).toBe('Pömpgeck')
  expect(manifest.scope).toBe('/')
  expect(existsSync('dist/sw.js')).toBe(true)
  expect(existsSync('dist/404.html')).toBe(true)
  expect(readFileSync('dist/404.html', 'utf8')).toBe(
    readFileSync('dist/index.html', 'utf8'),
  )
})
