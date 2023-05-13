import { test, expect } from '@playwright/test'

const CATEGORY = 'laptops'
const DEV_URL = 'http://localhost:5173/'

test.describe('Test filter', async () => {
  test('should search a single category', async ({ page }) => {
    await page.goto(DEV_URL)
    const filter = await page.getByRole('button', { name: 'Filter' })
    await filter.click()

    await page.selectOption('select#select-category', { value: CATEGORY })
    const  buttonDone = await page.getByRole('article').getByRole('button').nth(1)

    await buttonDone.click()
    await expect(page).toHaveURL(DEV_URL + CATEGORY)

    await page.close()
  })

})