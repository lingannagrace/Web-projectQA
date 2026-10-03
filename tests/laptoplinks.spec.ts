import { test, expect } from '@playwright/test';


test('laptop links', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation/);
    await page.mouse.wheel(0, 2200);
    await page.waitForTimeout(4000);


    await page.locator("//a[@href='https://www.apple.com/']").click();
    await expect(page).toHaveURL('https://www.apple.com/');
    await page.goBack();
    
});