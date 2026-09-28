import {test, expect} from '@playwright/test';
test('tooltip', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html');
//await page.getByTestId('gender-male').selectOption();

await page.mouse.wheel(0,600);
//const deliveryButton = page.getByRole('button', {name : 'Delivery estimate'});
//await deliveryButton.hover();
//await page.getByRole('button', {name : 'tooltip-trigger'}).hover();

//await page.getByTestId('btn-show-element').click();
const showButton = page.getByRole('button', {name:'show element'});
await showButton.click();
await page.getByTestId('showhide-textbox').fill('Testing ///application');
await page.waitForTimeout(4000);
//await page.getByText('Show Element clicked — the target is now visible.');
//await expect(page.getByText('Show Element clicked — the target is now visible.')).toBeVisible();
//const targetState=page.locator('test=Tooltip state: visible');
//await expect(toolTipState).toBeVisible();
const hideButton = page.getByRole('button', {name: 'hide element'});
await hideButton.click();

await expect(page.getByText('Hide Element clicked — the target is now hidden.')).toBeVisible();
await page.waitForTimeout(8000);
});