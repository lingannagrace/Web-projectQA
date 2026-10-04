import { test, expect } from '@playwright/test';


test('shadow links', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation/);
    await page.mouse.wheel(0, 2700);
    await page.waitForTimeout(4000);


    await page.locator("//h2[text()='ShadowDOM']");
    await expect(page.locator("//h2[text()='ShadowDOM']")).toBeVisible();

    //await page.getByText('Mobiles').click();
});
test('shadow links 1', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("//h2[text()='ShadowDOM']");
    await expect(page.locator("//h2[text()='ShadowDOM']")).toBeVisible();

});