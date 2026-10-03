import {test, expect} from '@playwright/test';
test('togglebuttons', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html');
//await page.getByTestId('gender-male').selectOption();

await page.getByTestId('toggle-notifications').check();

await page.getByTestId('toggle-email-alerts').uncheck();

await page.getByTestId("toggle-autosave").check();

await page.waitForTimeout(8000);
});