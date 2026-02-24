const { test, expect } = require('@playwright/test');

test('homepage loads and shows main content', async ({ page }) => {
  const response = await page.goto('/');

  // Fail if 404 or server error
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);

  // Browser tab title (adjust to your real <title>)
  await expect(page).toHaveTitle(/Next Wave Dev/i);

  // Main H1 visible + correct text
  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Next Wave Dev');
});