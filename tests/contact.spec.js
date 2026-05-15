import { test, expect } from '@playwright/test';

test('contact form submission shows success with mocked network', async ({ page }) => {
  let mockedRequestSeen = false;

  await page.route(
    '**/forms/d/e/1FAIpQLSc6TcZviCuDGUOS0Nm4geU5rDJnDxlghpY4VMyPbFmZRU3-mg/formResponse',
    async (route) => {
      const request = route.request();

      if (request.method() !== 'POST') {
        await route.continue();
        return;
      }

      mockedRequestSeen = true;

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    }
  );

  await page.goto('http://localhost:3000/#/Home', { waitUntil: 'domcontentloaded' });

  await page.getByLabel('Name').fill('Test User');
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Message').fill('Hello from Playwright test!');

  await page.getByRole('button', { name: 'Submit' }).click();

  expect(mockedRequestSeen).toBe(true);
  await expect(page).toHaveURL(/contact-thank-you/);
});