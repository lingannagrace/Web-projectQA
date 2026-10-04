import { test, expect } from '@playwright/test';


test('alert', async ({ page, browser }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/modal-dialogs.php');

    //await page.locator("//button[text()='Small Modal']").click();
    //await page.waitForTimeout(4000);
    //await expect(page.locator("//div[@class='modal-body']")).toBeVisible();
    //await page.locator("//button[text()='Alert']").click();
    await page.locator("//button[text()='Small Modal']").click();
    page.on('dialog', async dialog => {
    console.log(dialog.message());

    await dialog.accept();

    await page.waitForTimeout(4000);
  });

    //await page.locator("//button[@class='btn btn-primary']").click();
    //await page.waitForTimeout(4000);


});