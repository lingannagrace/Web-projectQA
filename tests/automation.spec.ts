import {test, expect} from '@playwright/test';
test('test inputs', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html');
//await page.goto('https://automationexercise.com/?utm_source=chatgpt.com');
//await page.goto('https://git-scm.com/install/windows');
//await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Playwright/);
   await page.getByPlaceholder('Enter your name').fill('lakshmi narayana');
    await page.getByPlaceholder('Enter your email').fill('lakshmi4u100@gmail.com');
    await page.getByPlaceholder('Enter your address').fill('House no 14 kanaka nagar hebbal 560032');
    await page.getByRole('button', {name : 'submit'}).click();

    await page.getByTestId('btn-reset-text-inputs').click();
   //await expect(page).toHaveURL("playwrightautomation");
   await expect(page).toHaveURL('https://www.playwrightautomation.com/practice.html');

});