import { test, expect } from '@playwright/test';

test('auto-complete', async ({ page }) => {

  await page.goto(
    'https://www.tutorialspoint.com/selenium/practice/auto-complete.php' );
    await page.getByText('Auto Complete');
    await expect(page).toHaveTitle(/Auto Complete/);
    await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/auto-complete.php');

    await page.locator("//input[@id='tags']").fill('Testing');
    await page.waitForTimeout(4000);
  });
