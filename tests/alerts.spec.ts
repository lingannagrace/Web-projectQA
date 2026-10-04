import { test, expect } from '@playwright/test';


test('alert', async ({ page, browser }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/alerts.php');

    await page.locator("//button[text()='Alert']").click();
    page.on('dialog', async dialog => {
    console.log(dialog.message());

    await dialog.accept();

    await page.waitForTimeout(4000);
  });


});

test('click me', async ({ page, browser }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/alerts.php');

    await page.locator("//button[@onclick='myMessage()']").click();
    await page.waitForTimeout(6000);
    page.on('dialog', async dialog => {
    console.log(dialog.message());

    await dialog.accept();
        //await dialog.ok();
    await page.waitForTimeout(4000);
  });


});