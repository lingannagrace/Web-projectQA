import {test, expect} from '@playwright/test';
test('radio buttons', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');

await page.locator('[data-test="login-button"]').click();

await page.waitForTimeout(5000);
await expect(page.locator('.app_logo')).toBeVisible();
await page.waitForTimeout(5000);

//await page.getByRole('button', {name: 'Add to cart'}).click();
await page.locator('#add-to-cart-sauce-labs-backpack').click();
await page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']").click();
//await page.getByRole('button', {name: 'Add to cart'}).click();
await page.locator('[data-test="inventory-item"]')
  .filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
  .getByRole('button', { name: 'Add to cart' })
  .click();
await page.locator('[data-test="shopping-cart-link"]').click();
await page.locator("//button[@id='checkout']").click();
await page.waitForTimeout(5000);

await page.getByPlaceholder('First Name').fill('lakshmi');
await page.getByPlaceholder('Last Name').fill('narayana');
await page.getByPlaceholder('Zip/Postal Code').fill('560032');
await page.waitForTimeout(5000);

await page.locator("//input[@id='continue']").click();
await page.locator("//button[@id='finish']").click();

});