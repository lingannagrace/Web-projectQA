import {test, expect} from '@playwright/test';
test('radio buttons', async ({ page }) => {

    //await page.goto('https://www.playwrightautomation.com/practice.html');
//await page.getByTestId('gender-male').selectOption();
/*await page.getByTestId('radio-male').check();
await page.getByTestId('radio-female').check();
await page.getByTestId('radio-nonbinary').check();*/
await page.goto('https://www.tutorialspoint.com/selenium/practice/radio-button.php');

//await page.getByRole('radio', {name: 'tab'}).first().click();
//await page.getByLabel('Yes').check();
//await page.getByLabel('Yes').check();
//await page.locator("//label[normalize-space()='Yes']/input").check();
//await page.getByText('Yes', { exact: true }).click();
  // Verify Yes is selected
  await expect(page.getByLabel('Yes')).toBeChecked();

});