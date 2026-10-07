import { test, expect } from '@playwright/test';


test('alerts 1', async ({ page, browser }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

await page.mouse.wheel(0, 600);
await page.getByRole('button', { name: 'Simple Alert'}).click();
page.on('dialog', async dialog => {
console.log(dialog.message());  

await dialog.accept();
await page.waitForTimeout(4000);
        });
});
test('alerts 2', async ({ page, browser }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

await page.mouse.wheel(0, 600);
await page.getByRole('button', {name: 'Confirmation Alert'}).click();
page.on('dialog', async dialog => {
console.log(dialog.message());  
await dialog.accept();
await page.waitForTimeout(4000);
        });
});
test('alerts 3', async ({ page, browser }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

await page.mouse.wheel(0, 600);
await page.getByRole('button', {name: 'Prompt Alert'}).click();
page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept('welcome to the world of automation');
    await page.waitForTimeout(4000);
       
await page.waitForTimeout(4000);
        });
});