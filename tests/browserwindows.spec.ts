import { test, expect } from '@playwright/test';


test('new tab', async ({ page, browser }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/browser-windows.php');

await page.getByTitle('New Tab').click();
await expect(page).toHaveTitle(/Selenium/);
await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/browser-windows.php');
await page.waitForTimeout(4000);

await page.close();
//await browser.close();
//await page.newPage().close();
});

test('new window', async ({ page, browser }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/browser-windows.php');

await page.getByTitle('New Window').click();
await expect(page).toHaveTitle(/Selenium/);
await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/new-window.php');
await page.waitForTimeout(4000);

await page.close();
//await browser.close();
//await page.newPage().close();
});

test('new window message', async ({ page, browser }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/browser-windows.php');

await page.getByTitle('New Window Message').click();
await expect(page).toHaveTitle(/Selenium/);
await expect(page).toHaveURL('https://www.tutorialspoint.com/selenium/practice/new-window-message.php');
await page.waitForTimeout(4000);

await page.close();
//await browser.close();
//await page.newPage().close();
});