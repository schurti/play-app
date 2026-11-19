import { existsSync, readFileSync } from 'node:fs'
import { expect, test } from '@playwright/test'

test('Spiel öffnen und mit Zurück wieder schliessen', async ({ page }) => {
  await page.goto('')
  await page.getByRole('button', { name: /Farben-Jagd/ }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page).toHaveURL(/\?spiel=farben/)
  await page.goBack()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  expect(new URL(page.url()).pathname).toBe('/play-app/')
})

test('Direktaufruf /sticker zeigt das Sticker-Album', async ({ page }) => {
  await page.goto('sticker')
  await expect(page.getByRole('heading', { name: '🏆 Sticker-Album' })).toBeVisible()
})

test('Stern bleibt nach dem Neuladen erhalten', async ({ page }) => {
  await page.goto('')
  await page.getByRole('button', { name: /Farben-Jagd/ }).click()
  await page.getByRole('button', { name: /Geschafft! ⭐/ }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page.getByRole('banner')).toContainText('⭐ 1')
  await page.reload()
  await expect(page.getByRole('banner')).toContainText('⭐ 1')
  const stored = await page.evaluate(() => localStorage.getItem('play-app:progress'))
  expect(stored).not.toBeNull()
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
  expect(manifest.short_name).toBe('Spielplatz')
  expect(manifest.scope).toBe('/play-app/')
  expect(existsSync('dist/sw.js')).toBe(true)
  expect(existsSync('dist/404.html')).toBe(true)
  expect(readFileSync('dist/404.html', 'utf8')).toBe(readFileSync('dist/index.html', 'utf8'))
})
