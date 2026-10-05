import { test, expect } from '@playwright/test';

test('Multi Select', async ({ page }) => {

  await page.goto(
    'https://www.tutorialspoint.com/selenium/practice/select-menu.php'
  );
 // Scroll down to the multi-select dropdown
 await page.locator('#demo-multiple-select').click();
  await page.locator('#demo-multiple-select').scrollIntoViewIfNeeded();

  // Verify dropdown is visible
  const multiSelect = page.locator('#demo-multiple-select');

  await expect(multiSelect).toBeVisible();

  // Select multiple options
  await multiSelect.selectOption([
    { label: 'Books' },
    { label: 'Movies, Music & Games' },
    { label: 'Electronics & Computers' }
  ]);

});