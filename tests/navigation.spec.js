const { test, expect } = require('@playwright/test');

test('Navigation loop test for all top-level pages', async ({ page }) => {
  const pages = [
    { name: 'Home', path: '#/Home' },
    { name: 'Contact', path: '#/Contact' },
    { name: 'About', path: '#/About' },
    { name: 'Developers', path: '#/Developers' },
    { name: 'Portfolio', path: '#/Portfolio' },
  ];

  await page.goto('/#/Home');

  for (const pageInfo of pages) {
    const link = page.locator(`a[href="${pageInfo.path}"]`).first();

    await expect(link).toBeVisible();

    await Promise.all([
      page.waitForURL(new RegExp(`${pageInfo.path.replace('#', '\\#')}$`)),
      link.click(),
    ]);

    await expect(page).toHaveURL(new RegExp(`${pageInfo.path.replace('#', '\\#')}$`));

    await expect(page.getByRole('heading').first()).toBeVisible();
  }
});