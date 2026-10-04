import { test, expect } from '@playwright/test';

test('accordion', async ({ page }) => {

  await page.goto(
    'https://www.tutorialspoint.com/selenium/practice/accordion.php'
  );

  await expect(page).toHaveTitle(/Accordion/);

  // 1. Locate accordion
  const accordion1 = page.getByRole('button', {
    name: 'What is Lorem Ipsum?',
    exact: true
  });

  // Verify accordion is visible
  await expect(accordion1).toBeVisible();

  // Click accordion
  await accordion1.click();

  // Verify content is visible
  await expect(
    page.getByText(
      "Lorem Ipsum has been the industry's standard dummy text",
      { exact: false }
    )
  ).toBeVisible();
});