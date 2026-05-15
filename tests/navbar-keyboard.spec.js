const { test, expect } = require('@playwright/test');

test('navbar links are reachable via keyboard', async ({ page }) => {
  await page.goto('/');

  // Start keyboard navigation
  await page.keyboard.press('Tab');

  // First focus should land on the logo link
  const focused = page.locator(':focus');
  await expect(focused).toBeVisible();

  const navItems = [
    'Contact',
    'About',
    'Developers',
    'Portfolio',
    'Services',
    'Pricing',
    'Donate'
  ];

  for (const item of navItems) {
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toContainText(item);
  }
});

test('navigation links can be activated with Enter', async ({ page }) => {
  await page.goto('/');

  // Tab to first nav item after logo
  await page.keyboard.press('Tab'); // logo
  await page.keyboard.press('Tab'); // Contact

  // Activate with keyboard
  await page.keyboard.press('Enter');

  await expect(page).toHaveURL(/contact/i);
});