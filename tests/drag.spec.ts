import { test, expect } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

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
});