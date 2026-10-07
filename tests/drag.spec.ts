import { test, expect, chromium } from '@playwright/test';
 //const browser = await chromium.launch();
test('Drag and Drop', async ({ page, browser }) => {
  //const browser = await chromium.launch();
  //const page = await browser.newPage(); 
  await page.goto(
    'https://www.tutorialspoint.com/selenium/practice/droppable.php'
  );

  // Source element
  const source = page.locator('#draggable');

  // Target element
  const target = page.locator('#droppable');

  // Verify both are visible
  await expect(source).toBeVisible();
  await expect(target).toBeVisible();

  // Drag and drop
  await source.dragTo(target);

  // Verify successful drop
  await expect(target).toContainText('Dropped!');
  await page.waitForTimeout(4000);

  await browser.close();
});