import {test, expect} from '@playwright/test';
test('dropdown', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html');
//await page.getByTestId('gender-male').selectOption();

await page.mouse.wheel(0,1550);

await page.getByTestId('dropdown-country').selectOption('Germany');
await page.getByTestId('dropdown-sorted').selectOption('Rabbit');
await expect(page.getByText('Verify default dropdown values are in sorted order.')).toBeVisible();
await page.waitForTimeout(8000);
});