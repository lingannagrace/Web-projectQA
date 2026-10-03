import { test, expect } from '@playwright/test';


test('Broken links', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation/);
    await page.mouse.wheel(0, 2200);
    await page.waitForTimeout(4000);

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
    await page.locator("//a[@href='http://www.deadlinkcity.com/error-page.asp?e=408']").click();
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=408');
    await page.goBack();
    await page.locator("//a[@href='http://www.deadlinkcity.com/error-page.asp?e=500']").click();
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=500');
    await page.goBack();
    /*await page.locator("//a[@href='http://www.deadlinkcity.com/error-page.asp?e=502']").click();
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=502');
    await page.goBack();*/
    await page.locator("//a[@href='http://www.deadlinkcity.com/error-page.asp?e=503']").click();
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=503');
    await page.goBack();
    
});