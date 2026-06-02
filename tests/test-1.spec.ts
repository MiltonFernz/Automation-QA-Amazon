import { test, expect } from '@playwright/test';

test.use({
  headless: false,
})

test('test', async ({ page }) => {
  await page.goto('https://naukri.com/');
  await page.getByRole('link', { name: 'Jobs', exact: true }).hover();
  await page.getByRole('link', { name: 'IT jobs' }).click();
  await page.pause();
});