import { test, expect } from '@playwright/test';

test('Menu', async ({ page, browser }) => {

await page.goto('https://www.tutorialspoint.com/selenium/practice/menu.php#');

await page.getByText('Menu');
await expect(page).toHaveTitle(/Menu/);
await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/menu.php#');

//await page.locator("//button[@type='button']").hover();


const HoverButton = page.locator("//a[@href='a']");

  // Verify button is visible
  //await expect(homeButton).toBeVisible();
//await HoverButton.hover();
//await HoverButton.click();
//await expect(HoverButton).toBeVisible();
  // Hover over Home
  //await homeButton.hover();

  //browser.close();

});

test('action', async ({ page, browser }) => {

await page.goto('https://www.tutorialspoint.com/selenium/practice/menu.php#');

await page.getByText('Menu');
await expect(page).toHaveTitle(/Menu/);
await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/menu.php#'); 

//await page.locator("//a[@href='#']").selectOption('Action');


  const dropdown = page.locator('select');

  await dropdown.selectOption({ label: 'Action' });

});