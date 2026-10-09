 import test, { expect } from "@playwright/test";

    test.describe('navigation' , () => {
        test.beforeEach(async ({page}) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page).toHaveTitle(/Automation/);
        await page.waitForTimeout(2000);
        console.log("Test 1 successfully")

});
        test('main navigation', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
  });
    });
    