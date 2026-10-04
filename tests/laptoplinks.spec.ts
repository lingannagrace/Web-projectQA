import { test, expect } from '@playwright/test';


test('laptop links', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation/);
    await page.mouse.wheel(0, 2000);
    await page.waitForTimeout(4000);


   /* await page.locator("//a[@href='https://www.apple.com/']").click();
    await expect(page).toHaveURL('https://www.apple.com/');
    await page.goBack();*/
    
    //await page.getByPlaceholder('Select an item').selectOption({ label: 'Item 1' });
    // Click input to display dropdown
// Open the dropdown menu
await page.locator('#comboBox').click();

  // 2. Playwright automatically scrolls to the option and clicks it
  const optionToSelect = page.locator('#dropdown .option', { hasText: 'Item 1' });
  
  // Optional explicit scroll into view (usually handled automatically by click)
  await optionToSelect.scrollIntoViewIfNeeded();

  // Click the target option
  await optionToSelect.click();
    await page.waitForTimeout(4000);
});