import {test, expect} from '@playwright/test';
test('tooltip', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html');
//await page.getByTestId('gender-male').selectOption();

await page.mouse.wheel(0,600);
const deliveryButton = page.getByRole('button', {name : 'Delivery estimate'});
await deliveryButton.hover();
//await page.getByRole('button', {name : 'tooltip-trigger'}).hover();

const toolTipState=page.locator('test=Tooltip state: visible');
await expect(toolTipState).toBeVisible();

await page.waitForTimeout(5000);
});