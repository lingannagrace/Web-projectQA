import {test, expect} from '@playwright/test';
test('multiselects', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html');
//await page.getByTestId('gender-male').selectOption();
await page.mouse.wheel(0, 550);
await page.getByTestId('multiselect-colors').selectOption(['zara', 'puma-alt','zara-alt']);
//await page.locator('select').selectOption(['zara', 'puma-alt']);//
await page.waitForTimeout(8000);

});