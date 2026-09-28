import {test, expect} from '@playwright/test';
test('test inputs', async ({ page }) => {

await page.goto('https://www.playwrightautomation.com/practice.html');
await page.mouse.wheel(0,1550);
await page.getByRole('combobox', {name: 'Select Job Title'});
await page.getByRole('option', { name: 'QA Lead' }).click();
await page.waitForTimeout(5000);
});