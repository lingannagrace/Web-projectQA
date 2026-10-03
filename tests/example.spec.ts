import { test, expect } from '@playwright/test';

test('', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation/);

  //await page.mouse.wheel(0, 1200);
  //await page.waitForTimeout(4000);
/*
//await page.locator("//input[@id='singleFileInput']").click();
//await page.locator("//input[@id='singleFileInput']") .setInputFiles("C:\Users\linga\OneDrive\Desktop\ABC.jpeg");
await page.locator('input[type="file"]').first()
        .setInputFiles('C:\\Users\\linga\\OneDrive\\Desktop\\ABC.jpeg');
await page.waitForTimeout(4000);
await page.locator("//input[@id='multipleFilesInput']").first()
        .setInputFiles(['C:\\Users\\linga\\OneDrive\\Desktop\\ABC.jpeg','C:\\Users\\linga\\OneDrive\\Desktop\\Lakshmi4u100\\IMG_0235.JPG']);
        const table = page.locator('#staticWebTable');
    const rows = table.locator('tbody tr');

    for (let i = 0; i < await rows.count(); i++) {

        const row = rows.nth(i);
        const cells = row.locator('td');

        for (let j = 0; j < await cells.count(); j++) {

            console.log(
                await cells.nth(j).innerText()
            );
        }

    }*/
    await page.mouse.wheel(0, 2000);
    await page.waitForTimeout(4000);

    await page.locator("//input[@id='input1']").fill('welcomt to the world of the playwright');
    await page.locator("//button[@id='btn1']").click();

    await page.locator("//input[@id='input2']").fill('welcome to the world of automation');
    await page.locator("//button[@id='btn2']").click();

    await page.locator("//input[@id='input3']").fill('welcome to the world of Model context protocol');
    await page.locator("//button[@id='btn3']").click();

    await page.locator("//a[@href='http://www.deadlinkcity.com/error-page.asp?e=400']").click();
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=400');
    //await expect(page.locator("//h1[@class='error']")).toHaveText('Bad Request');
    await page.goBack();
    await page.locator("//a[@href='http://www.deadlinkcity.com/error-page.asp?e=401']").click();
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=401');
    await page.goBack();
    await page.locator("//a[@href='http://www.deadlinkcity.com/error-page.asp?e=403']").click();
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=403');
    await page.goBack();
    await page.locator("//a[@href='http://www.deadlinkcity.com/error-page.asp?e=404']").click();
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=404');
    await page.goBack();
    await page.locator("//a[@href='http://www.deadlinkcity.com/error-page.asp?e=500']").click();
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=500');
    await page.goBack();
    
});

/*test('get started link', async ({ page }) => 
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/
