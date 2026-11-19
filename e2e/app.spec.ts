import { existsSync, readFileSync } from 'node:fs'
import { expect, test } from '@playwright/test'

test('Spiel öffnen und mit Zurück wieder schliessen', async ({ page }) => {
  await page.goto('')
  await page.getByRole('button', { name: /Farben-Jagd/ }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page).toHaveURL(/\?spiel=farben/)
  await page.goBack()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  expect(new URL(page.url()).pathname).toBe('/')
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
  await expect(page.getByRole('button', { name: /Farben-Jagd/ })).toBeVisible()
  const stored = await page.evaluate(() =>
    localStorage.getItem('play-app:progress'),
  )
  expect(JSON.parse(stored ?? 'null')?.state).toEqual({
    fav: { farben: true },
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
