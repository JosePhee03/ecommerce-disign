import { test, expect } from '@playwright/test'

const SINGLE_PRODUCT = 'MacBook Pro'
const SINGLE_PRODUCT_URL = '?q=MacBook+Pro'
const DEV_URL = 'http://localhost:5173/'

test.describe('Test search', async () => {
  test('should search a single product', async ({ page }) => {
    await page.goto(DEV_URL)
    const search = await page.getByPlaceholder('Smartphone, Laptop...')
    await expect(search).toBeDefined()

    await search.fill(SINGLE_PRODUCT)
    await search.press('Enter')

    await expect(page).toHaveURL(DEV_URL + SINGLE_PRODUCT_URL)

    const searchResult = await page.getByText(`Search results for "${SINGLE_PRODUCT}"`)
    await expect(searchResult).toBeDefined()
  })

  test('should find a sigle product', async ({ page }) => {
    await page.goto(`http://localhost:5173/${SINGLE_PRODUCT_URL}`)
    const product = await page.getByRole('link', { name: SINGLE_PRODUCT })
    await expect(product).toBeDefined()

    await expect(product).toHaveCount(1)

    await page.close()
  })
})