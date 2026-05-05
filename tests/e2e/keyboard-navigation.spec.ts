import { test, expect } from '@playwright/test';

test('keyboard navigation works for all visible navbar links', async ({ page }) => {
  await page.goto('/');

  const nav = page.getByRole('navigation');
  await expect(nav).toBeVisible();

  const links = nav.getByRole('link');
  const linkCount = await links.count();

  expect(linkCount).toBeGreaterThan(0);

  for (let i = 0; i < linkCount; i++) {
    const link = links.nth(i);

    await expect(link).toBeVisible();

    const href = await link.getAttribute('href');
    expect(href).toBeTruthy();

    await link.focus();
    await expect(link).toBeFocused();

    const hasFocusIndicator = await link.evaluate((element) => {
      const styles = window.getComputedStyle(element);

      return (
        styles.outlineStyle !== 'none' ||
        styles.outlineWidth !== '0px' ||
        styles.boxShadow !== 'none' ||
        styles.textDecorationLine !== 'none'
      );
    });

    expect(hasFocusIndicator).toBeTruthy();

    await page.keyboard.press('Enter');

    await expect(page).not.toHaveURL('about:blank');

    await page.goto('/');
  }
});